import { Vector } from './Vector.js';
import { CSSRule } from './CSSRule.js';

document.addEventListener('DOMContentLoaded', _ => {
    const css = document.createElement('style');

    const svgS = new CSSRule('svg');
    svgS.border = 'dotted black';
    svgS.appendTo(css);

    const bodyS = new CSSRule('body');
    bodyS.display = 'flex';
    bodyS.gap = '8px';
    bodyS.appendTo(css);

    const SVGs = [
        firstSVG(),
        secondSVG(),
        thirdSVG(css)
    ]
    
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
