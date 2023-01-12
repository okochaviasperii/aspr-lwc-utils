import { LightningElement } from 'lwc';
import { createRouter } from 'lwr/router';

// Route definition array
const routes = [
    {
        id: 'home',
        uri: '/',
        handler: () => import('example/homePageHandler'),
        page: {
            type: 'home',
        },
    },
    {
        id: 'namedPage',
        uri: '/:pageName',
        handler: () => import('example/namedPageHandler'),
        page: {
            type: 'namedPage',
            attributes: {
                pageName: ':pageName',
            },
        },
    },
];

export default class SimpleRoutingApp extends LightningElement {
    router = createRouter({ routes });

    homeReference = { type: 'home' }; // Home page reference for the page-link
    testReference = { type: 'namedPage', attributes: { pageName: 'test' } }
}