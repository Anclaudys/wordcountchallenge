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
      this.setState({
        selectWordMsg:
          "Select a word from the unique word list to get it's definition!",
      });
      await setTimeout(
        () =>
          this.setState({
            selectWordMsg: '',
          }),
        1500
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
        <div className='buttoncont'>
          <div id='selectmot'>{selectWordMsg}</div>
        </div>
        <table>
          <thead>
            <tr
              className='ui left button'
              onClick={() => this.fetchEntry(chosenWord)}
              className='chosenword'
            >
              {chosenWord}
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
