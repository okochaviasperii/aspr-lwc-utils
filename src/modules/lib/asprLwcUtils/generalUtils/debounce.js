export const debounce = (func, wait = 0, context = this, leading = false) => {
    let timeout;

    return function(...params) {
        clearTimeout(timeout);

        function later() {
            console.log("PARAMS VALUE AFTER: ", params[0])
            timeout = null;
            if (!leading) {
                func.apply(context, params);
            }
        };

        const callNow = leading && !timeout;

        console.log("PARAMS VALUE BEFORE: ", params[0])
        timeout = setTimeout(later, wait);

        if (callNow) {
            func.apply(context, params);
        }
    };
}