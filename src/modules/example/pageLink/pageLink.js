
import { LightningElement, api, track, wire } from 'lwc';
import { NavigationContext, generateUrl, navigate } from 'lwr/navigation';

export default class PageLink extends LightningElement {
    @api label;
    @api pageReference;
    @track path;

    @wire(NavigationContext)
    navContext;

    async connectedCallback() {
        // Add an href to the link anchor
        if (this.pageReference && this.navContext) {
            this.path = generateUrl(this.navContext, this.pageReference) || undefined;
        }
    }

    handleClick(event) {
        // Navigate when the link is clicked
        event.preventDefault();
        if (this.pageReference && this.navContext) {
            navigate(this.navContext, this.pageReference);
        }
    }
}
