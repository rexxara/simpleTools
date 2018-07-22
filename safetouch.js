var target = { a: { b: { c: { d: 111 } } } }
/**
 * safe touch
 * @param {Object} target target abject
 * @param {string} str query array
 * @return {any} return value
 */

function safeTouch(target, str) {
    const arr = str.split(".")
    let query = target;
    let res =undefined;
    for (let index = 0; index < arr.length; index++) {
        if (index === arr.length - 1) {
            res = query[arr[index]]
        }
        if (query[arr[index]]) {
            query = query[arr[index]]
        }
    }
    return res
}
console.log(safeTouch(target, "a.e.e"),safeTouch(target, "a.b.c"))