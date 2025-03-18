import React from 'react';
import MovieListPage from "./pages/MovieListPage/MovieListPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header/>
      <MovieListPage/>
      <Footer/>
    </div>

  );
};

export default App;