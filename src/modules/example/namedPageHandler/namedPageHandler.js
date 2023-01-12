export default class NamedPageHandler {
    callback;

    constructor(callback) {
        this.callback = callback;
    }

    dispose() {
        /* noop */
    }

    update({ attributes }) {
        // let viewGetter;

        // // Get the "pageName" from the incoming page reference
        // switch (attributes.pageName) {
        //     case 'products':
        //         viewGetter = () => import('example/products');
        //         break;
        //     case 'recipes':
        //         viewGetter = () => import('example/recipes');
        //         break;
        //     case 'contact':
        //         viewGetter = () => import('example/contact');
        //         break;
        //     default:
        //         return;
        // }
        
        console.log("PAGE NAME: ", attributes.pageName);

        this.callback({
            viewset: {
                default: () => import(`example/${attributes.pageName}`),
            },
        });
    }
}