import React from 'react';

export default class Bigrams extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { bigrams } = this.props.parentState;
    console.log('bigrams', bigrams);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>{`${bigrams.length} BIGRAM${
                bigrams.length !== 1 ? 'S' : ''
              } FOUND`}</th>
            </tr>
          </thead>
          <tbody>
            {bigrams.map((bi, i) => {
              return (
                <tr key={i}>
                  <td>
                    {bi[0]} {bi[1]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
