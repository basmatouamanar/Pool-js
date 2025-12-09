function nasa(n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            if (result == '') {
                result += 'NASA'
            } else {

                result += ' NASA'
            }
        } else if (i % 5 == 0) {
            if (result == '') {
                result += 'SA'
            } else {

                result += ' SA'
            }
        } else if (i % 3 == 0) {
            if (result == '') {
                result += 'NA'
            } else {

                result += ' NA'
            }
        } else {
            if (result == '') {
                result += String(i)
            } else {

                result += ' ' + String(i)
            }
        }
    }
    return result

}
