//Returns an array composed of all of the
function getWords(s) {
  return s.match(/([\w'-]+)/g);
}

//Returns the total number of numbers
function countNumbers(s) {
  return s.match(/[1-9]{1,}/g).length;
}

//Returns an array of all of the numbers inside of a string.
function getNumbers(s) {
  return s.match(/[1-9]{1,}/g);
}

//Returns an array of all of the unique words
function uniqueWords(s) {
  return s.match(/(\b[\w'-]+\b)(?![\s\S]*\b\1\b)/g);
}

const text = `
Homies don't want war, I'm a martian with an army of Spartans
Sparring with a knife in a missile fight
Get your intel right, your intelligence is irrelevant  test
`;

function getP1(str) {
  str = str.match(/(\n|^).*?(?=\n|$)/g);
  let paragraphs = [];
  let inP = false;
  let currentP = '';
  //console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '\n') {
      continue;
    }
    paragraphs.push(str[i]);
  }
  return paragraphs;
}
console.log(getP1(text));

const str = getWords(text);

function wordsAfter(str) {
  let word = 'with';
  //str.match(/(?<=in )\b\w+\b/g);
  let reg = new RegExp(`\(\?\<\= ${word} \)\\b\\w+\\b`, 'g');
  return str.match(reg);
}

function wordsBefore(str) {
  let word = 'with';
  //str.match(/\b\w+\b.(?=with)/g);
  let reg = new RegExp(`\\b\\w+\\b\.\(\?\=${word}\)`, 'g');
  return str.match(reg);
}

function bigrams(words) {
  let result = [];
  for (let i = 0; i < str.length - 1; i++) {
    result.push([words[i], words[i + 1]]);
  }
  return result;
}

//Returns the number of paragraphs when they start after 2 new lines
function countP2(str) {
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

function getP2(str) {
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
function countP1(str) {
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
