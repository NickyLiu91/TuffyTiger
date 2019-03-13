import React from "react"
import Lines from '../components/Lines'

export default class Story extends React.Component {

  state = {
    page: 0,
    storyText: [
      "Click to begin reading!",
      "FLIP",
      "Tuffy and his friends were all playing in a Savannah.",
      "FLIP",
      "They were playing catch, and Tuffy threw the ball to Poedy",
      "But Tuffy missed, and hte ball flew into a lake.",
      "FLIP",
      "Tuffy: Oh no! I can't swim, how are we going to get the ball?",
      "FLIP",
      "Poedy: Don't worry, I'm a great swimmer!"
      "Poedy jumped into the lake and return the ball in a jiffy.",
      "FLIP",
      "It was now Poedy's turn to throw the ball to Arlee.",
      "But the ball missed and landed on top of a tree.",
      "FLIP",
      "Poedy: Ack, I can't reach up there! Swimming doesn't help!",
      "FLIP",
      "Arlee: Don't worry, I can fly! I will just fly up and get it!",
      "Arlee flew up into the tree and retrieved the ball easily.",
      "FLIP",
      "Arlee now threw the ball to Tuffy.",
      "But the wind was too strong, and blew the ball below a lot of heavy rocks.",
      "FLIP",
      "Arlee: Oh no! Those hole is too small to fit in, and those rocks are too heavy!",
      "FLIP",
      "But now it was Tuffy's turn to get the ball.",
      "Tuffy: Don't worry, I'm really strong!",
      "FLIP",
      "And with a great roar, Tuffy lifted the rocks and got the ball back.",
       "FLIP",
       "They played until they were exhausted, and they decided to take a break.",
       ""
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
