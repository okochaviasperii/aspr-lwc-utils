import { LightningElement } from 'lwc';
import asprLwcUtils from 'lib/asprLwcUtils';
const { generalUtils: { debounce } } = asprLwcUtils;

export default class DebounceDemo extends LightningElement {
    log = "Start typing..";
    requests = 0;
    touched = false;
    
    debounceWait = 250;

    get displayLog() {
        return this.touched ? `Changed input value to: ${this.log}` : "";
    }

    get displayRequests() {
        return this.touched ? `Number of potential requests sent: ${this.requests}` : "";
    }

    onSetNewSearchValue(value) {
        if (!this.touched) {
            this.touched = true;
        }
        this.log = value;
        this.requests++;
    }

    onChangeInput(e) {
        const { value } = e.target;
        this.onSetNewSearchValue(value);
    }

    debouncedOnChangeInput = debounce(this.onSetNewSearchValue, this.debounceWait, this)

    onChangeInput_debounced(e) {
        const { value } = e.target;
        this.debouncedOnChangeInput(value);
    }
}