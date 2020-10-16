import React from "react";
import Test from "./MyTest.component";

class App extends React.Component {
  myName = "mahesh";
  ch = [
    {
      name: "Charlie",
      job: "Janitor",
    },
    {
      name: "Mac",
      job: "Bouncer",
    },
    {
      name: "Dee",
      job: "Aspring actress",
    },
    {
      name: "Dennis",
      job: "Bartender",
    },
  ];

  render() {
    return (
      <div>
        <Test myData={this.ch} />
      </div>
    );
  }
}

export default App;
