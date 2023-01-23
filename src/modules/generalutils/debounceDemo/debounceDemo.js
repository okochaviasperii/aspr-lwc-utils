import { LightningElement } from 'lwc';
import asprLwcUtils from 'lib/asprLwcUtils';
const { generalUtils: { debounce } } = asprLwcUtils;

export default class DebounceDemo extends LightningElement {
    log = "Start typing..";
    requests = 0;
    touched = false;
    
    debounceWait = 250;

    signatureCode = `
        function debounce(func: Function, [wait: number = 0], [context: Object = this], [leading: boolean = false]) => Function
    `

    exampleCode = `
        // non-debounced changed handler
        onChangeInput(e) {
            const { value } = e.target;
            this.onSetNewSearchValue(value);
        }

        // debounced change handler
        debouncedOnChangeInput = debounce(this.onSetNewSearchValue, this.debounceWait, this)

        onChangeInput_debounced(e) {
            const { value } = e.target;
            this.debouncedOnChangeInput(value);
        }
    `

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

    // non-debounced changed handler
    onChangeInput(e) {
        const { value } = e.target;
        this.onSetNewSearchValue(value);
    }

    // debounced change handler
    debouncedOnChangeInput = debounce(this.onSetNewSearchValue, this.debounceWait, this)

    onChangeInput_debounced(e) {
        const { value } = e.target;
        this.debouncedOnChangeInput(value);
    }
}