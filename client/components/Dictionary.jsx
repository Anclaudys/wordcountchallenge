import React from 'react';
import axios from 'axios';

export default class Dictionary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenWord: '',
      meanings: [],
      selectWordMsg: '',
    };
    this.fetchEntry = this.fetchEntry.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      chosenWord: nextProps.chosenWord,
    };
  }

  async fetchEntry(word, lang = 'en_US') {
    if (!word) {
      this.setState({ selectWordMsg: "Select a word to get it's definition" });
      await setTimeout(
        () =>
          this.setState({
            selectWordMsg: '',
          }),
        1000
      );
    } else {
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
  }
  render() {
    const { chosenWord, meanings, selectWordMsg } = this.state;
    return (
      <div>
        <button onClick={() => this.fetchEntry(chosenWord)}></button>
        <div>{selectWordMsg}</div>
        <table>
          <thead>
            <tr onClick={() => this.fetchEntry(chosenWord)}>
              {chosenWord.toUpperCase()}
            </tr>
          </thead>
          {meanings.length ? (
            meanings.map((mot, i) => {
              return (
                <tbody key={i}>
                  <tr>
                    <th>{mot.partOfSpeech}</th>
                  </tr>
                  <tr>
                    {mot.definitions.map((def, j) => {
                      return (
                        <ul key={j}>
                          <lh>{j + 1}</lh>
                          <li>{`${def.definition}`}</li>
                        </ul>
                      );
                    })}
                  </tr>
                </tbody>
              );
            })
          ) : (
            <tbody> </tbody>
          )}
        </table>
      </div>
    );
  }
}
