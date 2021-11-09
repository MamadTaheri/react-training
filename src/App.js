import React from 'react';

import {carbrands} from './data/carbrands'

const App = () => {
  return (
    <div>
      <ul>
        {
          carbrands.map((brand, index) => <li key={brand.id}>{`${index} --- ${brand.name} `}</li> )
        }        
      </ul>
    </div>
  );
};

export default App;