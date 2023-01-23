import { LightningElement, api } from 'lwc';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export default class highlightedCode extends LightningElement {
    @api code = "console.log";

    get exampleTemplate() {
        return this.template.querySelector(".example-code")
    }

    get formattedCode() {
        let leadingSpaces = 0;
        
        let currIndex = 0;

        while (this.code.charAt(currIndex) === "\n") {
            currIndex++;
        }

        while (this.code.charAt(currIndex) === " ") {
            leadingSpaces++;
            currIndex++;
        }

        const reg = new RegExp(`^ {${leadingSpaces}}`, "gm");
        return this.code.replace(reg, '').trim();
    }

    renderedCallback() {
        const pre = this.exampleTemplate;
        if (pre && this.code) {
            pre.innerHTML = `<code>${this.formattedCode}</code>`
            hljs.highlightElement(this.exampleTemplate);
        }
    }
}