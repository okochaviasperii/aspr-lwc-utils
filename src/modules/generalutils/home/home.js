import { LightningElement } from 'lwc';

export default class Home extends LightningElement {
    static renderMode = 'light';
    firstLoad = true;

    get root() {
        return this.firstChild.parentElement;
    }

    renderedCallback() {
        if (location && location.hash && this.firstLoad) {
            const elem = this.querySelector(location.hash);
            elem.scrollIntoView();
        }
        
    }
}