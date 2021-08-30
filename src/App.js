import React, { Component } from 'react'

import ClassEvent from './ClassEvent'
// import FunctionEvent from './FunctionEvent'

class App extends Component {

  constructor(){
    super();
    this.state = {
      text: "Mamad Taheri"
    }
  }

  sayHi = () => {
    console.log(this.state.text)
  }

  render() {
    return (
      <div>
        <ClassEvent sayHi={this.sayHi}/>
        {/* <FunctionEvent /> */}
      </div>
    )
  }
}

export default App