function pyramid(char, depth) {
  let result = '';
  let charLen = char.length;
  
  for (let i = 1; i <= depth; i++) {
    
    let spaces = ' '.repeat((depth - i) * charLen);
    
   
    let chars = char.repeat(2 * i - 1);
    
    
    result += spaces + chars;
    
  
    if (i < depth) {
      result += '\n';
    }
  }
  
  return result;
}