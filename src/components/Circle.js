import React from 'react';

class Circle extends React.Component {

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);

    return (
      <div className={`circle ${color}`}></div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(this.props)
    return (nextProps.color !== this.props.color)
  }

} //end of class

export default Circle;
