export const omit = (obj, paths) => {
    const newObj = {};

    const equality = (a, b) => typeof paths === "string" ? a === b : a.includes(b);
    
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (!equality(paths, key)) {
            newObj[key] = value;
        }
    })

    return newObj;
}