import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//React component UI classes (View/Intent)
import PublisherView from './view/PublisherView'

function App() {
  return (
    <div className="app">
      <PublisherView />
    </div>
  );
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
