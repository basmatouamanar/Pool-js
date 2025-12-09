
function filterShortStateName(arr) {
    return arr.filter(word => word.length < 7)
}



function filterStartVowel(arr) {
    const regx = /^[aeiou]/i
  return arr.filter(word => regx.test(word))
}

function filter5Vowels(arr) {
  return arr.filter(str => {
    const vowels = str.match(/[aeiou]/gi); 
    return (vowels ? vowels.length : 0) >= 5; 
  });
}




function filter1DistinctVowel(arr) {
    return arr.filter(word => {
        let voyel = word.match(/[aeiou]/gi)
        if (!voyel) return false 
        let set = new Set(voyel.map(v => v.toLowerCase()))
        return set.size === 1
    })
}


function multiFilter(arr) {
    return arr.filter(obj => {
        let capitalOk = obj.capital.length >= 8
        let nameOk = !/^[aeiou]/i.test(obj.name)
        let tagOk = /[aeiou]/i.test(obj.tag)
        let regionOk = obj.region !== 'South' 
        return capitalOk && nameOk && tagOk && regionOk
    }   
    )
}

