import React from 'react';
import MovieList from "./components/MovieList/MovieList";
import MovieForm from "./components/MovieForm/MovieForm";

const App = () => {
  return (
    <main>
      <MovieList/>
      <MovieForm/>
    </main>
  );
};

export default App;