import { LightningElement, api } from 'lwc';
import defaultTemplate from "./asprTemplateRenderer.html";

export default class AsprTemplateRenderer extends LightningElement {
    @api template;
    
    render() {
        return this.template || defaultTemplate;
    }

    renderedCallback() {

    }
}