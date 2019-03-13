import React from "react"
import Lines from '../components/Lines'

export default class Story extends React.Component {

  state = {
    page: 0,
    storyText: [
      "Click to begin reading!",
      "The End"
    ]
  }

  render () {
    return(
      <div id="text">
      <Lines line={this.state.storyText[this.state.page]}/>
      </div>
    )
  }
}
