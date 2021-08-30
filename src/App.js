import React, { Component } from 'react'
import ClassEvent from './ClassEvent'
import FunctionEvent from './FunctionEvent'

export default class  extends Component {
  render() {
    return (
      <div>
        <ClassEvent />
        <br></br>
        <FunctionEvent />
      </div>
    )
  }
}
