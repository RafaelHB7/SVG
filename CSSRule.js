export class CSSRule {    
    constructor(selector) {
        this.selector = selector;
    }

    appendTo(css) {
        css.innerHTML = css.innerHTML 
                + this.createRule();
    }

    createRule() {
        const selector = this.selector;
        delete this.selector;
        return selector 
                + JSON.stringify(this)
                .replace(/\$\b(\w+)\b":\s*"([^"]*)"\s*(?:,\s*)?/g, '$1{$2}')
                .replace(/"/g, '')
                .replace(/,/g, ';')
                .replace(/_/g, '-');
    }
}