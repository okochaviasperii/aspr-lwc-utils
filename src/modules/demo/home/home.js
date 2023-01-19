import { LightningElement, track } from 'lwc';
import asprLwcUtils from "lib/asprLwcUtils";
const { stringUtils: { camelCaseToUpperCase, toCamelCase } } = asprLwcUtils;

import functionsList from "./functionsList";

import generalUtils from './templates/generalUtils.html';


export default class DevKitLWCUtilsDemo extends LightningElement {
    _selectedTemplate = "generalUtils";

    @track templates = {
        generalUtils: {
            template: generalUtils,
            functions: functionsList.generalUtilsList,
            isOpen: true
        }
    }

    get templatesList() {
        return Object.keys(this.templates).map(template => ({
            templateName: camelCaseToUpperCase(template),
            className: `template-selector ${this._selectedTemplate === template ? "selected" : ""}`,
            functions: this.templates[template].functions.map(func => ({ func, href: `/#${template}-${toCamelCase(func)}` })),
            isOpen: this.templates[template].isOpen,
            toggleFunctionsList: (e) => {
                e.stopPropagation();
                this.templates[template].isOpen = !this.templates[template].isOpen
            }

        }))
    }

    onSelectTemplate(e) {
        if (this._selectedTemplate !== e.target.innerHTML) {
            this._selectedTemplate = toCamelCase(e.target.innerHTML);
        }
    }

    get selectedTemplate() {
        return this.templates[this._selectedTemplate] && this.templates[this._selectedTemplate].template;
    }
}