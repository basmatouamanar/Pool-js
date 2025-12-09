
function adder(arr, initial=0) {
    return arr.reduce((acc, current) => acc + current, initial)
}


function sumOrMul(arr, initial=0) {
  return arr.reduce((acc, current) => {
    if (current % 2 == 0) {
       return acc * current
    }else {
        return acc + current
    }
   
  }, initial)
}

function funcExec(arr, initial=0) {
    return arr.reduce((acc, current)=> {
        return current(acc)
    }, initial)
}



