var asprLwcUtils = (function () {
    'use strict';

    const omit = (obj, paths) => {
        const newObj = {};

        const equality = (a, b) => typeof paths === "string" ? a === b : a.includes(b);
        
        Object.keys(obj).forEach(key => {
            const value = obj[key];
            if (!equality(paths, key)) {
                newObj[key] = value;
            }
        });

        return newObj;
    };

    var objectUtils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        omit: omit
    });

    const asprLwcUtils = {
        objectUtils
    };

    console.log("OMIT FUNCTION: ", asprLwcUtils.objectUtils.omit);

    window.asprLwcUtils = asprLwcUtils;

    return asprLwcUtils;

}());
