const pronoun = (str) => {
  const result = {};
  const pronouns = ["i", "you", "he", "she", "it", "they", "we"];
  
  const words = str.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();

    if (pronouns.includes(word)) {
      if (!result[word]) {
        result[word] = { word: [], count: 0 };
      }

      result[word].count++;

      const nextWord = words[i + 1];
      if (nextWord && !pronouns.includes(nextWord.toLowerCase())) {
        const match = nextWord.match(/\w+/g) || [];
        result[word].word.push(...match);
      }
    }
  }

  return result;
};
