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

    const SVGs = [
        firstSVG()
        , secondSVG()
        , thirdSVG(css)
        , fourthSVG(css)
        , fifthSVG()
        , sixthSVG()
        , seventhSVG()
    ]
    
    SVGs.forEach(SVG => document.body.appendChild(SVG));
    document.head.appendChild(css);

    run();
});

function createElement(element) {
    const NS = 'http://www.w3.org/2000/svg';
    return document.createElementNS(NS, element);
}

function initializeSVG(width, height) {
    const SVG = createElement('svg');

    SVG.setAttribute('width', width);
    SVG.setAttribute('height', height);
    SVG.setAttribute('viewBox', `${-(width/2)} ${-(height/2)} ${width} ${height}`);

    return SVG;
}

function run() {
    run7th();
}

function firstSVG() {
    const SVG = initializeSVG(200, 200);
    
    const circle = new Vector('circle');
    circle.cy = 20;
    circle.r = 70;
    circle.fill = '#D45';
    circle.appendTo(SVG);
    
    const rect = new Vector('rect');
    rect.x = -17.5;
    rect.y = -65;
    rect.width = 35;
    rect.height = 20;
    rect.fill = '#F95';
    rect.appendTo(SVG);

    const circle2 = new Vector('circle');
    circle2.cy = -75;
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
    polygon.points = '0,0 80,120 -80,120';
    polygon.fill = '#243';
    polygon.appendTo(SVG);
    
    const polygon2 = new Vector('polygon');
    polygon2.points = '0,-40 60,60 -60,60';
    polygon2.fill = '#054';
    polygon2.appendTo(SVG);
    
    const polygon3 = new Vector('polygon');
    polygon3.points = '0,-80 40,0 -40,0';
    polygon3.fill = '#375';
    polygon3.appendTo(SVG);

    const rect = new Vector('rect');
    rect.x = -20;
    rect.y = 120;
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
    circle.cy = -50;
    circle.r = 30;
    circle.appendTo(SVG);

    const headS = new CSSRule('.head');
    headS.fill = '#C83';
    headS.appendTo(css);

    const line = new Vector('line');
    line.class = 'limb';
    line.x1 = -40;
    line.y1 = -10;
    line.x2 = 40;
    line.y2 = -10;
    line.appendTo(SVG);

    const line2 = new Vector('line');
    line2.class = 'limb';
    line2.x1 = -25;
    line2.y1 = 50;
    line2.y2 = -15;
    line2.appendTo(SVG);

    const line3 = new Vector('line');
    line3.class = 'limb';
    line3.x1 = 25;
    line3.y1 = 50;
    line3.y2 = -15;
    line3.appendTo(SVG);

    const limbS = new CSSRule('.limb');
    limbS.stroke = '#C83';
    limbS.stroke_width = '35px';
    limbS.stroke_linecap = 'round';
    limbS.appendTo(css);

    const rect = new Vector('rect');
    rect.class = 'mouth';
    rect.x = -10;
    rect.y = -40;
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
    circle2.cx = -12;
    circle2.cy = -55;
    circle2.r = 3;
    circle2.appendTo(SVG);

    const circle3 = new Vector('circle');
    circle3.class = 'eye';
    circle3.cx = 12;
    circle3.cy = -55;
    circle3.r = 3;
    circle3.appendTo(SVG);
    
    const eyeS = new CSSRule('.eye');
    eyeS.fill = 'white';
    eyeS.appendTo(css);
    
    const circle4 = new Vector('circle');
    circle4.class = 'button';
    circle4.cy = -10;
    circle4.r = 5;
    circle4.appendTo(SVG);
    
    const circle5 = new Vector('circle');
    circle5.cy = 10;
    circle5.r = 5;
    circle5.appendTo(SVG);

    return SVG;
}

function fourthSVG(css) {
    const SVG = initializeSVG(200, 200);
    SVG.setAttribute('class', 'house');

    const polygon = new Vector('polygon');
    polygon.class = 'wall';
    polygon.points = '-65,80 -65,-10 0,-70 65,-10 65,80';
    polygon.appendTo(SVG);

    const houseS = new CSSRule('.house');
    houseS.stroke = 'black';
    houseS.stroke_width = '2px';
    houseS.fill = 'white';
    houseS.appendTo(css);

    const polyline = new Vector('polyline');
    polyline.class = 'roof';
    polyline.points = '-75,-8 0,-78 75,-8';
    polyline.appendTo(SVG);

    const roofS = new CSSRule('.house .roof');
    roofS.fill = 'none';
    roofS.stroke = '#D45';
    roofS.stroke_width = '10px';
    roofS.stroke_linecap = 'round';
    roofS.appendTo(css);

    const rect = new Vector('rect');
    rect.class = 'door';
    rect.x = -45;
    rect.y = 10;
    rect.width = 30;
    rect.height = 60;
    rect.rx = 2;
    rect.appendTo(SVG);

    const doorS = new CSSRule('.house .door');
    doorS.fill = '#D45';
    doorS.appendTo(css);

    const circle = new Vector('circle');
    circle.class = 'door-knob';
    circle.cx = -35;
    circle.cy = 40;
    circle.r = 2;
    circle.appendTo(SVG);

    const rect2 = new Vector('rect');
    rect2.class = 'stair';
    rect2.x = -47;
    rect2.y = 70;
    rect2.width = 34;
    rect2.height = 5;
    rect2.appendTo(SVG);
    
    const rect3 = new Vector('rect');
    rect3.class = 'stair';
    rect3.x = -49;
    rect3.y = 75;
    rect3.width = 38;
    rect3.height = 5;
    rect3.appendTo(SVG);

    const stairS = new CSSRule('.house .stair');
    stairS.fill = 'gray';
    stairS.appendTo(css);

    const rect4 = new Vector('rect');
    rect4.class = 'window';
    rect4.x = 5;
    rect4.y = 15;
    rect4.width = 40;
    rect4.height = 35;
    rect4.rx = 5;
    rect4.appendTo(SVG);

    const line = new Vector('line');
    line.x1 = 5;
    line.y1 = 32.5;
    line.x2 = 45;
    line.y2 = 32.5;
    line.appendTo(SVG);
    
    const line2 = new Vector('line');
    line2.x1 = 25;
    line2.y1 = 15;
    line2.x2 = 25;
    line2.y2 = 50;
    line2.appendTo(SVG);

    const rect5 = new Vector('rect');
    rect5.class = 'window-sill';
    rect5.x = 2;
    rect5.y = 48;
    rect5.width = 46;
    rect5.height = 5;
    rect5.rx = 5;
    rect5.appendTo(SVG);

    const circle2 = new Vector('circle');
    circle2.class = 'window';
    circle2.cy = -25;
    circle2.r = 15;
    circle2.appendTo(SVG);

    const line3 = new Vector('line');
    line3.x1 = -15;
    line3.y1 = -25;
    line3.x2 = 15;
    line3.y2 = -25;
    line3.appendTo(SVG);
    
    const line4 = new Vector('line');
    line4.y1 = -40;
    line4.y2 = -10;
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
    arrow.d = 'M -70 0'
            + 'L 70 0'
            + 'L 30 -50'
            + 'M 70 0'
            + 'L 30 50';
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
    g.transform = 'translate(0 5)';
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

function seventhSVG() {
    const SVG = initializeSVG(200, 200);

    const rect = new Vector('rect');
    rect.x = -100;
    rect.y = -100;
    rect.width = 200;
    rect.height = 200;
    rect.fill = '#C83';
    rect.appendTo(SVG);

    const circle = new Vector('circle');
    circle.r = 55;
    circle.stroke = '#FC7'
    circle.stroke_width = 10;
    circle.fill = 'white';
    circle.appendTo(SVG);
    
    const circle2 = new Vector('circle');
    circle2.r = 45;
    circle2.stroke = '#B75';
    circle2.stroke_width = 6;
    circle2.stroke_dasharray = '6 17.6';
    circle2.stroke_dashoffset = 3;
    circle2.fill = 'none';
    circle2.appendTo(SVG);

    const g = new Vector('g');
    g.stroke = '#546';
    g.stroke_linecap = 'round';
    g.appendTo(SVG);

    const line = new Vector('line');
    line.id = 'hours';
    line.y2 = -20;
    line.stroke_width = 8;
    line.appendTo(g);
    
    const line2 = new Vector('line');
    line2.id = 'minutes';
    line2.y2 = -35;
    line2.stroke_width = 6;
    line2.appendTo(g);

    return SVG;
}

function run7th() {
    const hoursPointer = document.getElementById('hours');
    const minutesPointer = document.getElementById('minutes');

    const hour = new Date().getHours() % 12;
    const minute = new Date().getMinutes();

    hoursPointer.setAttribute('transform', `rotate(${(360/12) * hour})`);
    minutesPointer.setAttribute('transform', `rotate(${(360/60) * minute})`);
}