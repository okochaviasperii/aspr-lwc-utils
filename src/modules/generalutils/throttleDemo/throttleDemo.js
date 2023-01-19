import { LightningElement } from 'lwc';
import asprLwcUtils from 'lib/asprLwcUtils';
const { generalUtils: { throttle } } = asprLwcUtils;

export default class ThrottleDemo extends LightningElement {
    initialRender = false;

    resizeableDiv1;
    resizeableDiv2;

    width1 = "";
    height1 = "";

    width2 = "";
    height2 = "";

    counter = 0;
    scrollPosition = 0;

    get counterText() {
        return `Number of scroll events: ${this.counter}`;
    }

    get scrollPositionText() {
        return `Scroll position: ${this.scrollPosition}px`;
    }

    updateScrollPosition(scrollTop) {
        this.scrollPosition = scrollTop;
        this.counter++;
    }

    throttled_updateScrollPosition = throttle(this.updateScrollPosition, 200, this);

    scrollHandler(e) {
        const { scrollTop } = e.target;
        this.throttled_updateScrollPosition(scrollTop);
    }

    get resizeableDivs() {
        return this.template.querySelectorAll(".resizeable");
    }

    updateDimensions1() {
        this.width1 = this.resizeableDiv1.offsetWidth;
        this.height1 = this.resizeableDiv1.offsetHeight;
    }

    updateDimensions2() {
        this.width2 = this.resizeableDiv2.offsetWidth;
        this.height2 = this.resizeableDiv2.offsetHeight;
    }

    renderedCallback() {
        if (!this.initialRender) {
            this.resizeableDiv1 = this.resizeableDivs[0];
            this.resizeableDiv2 = this.resizeableDivs[1];
            this.updateDimensions1();
            this.updateDimensions2();
            new ResizeObserver(this.updateDimensions1.bind(this)).observe(this.resizeableDiv1);
            new ResizeObserver(throttle(this.updateDimensions2.bind(this), 300)).observe(this.resizeableDiv2);
            this.initialRender = true;
        }
    }
}