import React from 'react';
import axios from 'axios';

export default class Dictionary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenWord: '',
      meanings: [],
    };
    this.fetchEntry = this.fetchEntry.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      chosenWord: nextProps.chosenWord,
    };
  }

  async fetchEntry(word, lang = 'en_US') {
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
    );
    const meanings = data[0].meanings;
    //console.log('means', meanings);
    this.setState({
      chosenWord: word,
      meanings: meanings,
    });
  }
  render() {
    const { chosenWord, meanings } = this.state;
    console.log('ffff', chosenWord);
    return (
      <table>
        <thead>
          <button onClick={() => this.fetchEntry(chosenWord)}></button>
          <tr>{chosenWord.toUpperCase()}</tr>
        </thead>
        {meanings.length ? (
          meanings.map((mot, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <th>{mot.partOfSpeech}</th>
                </tr>
                <div>
                  {mot.definitions.map((def, j) => {
                    return (
                      <div key={j}>
                        <h1>{j + 1}</h1>
                        <div>{`${def.definition}`}</div>
                      </div>
                    );
                  })}
                </div>
              </tbody>
            );
          })
        ) : (
          <tbody> </tbody>
        )}
      </table>
    );
  }
}
