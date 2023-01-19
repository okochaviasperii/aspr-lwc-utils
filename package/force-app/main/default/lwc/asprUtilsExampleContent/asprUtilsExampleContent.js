import { LightningElement } from 'lwc';
import asprLwcUtils from 'c/asprLwcUtils';

const { objectUtils: { omit } } = asprLwcUtils;

export default class AsprUtilsExampleContent extends LightningElement {
    obj = { a: 1, b: 2, c:3 };

    get omittedObj() {
        // const { objectUtils: { omit } } = window.asprLwcUtils;
        return omit(this.obj, "b");
    }

    get displayObj() {
        return JSON.stringify(this.obj);
    }

    get displayOmittedObj() {
        return JSON.stringify(this.omittedObj);
    }
}