import React, { Component } from "react";

//@ functional component
const SimpleComp = ({ data }) => {
  return <h1>{data}</h1>;
};

class Test extends Component {
  //@ state Define
  state = {
    number: 4,
    number2: 10,
    str: "fdsfsfd",
  };

  constructor(props) {
    super(props);
    console.log("datat", this.props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        number: 50,
        str: "uiguykjfkutydkutydfk",
      });
    }, 3000);
    //@ state value change
    this.setState({
      number2: 110,
    });
  }
  render() {
    const { myData } = this.props;
    console.log(myData);
    return (
      <div>
        //@ pass data in props
        <SimpleComp data={this.state.str} />
        <h1>m</h1>
        <h1>{this.state.number2}</h1>
      </div>
    );
  }
}

export default Test;
