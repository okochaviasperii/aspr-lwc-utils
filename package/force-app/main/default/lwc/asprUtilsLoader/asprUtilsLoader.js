import { LightningElement } from 'lwc';
import asprLwcUtils from '@salesforce/resourceUrl/asprLwcUtils';
import { loadScriptWithCache } from 'c/asprLwcSfUtils';

export default class AsprUtilsLoader extends LightningElement {
    isLoading = true;

    connectedCallback() {
        Promise.all([
            loadScriptWithCache(this, asprLwcUtils)
        ]).then(() => {
            this.isLoading = false;
        })
    }
}