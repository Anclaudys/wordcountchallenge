import React from 'react';

export default class UniqueWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { words, selectWord } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>{`${words.length} UNIQUE WORD${
                words.length !== 1 ? 'S' : ''
              }`}</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word, i) => {
              return (
                <tr key={i} onClick={() => selectWord(word)}>
                  <td>{word}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
