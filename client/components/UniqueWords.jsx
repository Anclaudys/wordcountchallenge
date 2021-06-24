import React from 'react';
import Dictionary from './Dictionary';

export default class UniqueWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { selectWord, parentState } = this.props;
    const { words, chosenWord } = parentState;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th className='categorytitle'>{`${words.length} UNIQUE WORD${
                words.length !== 1 ? 'S' : ''
              }`}</th>
            </tr>
            <Dictionary chosenWord={chosenWord} />
          </thead>
          <tbody>
            {words.map((word, i) => {
              return (
                <tr key={i} onClick={() => selectWord(word)}>
                  <td className='uniqueword'>{word}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
