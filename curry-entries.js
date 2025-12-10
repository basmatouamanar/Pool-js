
function defaultCurry(obj1) {
    return function (obj2) {
        let result = {}
        for (let key in obj1) {
            result[key] = obj1[key]
        }
        for (let key in obj2) {
            result[key] = obj2[key]
        }
        return result
    }
}


function mapCurry(callback) {
    let result = {}
    return function (obj) {
        for (let key in obj) {
            let [newkey, newvalue] = callback([key, obj[key]])
            result[newkey] = newvalue
        }
        return result
    }
}


function reduceCurry(callback) {
    return function (obj, initialValue) {
        for (let key in obj) {
            initialValue = callback(initialValue, [key, obj[key]])
        }
        return initialValue
    }
}

function filterCurry(callback) {
    let result = {}
    return function (obj) {
        for (let key in obj) {
            if (callback([key, obj[key]])) {
                result[key] = obj[key]
            }
        }
        return result
    }

}

function reduceScore(personnel, initialValue = 0) {
    return reduceCurry((initialValue, [k, v]) => {
        if (v.isForceUser) {
            return initialValue + v.pilotingScore + v.shootingScore
        }
        return initialValue
    })(personnel, initialValue)
}



function filterForce(personnel) {
    return filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80)(personnel)
}

function mapAverage(personnel) {
   return mapCurry(([k, v]) => {
    const average = (v.pilotingScore + v.shootingScore) / 2
    return [k, { ...v, averageScore: average }]
  })(personnel)
}


