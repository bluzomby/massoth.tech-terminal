import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class App extends Component {
  showMsg = () => 'Hello World'

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
              'resume': () => window.open('http://massoth.tech/static/resume.pdf' )
          }}
          descriptions={{
            'resume': 'open my resume',
          }}
          msg='type help for a list of commands'
        />
      </div>
    );
  }
}

export default App;
