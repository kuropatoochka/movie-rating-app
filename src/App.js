import React from 'react';
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";

const App = () => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "50px", height: "100vh"}}>
      <MovieList/>
      <MovieForm/>
    </div>
  );
};

export default App;