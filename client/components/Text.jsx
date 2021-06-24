import React from 'react';
import Highlighter from 'react-highlighter';
import { FormControlLabel, Switch } from '@material-ui/core';
import Dictionary from './Dictionary';
import Stats from './Stats';
import UniqueWords from './UniqueWords';
import Bigrams from './Bigrams';
import {
  getWords,
  countNumbers,
  getNumbers,
  countSentences,
  uniqueWords,
  wordsAfter,
  wordsBefore,
  getBigrams,
  countP1,
  countP2,
  getP2,
  getP1,
} from '../utils';

export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textBody: '',
      highlighted: '',
      seachText: '',
      charCount: 0,
      words: [],
      numbers: [],
      unique: [],
      sentences: [],
      paragraphs: [],
      bigrams: [],
      twoLineP: true,
      chosenWord: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.highlightText = this.highlightText.bind(this);
    this.clearText = this.clearText.bind(this);
    this.toggleLineCount = this.toggleLineCount.bind(this);
    this.selectWord = this.selectWord.bind(this);
  }
  handleChange(evt) {
    console.log('ETV', evt.target.value);
    console.log();
    const parrafos =
      this.state.twoLineP === true
        ? getP2(evt.target.value)
        : getP1(evt.target.value);
    const palabras = getWords(evt.target.value) || [];

    this.setState({
      textBody: evt.target.value,
      sentences: countSentences(evt.target.value),
      words: palabras,
      numbers: getNumbers(evt.target.value),
      unique: uniqueWords(evt.target.value),
      bigrams: getBigrams(evt.target.value),
      paragraphs: parrafos,
    });
    //console.log('words...', this.state.words);
  }

  highlightText(evt) {
    this.setState({
      highlighted: evt.target.value,
    });
  }

  async selectWord(word) {
    await this.setState({ chosenWord: word });
    console.log('STATE CHOSEN WORD', this.state.chosenWord);
  }

  clearText() {
    this.setState({
      textBody: '',
    });
  }

  async toggleLineCount() {
    await this.setState({ twoLineP: !this.state.twoLineP });
    const parrafos = this.state.twoLineP
      ? getP2(this.state.textBody)
      : getP1(this.state.textBody);
    this.setState({
      paragraphs: parrafos,
    });
  }
  render() {
    const {
      textBody,
      highlighted,
      words,
      unique,
      paragraphs,
      sentences,
      chosenWord,
      numbers,
      twoLineP,
    } = this.state;
    return (
      <div>
        <div>
          <div>
            <form className='ui form'>
              <textarea
                type='text'
                value={textBody}
                name='textBody'
                onChange={this.handleChange}
                onPaste={this.handlePaste}
                placeholder='Insert text...'
              ></textarea>
              <abbr title='Click and Drag to Resize'>.</abbr>
              <div>
                <div>
                  <div>{}</div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
              <FormControlLabel
                control={
                  <Switch size='small' onChange={this.toggleLineCount} />
                }
                label={`New paragraph after ${twoLineP ? '2' : '1'} line${
                  twoLineP ? 's' : ''
                }`}
              />
              {/*Button to clear text*/}
              <button onClick={this.clearText} type='reset' value='Reset'>
                Clear Text
              </button>
            </form>
            <div>
              <form>
                <div className='searchtext'>
                  <input
                    type='text'
                    value={highlighted}
                    name='highlighted'
                    onChange={this.highlightText}
                    placeholder='Search text...'
                  ></input>
                </div>
              </form>
            </div>
          </div>
          <Highlighter matchClass='lighted' search={highlighted}>
            {textBody}
          </Highlighter>
        </div>
        <div className='categories'>
          <UniqueWords parentState={this.state} selectWord={this.selectWord} />
          <Bigrams parentState={this.state} />
          <Stats parentState={this.state} />
        </div>
      </div>
    );
  }
}

// {/* <span>{`Characters ${textBody.length}     `}</span>
// <span>{`Words ${words.length}`}</span>
// <span> {`Unique Words ${uniqueWords.length}    `} </span>
// <span>{`Sentences ${sentences.length}    `}</span>
// <span>{`Paragraphs ${paragraphs.length}     `}</span>
// <span>{`Number Count ${numbers.length}    `}</span>
// <Dictionary /> */}

// handlePaste = (evt) => {
//   // const data = new DataTransfer(evt.clipboardData);
//   // const a = navigator.clipboard
//   //   .readText()
//   //   .then((text) => (outputElem.innerText = text));
//   // const text = data.getText();
//   // const html = data.getHTML();
//   // const files = data.getFiles();
//   // console.log(a);
//   // this.setState({
//   //   textBody: 'Blue Sky',
//   // });
// };
// {/* <Dictionary chosenWord={chosenWord} />
