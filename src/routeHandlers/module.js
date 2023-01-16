export default function moduleRouteHandler(viewRequest, handlerContext) {
    const routeProperties = handlerContext.route.properties || {};
    const { params } = viewRequest;
    const module = params.module || "";

    return {
        // Required: customize the current route by setting:
        // { rootComponent?, contentTemplate?, layoutTemplate? }
        view: {
            rootComponent: `${module.replaceAll(".", "/")}`,
            layoutTemplate: "$layoutsDir/main.html"
        },
        // Required: pass context to the templates
        viewParams: {
            ...params, // pass the "message" path param
            ...routeProperties, // pass the static route properties
        },
    };
}