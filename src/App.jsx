import React, { useEffect } from 'react';
import './App.css';

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// const port = 8888;
// app.listen(port, () => {
//   console.log('Express app listening at http://localhost:${port}');
// })

function App() {
  useEffect(() => {
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
      res.send('Hello World');
    });

    const port = 8888;
    app.listen(port, () => {
      console.log(`Express app listening at http://localhost:${port}`);
    });
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
