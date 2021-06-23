import React from 'react';
import Highlighter from 'react-highlighter';
import Dictionary from './Dictionary';
import {
  getWords,
  countNumbers,
  getNumbers,
  countSentences,
  uniqueWords,
  wordsAfter,
  wordsBefore,
  bigrams,
  countP1,
  countP2,
  getP2,
} from '../utils';

export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textBody: '',
      highlighted: '',
      seachText: '',
      charCount: 0,
      getWords: [],
      numbers: 0,
      uniqueWords: 0,
      sentences: [],
      paragraphCount: 0,
      lineP: 'two',
      chosenWord: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.highlightText = this.highlightText.bind(this);
    this.clearText = this.clearText.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
  }
  handleChange(evt) {
    console.log('get em boi...', getWords(evt.target.value));
    const foundWords = getWords(evt.target.value);
    const foundSentences = countSentences(evt.target.value);
    this.setState({
      textBody: evt.target.value,
      sentences: countSentences(evt.target.value),
      wordCount: getWords(evt.target.value).length,
    });
    console.log('sentences ?', this.state.sentences);
  }

  highlightText(evt) {
    console.log(evt.target.value);
    this.setState({
      highlighted: evt.target.value,
    });
  }
  clearText() {
    this.setState({
      textBody: '',
    });
  }

  handlePaste = (evt) => {
    // const data = new DataTransfer(evt.clipboardData);
    // const a = navigator.clipboard
    //   .readText()
    //   .then((text) => (outputElem.innerText = text));
    // const text = data.getText();
    // const html = data.getHTML();
    // const files = data.getFiles();
    // console.log(a);
    // this.setState({
    //   textBody: 'Blue Sky',
    // });
  };
  render() {
    const {
      textBody,
      highlighted,
      wordCount,
      uniqueWords,
      paragraphCount,
      sentences,
      chosenWord,
    } = this.state;
    return (
      <div>
        <div>
          <div>
            <form>
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
        <span>{`Characters ${textBody.length}     `}</span>
        <span>{`Words ${wordCount}`}</span>
        <span> {`Unique Words ${uniqueWords}    `} </span>
        <span>{`Sentences ${sentences.length}    `}</span>
        <span>{`Paragraphs ${paragraphCount}     `}</span>
        <span>{`Paragraphs ${paragraphCount}    `}</span>
        <Dictionary chosenWord={chosenWord} />
      </div>
    );
  }
}
