function split(str, separ) {
    const result = [];
    let start = 0;
    let index = 0;

    if (separ === '') { // split every character
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }

    while ((index = str.indexOf(separ, start)) !== -1) {
        result.push(str.substring(start, index));
        start = index + separ.length;
    }
    result.push(str.substring(start));
    return result;
}

function join(arr, sep) {
    if (arr.length === 0) return '';
    let str = '' + arr[0]; // first element
    for (let i = 1; i < arr.length; i++) {
        str += sep + arr[i];
    }
    return str;
}
