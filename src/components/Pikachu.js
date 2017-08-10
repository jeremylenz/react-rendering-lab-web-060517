import React from 'react';

class Pikachu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      size: 100
    };
  }

  resizePikachu = () => {
    const pikachu = document.getElementById("pikachu");
    pikachu.height = this.state.size;
    pikachu.width = this.state.size;
    console.log('size:', this.state.size)
  }

  makeBigger = () => {
    console.log('Old size: ', this.state.size)
    console.log('New size: ', Math.floor(this.state.size * 1.05))
    this.setState({
      size: Math.floor(this.state.size * 1.10)
    });
  }

  makeSmaller = () => {
    this.setState({
      size: Math.floor(this.state.size * 0.90)
    });
  }

  componentDidUpdate() {
    this.resizePikachu()
  }

  render() {
    return (
      <div>
        <button onClick={this.makeBigger}>Bigger!</button>
        <button onClick={this.makeSmaller}>Smaller!</button>
      </div>
    )
  }
}

export default Pikachu;
