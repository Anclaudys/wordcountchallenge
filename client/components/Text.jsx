import React from 'react';
//import Highlighter from 'react-highlight-words';
//import Highlighter from 'react-text-highlighter';
//https://www.npmjs.com/package/react-text-highlighter
import Highlighter from 'react-highlighter';

export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textBody: '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClear = this.handleClear.bind(this);
  }

  // handleChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   target.type === 'checkbox'
  //     ? this.setState({
  //         checkboxValues: { ...this.state.checkboxValues, [name]: value },
  //       })
  //     : this.setState({
  //         [name]: value,
  //       });
  // }

  handleChange(evt) {
    this.setState({
      textBody: evt.target.value,
    });
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const { textSubmit, checkboxValues } = this.state;
  //   const str = textSubmit;
  //   const paragraphs = makeParagraph(str);
  //   const words = wordFunc(str);
  //   const characters = charFunc(str);
  //   const sentences = sentFunc(str);
  //   const bigrams = bigramWord(words);
  //   const uniqueBigrams = uniqueBigramWord(words);
  //   const wordFreqs = wordFreq(words);
  //   const uniqueWords = wordUnique(words);
  //   const palindrome = validPal(str);
  //   const emp = removeEmptyElements(paragraphs);

  //   textSubmit &&
  //     this.setState({
  //       counts: {
  //         'Word Count': words.length,
  //         'Unique Word Count': Object.keys(uniqueWords).length,
  //         'Character Count': characters.length,
  //         'Sentence Count': sentences.length,
  //         'Paragraph Count': paragraphs.length,
  //         'Bigram Count': Object.keys(bigrams).length,
  //         'Unique Bigram Count': Object.keys(uniqueBigrams).length,
  //         'Is Palindrome?': palindrome,
  //       },
  //     });

  //   checkboxValues['Show Word & Bigram Frequency Tables'] &&
  //     this.setState({
  //       wordFreqData: wordFreqs,
  //       bigramData: bigrams,
  //     });
  // }

  // handleClear(event) {
  //   event.preventDefault();
  //   this.setState({
  //     textSubmit: '',
  //     counts,
  //   });
  // }
  render() {
    const { textBody } = this.state;

    return (
      <div>
        <div>
          <div>
            <form>
              <div>
                <textarea
                  type='text'
                  value={textBody}
                  name='textBody'
                  onChange={this.handleChange}
                  placeholder='Insert text...'
                ></textarea>
              </div>
              <div>
                <div>
                  <div>{}</div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
              {/*Button to clear text*/}
              <button
                // onClick={this.handleClear}
                type='reset'
                value='Reset'
              >
                Clear Text
              </button>
            </form>
            {/* <Highlight
              highlightClassName='highlighted'
              searchWords={['and', 'or the s', 'the']}
              autoEscape={true}
              textToHighlight={textBody}
            /> */}
            <Highlighter matchClass='lighted' search='the people'>
              {textBody}
            </Highlighter>
          </div>
        </div>
      </div>
    );
  }
}
