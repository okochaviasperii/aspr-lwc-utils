import { LightningElement } from 'lwc';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);


import asprLwcUtils from 'lib/asprLwcUtils';
const { stringUtils: { toCamelCase } } = asprLwcUtils;

export default class toCamelCaseDemo extends LightningElement {
    signatureCode = `
        function toCamelCase(str: string = "") => string
    `
    exampleCode = `
        console.log(toCamelCase("Hello World"));
        // ${toCamelCase("Hello World")}

        console.log(toCamelCase("hello_world"));
        // ${toCamelCase("hello_world")}

        console.log(toCamelCase("__HELLO-WORLD__"));
        // ${toCamelCase("__HELLO-WORLD__")}
    `
}