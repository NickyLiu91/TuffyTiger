import React from "react"
import Lines from '../components/Lines'

export default class Story extends React.Component {

  state = {
    line: 0,
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
      "Poedy: Don't worry, I'm a great swimmer!",
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
      "They played until they were exhausted, and went home to take a break.",
      "FLIP",
      "They were watching television, when video came on that gave them a good idea.",
      "FLIP",
      "Hey, we should make our own video, Tuffy exclaimed.",
      "FLIP",
      "I can't really dance or sing, but I am good with computers Poedy said.",
      "I can make the video.",
      "FLIP",
      "Then I can be the dancer! Arlee said with a twirl.",
      "FLIP",
      "Perfect, then I will be the singer! Tuffy said in a singing voice.",
      "With the three of us, we can make a perfect video!",
      "FLIP",
      "They combined their skills: Tuffy sang, Arlee danced, and Poedy combined everything into a video.",
      "FLIP",
      "When they were done, they high fived each other and cheered.",
      "FLIP",
      "The three of us can do everything when we are together, since we are all great at different things!",
      "Together Tuffy and his friends Poedy and Arlee make the perfect team because of their different abilities and interests.",
      "That is why they are all best friends."
    ]
  }

  nextLine = () => {
    this.setState({
      line: this.state.line + 1
    })
  }

  render () {
    return(
      <div id="text" onClick={event => this.nextLine()}>
      <Lines line={this.state.storyText[this.state.line]}/>
      </div>
    )
  }
}
