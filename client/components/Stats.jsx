import React from 'react';
import Dictionary from './Dictionary';

export default function Stats({ parentState }) {
  const {
    textBody,
    highlighted,
    words,
    unique,
    paragraphs,
    sentences,
    chosenWord,
    numbers,
  } = parentState;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Words and Sentences </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{`Characters ${textBody.length}     `}</td>
          </tr>
          <tr>
            <td>{`Words ${words.length}`}</td>
          </tr>
          <tr>
            <td> {`Unique Words ${unique.length}    `} </td>
          </tr>
          <tr>
            <td>{`Sentences ${sentences.length}    `}</td>
          </tr>
          <tr>
            <td>{`Paragraphs ${paragraphs.length}     `}</td>
          </tr>
          <tr>
            <td>{`Number Count ${numbers.length}    `}</td>
          </tr>
        </tbody>
      </table>
      <Dictionary chosenWord={chosenWord} />
    </div>
  );
}
