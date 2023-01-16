import { LightningElement } from 'lwc';
import generalUtils from './templates/generalUtils.html';
import asprLwcUtils from "lib/asprLwcUtils";
const { stringUtils: { camelCaseToUpperCase } } = asprLwcUtils;

export default class DevKitLWCUtilsDemo extends LightningElement {
    _selectedTemplate = "generalUtils";

    templates = {
        generalUtils
    }

    get templatesList() {
        return Object.keys(this.templates).map(template => ({
            templateName: camelCaseToUpperCase(template),
            className: `template-selector ${this._selectedTemplate === template ? "selected" : ""}`
        }))
    }

    onSelectTemplate(e) {
        this._selectedTemplate = e.target.innerHTML;
    }

    get selectedTemplate() {
        return this.templates[this._selectedTemplate];
    }
}