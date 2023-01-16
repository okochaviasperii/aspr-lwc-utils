import { LightningElement } from 'lwc';

export default class DebounceAndDemoThrottle extends LightningElement {
    counter = 0;
    scrollPosition = 0;

    get counterText() {
        return `Number of scroll events: ${this.counter}`;
    }

    get scrollPositionText() {
        return `Scroll position: ${this.scrollPosition}px`;
    }

    scrollHandler(e) {
        this.scrollPosition = e.target.scrollTop;
        this.counter++;
    }
}