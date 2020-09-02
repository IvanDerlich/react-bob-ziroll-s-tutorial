import React from 'react';
import ReactDOM from 'react-dom';

function MyApp() {
  return (
    <ul>
      <li>Element 1</li>  
      <li>Element 2</li>  
      <li>Element 3</li>  
    </ul>
  )
}

ReactDOM.render(
  <MyApp/>,
  document.getElementById('root')
);