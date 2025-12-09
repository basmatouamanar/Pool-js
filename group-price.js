function groupPrice(str) {
  const pricePattern = /([A-Z$€£¥]+)(\d+)\.(\d{2})/g;
  const matches = [];
  
  let match;
  while ((match = pricePattern.exec(str)) !== null) {
    const fullPrice = match[1] + match[2] + '.' + match[3];
    matches.push([fullPrice, match[2], match[3]]);
  }
  
  return matches;
}