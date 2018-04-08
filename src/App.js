// @flow
import React from 'react';

type Props = {
  children: Node,
}

export default function App({ children }: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Borplate React, Redux!</h1>
      </header>
      {
        children
      }
      <footer>
        React! 2018
      </footer>
    </div>
  );
}
