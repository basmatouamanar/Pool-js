function filterKeys(obj, callback) {
    let result = {}
    for (let key in obj) {
        if (callback(key)) {
            result[key] = obj[key]
        }
    }
    return result
}

function mapKeys(obj, callback) {
    let result = {}
    for (let key in obj) {
        let answer = callback(key)
        result[answer] = obj[key]
    }
    return result
}

function reduceKeys(obj,func, init="") {

  for (const key in obj) {
    if (init === "") {
      init = key;
    } else {
      init = func(init, key);
    }
  }
  return init;
};
