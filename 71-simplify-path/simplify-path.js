/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const parts = path.split("/");
    const stack = [];

    for (let part of parts) {
        if (part === "" || part === ".") {
            continue; // skip empty or "."
        } else if (part === "..") {
            if (stack.length > 0) stack.pop(); // go up one dir
        } else {
            stack.push(part); // valid folder name
        }
    }

    return "/" + stack.join("/");
};
