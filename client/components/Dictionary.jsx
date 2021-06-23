import React from 'react';
import axios from 'axios';

export default class Dictionary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenWord: this.props.chosenWord,
      meanings: [],
    };
    this.fetchEntry = this.fetchEntry.bind(this);
  }

  componentDidMount() {
    this.fetchEntry();
  }
  async fetchEntry() {
    let word = 'lead';
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
    );

    //console.log('data[0].??.', Array.isArray(data[0].meanings));

    const meanings = data[0];
    console.log('means', meanings);
    // console.log(Object.keys(meanings));
    // console.log('meanings...', meanings);
    this.setState({
      chosenWord: word,
      meanings: meanings,
    });
  }
  render() {
    const { chosenWord, meanings } = this.state;

    console.log('meanings ===', meanings);
    console.log('defs ====', meanings.definitions);
    //console.log('singledef ====', meanings.defintition[0].definition);
    return (
      <div>
        <button onClick={this.fetchEntry}></button>
        {chosenWord}
        {meanings.length ? (
          meanings.map((mot, i) => {
            return (
              <div key={i}>
                <h4>{mot.partOfSpeech}</h4>
                <div>
                  {mot.definitions.map((def, j) => {
                    return (
                      <div key={j}>
                        <h1>{j + 1}</h1>
                        <div>{definition}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div> </div>
        )}
      </div>
    );
  }
}
