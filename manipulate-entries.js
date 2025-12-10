function filterEntries(cart, callback) {
    let result = {}
    for (let key in cart) {
        if (callback([key, cart[key]])) {
            result[key] = cart[key]
        }
    }
    return result
}

function mapEntries(cart, callback) {
    let result = {}
    for (let key in cart) {
        let answer = callback([key, cart[key]])
        result[answer[0]] = answer[1]
    }
    return result
}

function reduceEntries(cart, callback, initialValue) {
    for (let key in cart) {
        if (initialValue == "") {
            initialValue = key + cart[key]
        }else {

            initialValue = callback(initialValue,[ key, cart[key]])
        }
        
    }
    return initialValue
}
// init + (nutritionDB[key]["calories"] * value)
function totalCalories(cart) {
    let total = 0
    for (let key in cart) {
        const grams = cart[key]
        const calper = nutritionDB[key].calories 
        total += (grams * calper) / 100
    }
    return Math.round(total * 10) / 10
}

function lowCarbs(cart) {
    let total = 0
    let result = {}
    for (let key in cart) {
        const grams = cart[key]
        const calper = nutritionDB[key].carbs
        total += (grams * calper) / 100

        if (total < 50) {
            result[key] = grams
        }
    }
    return result
}

function cartTotal(cart) {
    let result = {}

    for (let item in cart) {
        const grams = cart[item]
        const nutrients = nutritionDB[item]

        result[item] = {}

        for (let nutrient in nutrients) {
            const per100g = nutrients[nutrient]
            const totalValue = (grams * per100g) / 100
            result[item][nutrient] = round3(totalValue)
        }
    }

    return result
}

function round3(num) {
    return Math.round(num * 1000) / 1000
}


