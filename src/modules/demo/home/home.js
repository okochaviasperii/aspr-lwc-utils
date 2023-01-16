import { LightningElement } from 'lwc';
import asprLwcUtils from 'lib/asprLwcUtils';

export default class Home extends LightningElement {
    connectedCallback() {
        console.log("UTILS OBJECT: ", asprLwcUtils)
    }
}