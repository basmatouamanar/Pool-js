function fusion(obj1, obj2) {
    let keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
    let result = {}
    for (let key of keys) {
        let v1 = obj1[key]
        let v2 = obj2[key]
        if (v1 !== undefined && v2 === undefined) {
            result[key] = v1
             continue
        }

        if (v1 === undefined && v2 !== undefined) {
            result[key] = v2
             continue
        }

        if (typeof v1 !== typeof v2 || Array.isArray(v1) !== Array.isArray(v2) ) {
            result[key] = v2
             continue
        }

        if (Array.isArray(v1) && Array.isArray(v2)) {
            result[key] = [...v1, ...v2]
            continue
        }

        if (typeof v1 === 'number') {
            result[key] = v1 + v2
            continue
        }

        if (typeof v1 === 'string') {
            result[key] = v1 + ' ' + v2
             continue
        }

        if (typeof v1 === "object") {
            result[key] = fusion(v1, v2)
            continue
        }
        
    }
    return result
}



console.log(fusion({ arr: [1, "2"] }, { arr: [2] }));
// Output attendu: { arr: [1, "2", 2] }

console.log(fusion({ arr: [], arr1: [5] }, { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }));
// Output attendu: { arr: [10, 3], arr1: [5, 15, 3], arr2: ["7", "1"] }

console.log(fusion({ str: "salem" }, { str: "alem" }));
// Output attendu: { str: "salem alem" }

console.log(fusion({ str: "salem" }, { str: "" }));
// Output attendu: { str: "salem " }

console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }));
// Output attendu: { a: 20, b: 10, c: 1 }

console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }));
// Output attendu: { a: 11, x: [], b: { c: "Salem alem" } }

console.log(fusion({ a: { b: [3, 2], c: { d: 8 } } }, { a: { b: [0, 3, 1], c: { d: 3 } } }));
// Output attendu: { a: { b: [3, 2, 0, 3, 1], c: { d: 11 } } }

console.log(fusion({ a: "hello", b: [] }, { a: 4 }));
// Output attendu: { a: 4, b: [] }
