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
  }

  handleChange(evt) {
    this.setState({
      textBody: evt.target.value,
    });
  }
  render() {
    const { textBody, handleChange } = this.state;

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
                  onChange={handleChange}
                  placeholder='Insert text...'
                ></textarea>
                <abbr title='Click and Drag to Resize'>.</abbr>
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
                // onClick={//clear the}
                type='reset'
                value='Reset'
              >
                Clear Text
              </button>
            </form>
            <Highlighter matchClass='lighted' search='the people'>
              {textBody}
            </Highlighter>
          </div>
        </div>
      </div>
    );
  }
}
