import React from 'react';

class App extends React.Component {
 
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
  }

  render(){
    return (
      <div>
        Latitude: {}
      </div>
    );
  }
};

export default App;