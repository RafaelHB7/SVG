import { Vector } from './Vector.js';
import { CSSRule } from './CSSRule.js';

document.addEventListener('DOMContentLoaded', _ => {
    const css = document.createElement('style');

    const svgS = new CSSRule('svg');
    svgS.border = 'dotted black';
    svgS.appendTo(css);

    const bodyS = new CSSRule('body');
    bodyS.display = 'grid';
    bodyS.gap = '8px';
    bodyS.appendTo(css);

    const SVGs = [
        firstSVG(),
        secondSVG(),
        thirdSVG(css),
        fourthSVG(css),
        fifthSVG(),
        sixthSVG()
    ]

    const nth1S = new CSSRule('body :nth-child(3)');
    nth1S.grid_column = '2';
    nth1S.grid_row = '1/3';
    nth1S.appendTo(css);

    const nth2S = new CSSRule('body :nth-child(4)');
    nth2S.grid_column = '3';
    nth2S.appendTo(css);

    const nth3S = new CSSRule('body :nth-child(5)');
    nth3S.grid_row = '2';
    nth3S.appendTo(css);
    
    SVGs.forEach(SVG => document.body.appendChild(SVG));
    document.head.appendChild(css);
});

function createElement(element) {
    const NS = 'http://www.w3.org/2000/svg';
    return document.createElementNS(NS, element);
}

function initializeSVG(width, height) {
    const SVG = createElement('svg');

    SVG.setAttribute('width', width);
    SVG.setAttribute('height', height);
    SVG.setAttribute('viewBox', `0 0 ${width} ${height}`);

    return SVG;
}

function firstSVG() {
    const SVG = initializeSVG(200, 200);
    
    const circle = new Vector('circle');
    circle.cx = 100;
    circle.cy = 120;
    circle.r = 70;
    circle.fill = '#D45';
    circle.appendTo(SVG);
    
    const rect = new Vector('rect');
    rect.x = 82.5;
    rect.y = 35;
    rect.width = 35;
    rect.height = 20;
    rect.fill = '#F95';
    rect.appendTo(SVG);

    const circle2 = new Vector('circle');
    circle2.cx = 100;
    circle2.cy = 25;
    circle2.r = 12;
    circle2.fill = 'none';
    circle2.stroke = '#F95';
    circle2.stroke_width = 2;
    circle2.appendTo(SVG);

    return SVG;
}

function secondSVG() {
    const SVG = initializeSVG(200, 400);

    const polygon = new Vector('polygon');
    polygon.points = '100,200 20,320 180,320';
    polygon.fill = '#243';
    polygon.appendTo(SVG);
    
    const polygon2 = new Vector('polygon');
    polygon2.points = '100,160 40,260 160,260';
    polygon2.fill = '#054';
    polygon2.appendTo(SVG);
    
    const polygon3 = new Vector('polygon');
    polygon3.points = '100,120 60,200 140,200';
    polygon3.fill = '#375';
    polygon3.appendTo(SVG);

    const rect = new Vector('rect');
    rect.x = 80;
    rect.y = 320;
    rect.width = 40;
    rect.height = 30;
    rect.fill = 'brown';
    rect.appendTo(SVG);
    
    return SVG;
}

function thirdSVG(css) {
    const SVG = initializeSVG(200, 200);

    const circle = new Vector('circle');
    circle.class = 'head';
    circle.cx = 100;
    circle.cy = 50;
    circle.r = 30;
    circle.appendTo(SVG);

    const headS = new CSSRule('.head');
    headS.fill = '#C83';
    headS.appendTo(css);

    const line = new Vector('line');
    line.class = 'limb';
    line.x1 = 60;
    line.y1 = 90;
    line.x2 = 140;
    line.y2 = 90;
    line.appendTo(SVG);

    const line2 = new Vector('line');
    line2.class = 'limb';
    line2.x1 = 75;
    line2.y1 = 150;
    line2.x2 = 100;
    line2.y2 = 85;
    line2.appendTo(SVG);

    const line3 = new Vector('line');
    line3.class = 'limb';
    line3.x1 = 125;
    line3.y1 = 150;
    line3.x2 = 100;
    line3.y2 = 85;
    line3.appendTo(SVG);

    const limbS = new CSSRule('.limb');
    limbS.stroke = '#C83';
    limbS.stroke_width = '35px';
    limbS.stroke_linecap = 'round';
    limbS.appendTo(css);

    const rect = new Vector('rect');
    rect.class = "mouth";
    rect.x = 90;
    rect.y = 60;
    rect.width = 20;
    rect.height = 5;
    rect.rx = 2;
    rect.appendTo(SVG);

    const mouthS = new CSSRule('.mouth');
    mouthS.fill = 'none';
    mouthS.stroke = 'white';
    mouthS.stroke_width = '2px';
    mouthS.appendTo(css);

    const circle2 = new Vector('circle');
    circle2.class = 'eye';
    circle2.cx = 88;
    circle2.cy = 45;
    circle2.r = 3;
    circle2.appendTo(SVG);

    const circle3 = new Vector('circle');
    circle3.class = 'eye';
    circle3.cx = 112;
    circle3.cy = 45;
    circle3.r = 3;
    circle3.appendTo(SVG);
    
    const eyeS = new CSSRule('.eye');
    eyeS.fill = 'white';
    eyeS.appendTo(css);
    
    const circle4 = new Vector('circle');
    circle4.class = 'button';
    circle4.cx = 100;
    circle4.cy = 90;
    circle4.r = 5;
    circle4.appendTo(SVG);
    
    const circle5 = new Vector('circle');
    circle5.cx = 100;
    circle5.cy = 110;
    circle5.r = 5;
    circle5.appendTo(SVG);

    return SVG;
}

function fourthSVG(css) {
    const SVG = initializeSVG(200, 200);
    SVG.setAttribute('class', 'house');

    const polygon = new Vector('polygon');
    polygon.class = 'wall';
    polygon.points = '35,180 35,90 100,30 165,90 165,180';
    polygon.appendTo(SVG);

    const houseS = new CSSRule('.house');
    houseS.stroke = 'black';
    houseS.stroke_width = '2px';
    houseS.fill = 'white';
    houseS.appendTo(css);

    const polyline = new Vector('polyline');
    polyline.class = 'roof';
    polyline.points = '25,92 100,22 175,92';
    polyline.appendTo(SVG);

    const roofS = new CSSRule('.house .roof');
    roofS.fill = 'none';
    roofS.stroke = '#D45';
    roofS.stroke_width = '10px';
    roofS.stroke_linecap = 'round';
    roofS.appendTo(css);

    const rect = new Vector('rect');
    rect.class = 'door';
    rect.x = 55;
    rect.y = 110;
    rect.width = 30;
    rect.height = 60;
    rect.rx = 2;
    rect.appendTo(SVG);

    const doorS = new CSSRule('.house .door');
    doorS.fill = '#D45';
    doorS.appendTo(css);

    const circle = new Vector('circle');
    circle.class = 'door-knob';
    circle.cx = 65;
    circle.cy = 140;
    circle.r = 2;
    circle.appendTo(SVG);

    const rect2 = new Vector('rect');
    rect2.class = 'stair';
    rect2.x = 53;
    rect2.y = 170;
    rect2.width = 34;
    rect2.height = 5;
    rect2.appendTo(SVG);
    
    const rect3 = new Vector('rect');
    rect3.class = 'stair';
    rect3.x = 51;
    rect3.y = 175;
    rect3.width = 38;
    rect3.height = 5;
    rect3.appendTo(SVG);

    const stairS = new CSSRule('.house .stair');
    stairS.fill = 'gray';
    stairS.appendTo(css);

    const rect4 = new Vector('rect');
    rect4.class = 'window';
    rect4.x = 105;
    rect4.y = 115;
    rect4.width = 40;
    rect4.height = 35;
    rect4.rx = 5;
    rect4.appendTo(SVG);

    const line = new Vector('line');
    line.x1 = 105;
    line.y1 = 132.5;
    line.x2 = 145;
    line.y2 = 132.5;
    line.appendTo(SVG);
    
    const line2 = new Vector('line');
    line2.x1 = 125;
    line2.y1 = 115;
    line2.x2 = 125;
    line2.y2 = 150;
    line2.appendTo(SVG);

    const rect5 = new Vector('rect');
    rect5.class = 'window-sill';
    rect5.x = 102;
    rect5.y = 148;
    rect5.width = 46;
    rect5.height = 5;
    rect5.rx = 5;
    rect5.appendTo(SVG);

    const circle2 = new Vector('circle');
    circle2.class = 'window';
    circle2.cx = 100;
    circle2.cy = 75;
    circle2.r = 15;
    circle2.appendTo(SVG);

    const line3 = new Vector('line');
    line3.x1 = 85;
    line3.y1 = 75;
    line3.x2 = 115;
    line3.y2 = 75;
    line3.appendTo(SVG);
    
    const line4 = new Vector('line');
    line4.x1 = 100;
    line4.y1 = 60;
    line4.x2 = 100;
    line4.y2 = 90;
    line4.appendTo(SVG);
    
    const windowS = new CSSRule('.house .window');
    windowS.fill = '#FE9';
    windowS.appendTo(css);

    const windowSillS = new CSSRule('.house .window-sill');
    windowSillS.fill = '#D45';
    windowSillS.stroke_linecap = 'round';
    windowSillS.appendTo(css);

    return SVG;
}

function fifthSVG() {
    const SVG = initializeSVG(200, 200);

    const arrow = new Vector('path');
    arrow.d = 'M 30 100'
            + 'L 170 100'
            + 'L 130 50'
            + 'M 170 100'
            + 'L 130 150';
    arrow.fill = 'none';
    arrow.stroke = '#D45';
    arrow.stroke_width = 25;
    arrow.stroke_linecap = 'round';
    arrow.stroke_linejoin = 'round';
    arrow.appendTo(SVG);

    return SVG;
}

function sixthSVG() {
    const SVG = initializeSVG(200, 200);

    const g = new Vector('g');
    g.transform = "translate(100 105)";
    g.appendTo(SVG);
    
    const angles = [0, 72, -72, 144, -144];
    
    for (let angle of angles) {
        const g1 = new Vector('g');
        g1.transform = `rotate(${angle})`;
        g1.appendTo(g);
    
        const polygon = new Vector('polygon');
        polygon.points = '0,0 36,-50 0,-100';
        polygon.fill = '#EDB';
        polygon.appendTo(g1);
        
        const polygon2 = new Vector('polygon');
        polygon2.points = '0,0 -36,-50 0,-100';
        polygon2.fill = '#EC9';
        polygon2.appendTo(g1);
    }

    return SVG;
}