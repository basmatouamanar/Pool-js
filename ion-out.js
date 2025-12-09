function ionOut(str) {
  const words = str.match(/\b\w+\b/g) || [];
  
  return words
    .filter(word => word.includes('tion'))
    .map(word => word.replace(/ion/g, ''));
}

