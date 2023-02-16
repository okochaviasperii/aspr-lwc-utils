import { LightningElement, track } from 'lwc';
import asprLwcUtils from "lib/asprLwcUtils";
const { stringUtils: { camelCaseToCapitalized, toCamelCase } } = asprLwcUtils;

import functionsList from "./functionsList";

import generalUtils from './templates/generalUtils.html';
import stringUtils from './templates/stringUtils.html';


export default class DevKitLWCUtilsDemo extends LightningElement {
    firstLoad = true;
    _selectedTemplate = "generalUtils";
    currentHash = null;

    @track templates = {
        generalUtils: {
            template: generalUtils,
            functions: functionsList.generalUtilsList,
            isOpen: true
        },
        stringUtils: {
            template: stringUtils,
            functions: functionsList.stringUtilsList,
            isOpen: false
        }
    }

    get urlPrefix() {
        const env = process.env.NODE_ENV;
        return env === "prod" ? "/aspr-lwc-utils/#" : "/#";
    }

    get templatesList() {
        console.log("URL PREFIX: ", this.urlPrefix);
        return Object.keys(this.templates).map(template => ({
            templateName: camelCaseToCapitalized(template),
            className: `template-selector ${this._selectedTemplate === template ? "selected" : ""}`,
            functions: this.templates[template].functions.map(func => ({ func, href: `${this.urlPrefix}${template}-${toCamelCase(func)}` })),
            isOpen: this.templates[template].isOpen,
            toggleFunctionsList: (e) => {
                e.stopPropagation();
                this.templates[template].isOpen = !this.templates[template].isOpen
            },
            href: `${this.urlPrefix}${template}`,
            onSelectTemplate: () => {
                if (this._selectedTemplate !== template) {
                    this._selectedTemplate = template;
                }
            }
        }))
    }

    get selectedTemplate() {
        return this.templates[this._selectedTemplate] && this.templates[this._selectedTemplate].template;
    }

    onLocationChange() {
        const { hash } = window.location;
        if (hash) {
            const [ template, section ] = hash.split("-");
            this._selectedTemplate = template.slice(1);
        }
    }

    connectedCallback() {
        if (this.firstLoad) {
            this.onLocationChange();
            window.addEventListener("hashchange", this.onLocationChange.bind(this));
            this.firstLoad = false;
        }
    }
}