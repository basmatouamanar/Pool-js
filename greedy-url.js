function getURL(dataSet) {
  const urlPattern = /https?:\/\/[^\s]+/g;
  return dataSet.match(urlPattern) || [];
}

function greedyQuery(dataSet) {
  const urlPattern = /https?:\/\/[^?\s]*\?[^&\s]*&[^&\s]*&[^\s]*/g;
  return dataSet.match(urlPattern) || [];
}

function notSoGreedy(dataSet) {
  const urls = getURL(dataSet);
  
  return urls.filter(url => {
    if (!url.includes('?')) return false;
    const queryString = url.split('?')[1];
    const ampersandCount = (queryString.match(/&/g) || []).length;
    return ampersandCount === 1 || ampersandCount === 2;
  });
}

