//Returns an array composed of all of the
export function getWords(s) {
  if (!s.length) {
    return [];
  } else {
    return s.match(/([\w'-]+)/g);
  }
}

//Returns the total number of numbers
export function countNumbers(s) {
  return s.match(/[1-9]{1,}/g).length;
}

//Returns an array of all of the numbers inside of a string.
export function getNumbers(s) {
  return s.match(/[1-9]{1,}/g);
}

//Returns an array of all of the unique words
export function uniqueWords(s) {
  return s.match(/(\b[\w'-]+\b)(?![\s\S]*\b\1\b)/g);
}

export function wordsAfter(str) {
  let word = 'with';
  //str.match(/(?<=in )\b\w+\b/g);
  let reg = new RegExp(`\(\?\<\= ${word} \)\\b\\w+\\b`, 'g');
  return str.match(reg);
}

export function wordsBefore(str) {
  let word = 'with';
  //str.match(/\b\w+\b.(?=with)/g);
  let reg = new RegExp(`\\b\\w+\\b\.\(\?\=${word}\)`, 'g');
  return str.match(reg);
}

export function bigrams(words) {
  let result = [];
  for (let i = 0; i < str.length - 1; i++) {
    result.push([words[i], words[i + 1]]);
  }
  return result;
}

//Returns the number of paragraphs when they start after 2 new lines
export function countP2(str) {
  str = str.match(/(\n|^).*?(?=\n|$)/g);
  let count = 0;
  let inP = false;
  for (let i = 0; i < str.length; i++) {
    if (!inP && str[i] !== '\n') {
      count++;
      inP = true;
    }
    if (str[i] === '\n' && count >= 1) {
      console.log('hey');
      inP = false;
    }
  }
  return count;
}

export function getP2(str) {
  str = str.match(/(\n|^).*?(?=\n|$)/g);
  let count = 0;
  let paragraphs = [];
  let inP = false;
  let currentP = '';
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '\n') {
      continue;
    }
    if (str[i] !== '\n') {
      console.log(str[i]);
      currentP += str[i];
      if (str[i + 1] === '\n') {
        paragraphs.push(currentP);
        currentP = '';
      }
    }
  }
  return paragraphs.length;
}

//Returns the number of paragraphs when they start at a new line
export function countP1(str) {
  str = str.match(/(\n|^).*?(?=\n|$)/g);
  let count = 0;
  let inP = false;
  for (let i = 0; i < str.length; i++) {
    if (!inP && str[i] !== '\n') {
      count++;
      inP = true;
    }
    if (str[i] === '\n' && count >= 1) {
      console.log('hey');
      inP = false;
    }
  }
  return count;
}

export function countSentences(str) {
  const result = str.match(/\w[.!?](\s|$)/g);
  if (result) {
    return result;
  } else {
    return [];
  }
}
