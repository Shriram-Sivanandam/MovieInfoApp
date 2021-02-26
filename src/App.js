import './App.css';
import Data from './data.json';

function App() {
  return (
    <div className="app">
      <div className='cards'>
        { Data.map(card => {
          return(
            <div className='container' key={ card.id }>
              <div className="card__movie">
                <h1 className='card__title'>{ card.title }</h1>
                <div className="card__posterContainer">
                  <img className='card__poster' src={ card.posterUrl } alt="Movie Poster Unavailable. Sorry!!"/>
                </div>
                <div className="card__info">
                  <div className="card__oneLiners">
                    <h4>Year of Release: { card.year }</h4>
                    <h4>Screen Runtime: { card.runtime }</h4>
                    <h4>Genres: { card.genres }</h4>
                    <h4>Directed by: { card.director }</h4>
                    <h4>Cast: { card.actors }</h4>
                  </div>
                  <h4 className='card__summary'>Summary: { card.plot }</h4>
                </div>
              </div>
            </div>
          )
        }) }
      </div>
    </div>
  );
}

export default App;
