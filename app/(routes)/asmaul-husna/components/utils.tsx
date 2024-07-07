export const decodeUnicode = (str: string): string => {
    return str.replace(/\\u[\dA-F]{4}/gi, (match) =>
        String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16))
    );
};
