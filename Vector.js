export class Vector {
    static NS = 'http://www.w3.org/2000/svg';
    
    constructor(element, transform) {
        if (element.includes('#')) {
            this.element = document.createElementNS(Vector.NS, 'use');
            this.href = element;
            if (transform) {
                this.transform = transform;
            }
            return;
        }
        this.element = document.createElementNS(Vector.NS, element);
    }

    appendTo(svg) {
        svg = svg.element ? svg.element : svg;
        this.setAttributes();
        svg.appendChild(this.element);
    }

    setAttributes() {
        Object.keys(this).forEach(key => {
            if (key !== 'element') {
                this.element.setAttribute(key.replace(/_/g, '-'), this[key]);
            }
        });
    }
}