const escapeStr = "\` \\\\ / \" '";
const arr = Object.freeze([4, '2'])
const obj = Object.freeze({
    str : "string",
    num : 0,
    bool : true, 
    undef : undefined
})
const nested = {
    arr : [4, undefined, '2'],
    obj : {
    str : "string",
    num : 0,
    bool : true, 
}


}
Object.freeze(nested.arr)
Object.freeze(nested.obj)
Object.freeze(nested)