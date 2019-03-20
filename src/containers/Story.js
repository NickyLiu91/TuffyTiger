import React from "react"
import Lines from '../components/Lines'
import Images from '../components/Images'

export default class Story extends React.Component {

  state = {
    line: 0,
    page: 0,
    storyText: [
      {text: "Click to begin reading!", image: "images/jungle1.jpg"},
      {text: "Tuffy and his friends were all playing in a jungle.", image: "image"},
      {text: "They were playing catch, and Tuffy threw the ball to Poedy", image: "image"},
      {text: "But Tuffy missed, and hte ball flew into a lake.", image: "image"},
      {text: "Tuffy: Oh no! I can't swim, how are we going to get the ball?", image: "image"},
      {text: "Poedy: Don't worry, I'm a great swimmer!", image: "image"},
      {text: "Poedy jumped into the lake and return the ball in a jiffy.", image: "image"},
      {text: "It was now Poedy's turn to throw the ball to Arlee.", image: "image"},
      {text: "But the ball missed and landed on top of a tree.", image: "image"},
      {text: "Poedy: Ack, I can't reach up there! Swimming doesn't help!", image: "image"},
      {text: "Arlee: Don't worry, I can fly! I will just fly up and get it!", image: "image"},
      {text: "Arlee flew up into the tree and retrieved the ball easily.", image: "image"},
      {text: "Arlee now threw the ball to Tuffy.", image: "image"},
      {text: "But the wind was too strong, and blew the ball below a lot of heavy rocks.", image: "image"},
      {text: "Arlee: Oh no! Those hole is too small to fit in, and those rocks are too heavy!", image: "image"},
      {text: "But now it was Tuffy's turn to get the ball.", image: "image"},
      {text: "Tuffy: Don't worry, I'm really strong!", image: "image"},
      {text: "And with a great roar, Tuffy lifted the rocks and got the ball back.", image: "image"},
      {text: "They played until they were exhausted, and went home to take a break.", image: "image"},
      {text: "They were watching television, when video came on that gave them a good idea.", image: "image"},
      {text: "Hey, we should make our own video, Tuffy exclaimed.", image: "image"},
      {text: "I can't really dance or sing, but I am good with computers Poedy said.", image: "image"},
      {text: "I can make the video.", image: "image"},
      {text: "Then I can be the dancer! Arlee said with a twirl.", image: "image"},
      {text: "Perfect, then I will be the singer! Tuffy said in a singing voice.", image: "image"},
      {text: "With the three of us, we can make a perfect video!", image: "image"},
      {text: "They combined their skills: Tuffy sang, Arlee danced, and Poedy combined everything into a video.", image: "image"},
      {text: "When they were done, they high fived each other and cheered.", image: "image"},
      {text: "The three of us can do everything when we are together, since we are all great at different things!", image: "image"},
      {text: "Together Tuffy and his friends Poedy and Arlee make the perfect team because of their different abilities and interests.", image: "image"},
      {text: "That is why they are all best friends.", image: "image"},
    ]
  }

  nextLine = () => {
    this.setState({
      line: this.state.line + 1
    })
  }

  render () {
    return(
      <div id="page">
        <div id="picture-location" onClick={event => this.nextLine()}>
          <Images image={this.state.storyText[this.state.line].image}/>
        </div>
        <div id="text" onClick={event => this.nextLine()}>
          <Lines line={this.state.storyText[this.state.line].text}/>
        </div>
      </div>
    )
  }
}
