//imports
import React from 'react';

class App extends React.Component {
  render() {
    return(
      <div>
        <p>ola mundo</p>
        <p>fuck</p>
        <p>
          {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    )
  }
}

export default App;
