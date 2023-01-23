export const camelCaseToCapitalized = (string) => {
    const newString = string[0].toUpperCase() + string.slice(1);
    return newString.split(/(?=[A-Z])/).join(" ");
}