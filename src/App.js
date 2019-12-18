import React from 'react';
import BookContextProvider from './context/BookContext';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <div className="body">
          <h2>Book1</h2>
          <h2>Book2</h2>
          <h2>Book3</h2>
        </div>
      </BookContextProvider>
    </div>
  );
}

export default App;
