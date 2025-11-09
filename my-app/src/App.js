import './App.css';
import React, { useState } from 'react';
import Board from './Board';
import TileConfigurator from './TileConfigurator';

function distribute(total) {
  const base = Math.floor(total / 4);
  const rem = total % 4;
  // distribute remainder to the first rem sides
  return [0, 1, 2, 3].map((i) => base + (i < rem ? 1 : 0));
}

function App() {
  const [tilesBySide, setTilesBySide] = useState(null);

  return (
    <div className="App">
      {!tilesBySide ? (
        <TileConfigurator
          onStart={(total) => {
            const dist = distribute(total);
            setTilesBySide(dist);
          }}
        />
      ) : (
        <Board tilesBySide={tilesBySide} />
      )}
    </div>
  );
}

export default App;
