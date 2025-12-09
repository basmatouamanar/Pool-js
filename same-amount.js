function sameAmount(str, regex1, regex2) {
    const globalRegex1 = new RegExp(regex1.source, 'g');
    const globalRegex2 = new RegExp(regex2.source, 'g');
    
    const matches1 = str.match(globalRegex1);
    const matches2 = str.match(globalRegex2);
    
    const count1 = matches1 ? matches1.length : 0;
    const count2 = matches2 ? matches2.length : 0;
    
    return count1 === count2;
}