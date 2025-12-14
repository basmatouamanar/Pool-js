/*function sentencePyramid(sentence) {
    let str = sentence.split(' ')
    let result = ''
    for (let i = 0; i < str.length; i++) {
        let s = result.split('\n')
        if (result == '') {
            result += s[s.length-1] + ' ' + str[i]
        }else {

            result += '\n' + s[s.length-1] + ' ' + str[i]
        }
    }
    return result
}*/


function sentencePyramid(sentence) {
    let str = sentence.split(' ')
    let line = ''
    for (let i = 0; i < str.length; i++) {
        line += (line == '' ? '' : ' ')+  str[i] 
        console.log(line)
    }
}



sentencePyramid("This is a simple sentence pyramid")

/*
$ node main.js
This
This is
This is a
This is a simple
This is a simple sentence
This is a simple sentence pyramid
$
*/