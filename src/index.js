module.exports = function check(str, bracketsConfig) {
    // let  brackets = bracketsConfig.map(arrays=> arrays.join('')).join('')
    let brackets = new Map()
    let stack = []
    bracketsConfig
        .forEach(arrays => {
            brackets
                .set(arrays[0], arrays[1]);
        });
    // iteration?

    for (let i = 0; i < str.length; i++) {
        (str[i] === stack[stack.length - 1]) ?
            stack.pop() :
            stack.push(brackets.get(str[i]));
    }
    return stack.length === 0
}

