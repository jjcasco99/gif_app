import React from 'react';
import './App.css';
// import ListOfGifs from './components/ListOfGifs/ListOfGifs';
import { Link, Route } from "wouter"
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import SearchResults from './pages/SearchResults/SearchResults';
import { GifsContext } from './context/GifsContext';

function App() {


  return (
      <div className="App">
        <section className="App-content">
          <h1><Link to="/">App</Link></h1>
          <GifsContext>
            <Route component={Home} path="/" />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContext>
          {/* Lista de los gifs COMPONENTE */}
        </section>
      </div>
  );
}

export default App;
