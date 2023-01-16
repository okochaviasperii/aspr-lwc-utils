import * as objectUtils from "./objectUtils/index.js";

const asprLwcUtils = {
    objectUtils
};

console.log("OMIT FUNCTION: ", asprLwcUtils.objectUtils.omit);

window.asprLwcUtils = asprLwcUtils;

export default asprLwcUtils;