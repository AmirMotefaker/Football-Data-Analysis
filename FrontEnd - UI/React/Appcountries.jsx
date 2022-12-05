import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./pic/players.png";
var count = 0;
class FlavorFormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "..." };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ one: event.target.value });
    if (event.target.value === "England") {
      count++;
    } else count--;
    console.log(count);
  }
  render() {
    return (
      <div>
        <label>
          Please select your Country :
          <select
            className="sel"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="...">...</option>
            <option value="England">England</option>
            <option value="Spain">Spain</option>
          </select>
        </label>
      </div>
    );
  }
}

class FlavorFormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "..." };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ two: event.target.value });
    if (event.target.value === "2020-21") {
      count++;
    } 
    console.log(count);
  }
  render() {
    return (
      <div>
        <label>
          Please select year :
          <select
            className="sel"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="...">...</option>
            <option value="2020-21">2020-21</option>
            <option value="2021-22">2021-22</option>
          </select>
        </label>
      </div>
    );
  }
}
class FlavorFormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "..." };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ three: event.target.value });
    if (event.target.value === "Premier") {
      count++;
    } 
    console.log(count);
  }

  render() {
    return (
      <div>
        <label>
          Please select League name :
          <select
            className="sel"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="...">...</option>
            <option value="Premier">Premier</option>
            <option value="La-Liga">La-Liga</option>
          </select>
        </label>
      </div>
    );
  }
}
class FlavorFormFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "..." };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value === "players") {
      count++;
    } else if (event.target.value === "maximum") {
      count += 2;
    } else if (event.target.value == "least") {
      count += 3;
    } else if (event.target.value == "Age Groups") {
      count += 4;
    } else if (event.target.value == "Penalties") {
      count += 5;
    } else if (event.target.value == "under 20") {
      count += 6;
    } else if (event.target.value == "Average") {
      count += 7;
    } else if (event.target.value == "Total assists") {
      count += 8;
    } else if (event.target.value == "Top 10 Assists") {
      count += 9;
    } else if (event.target.value == "Clubs") {
      count += 10;
    } else if (event.target.value == "Goals") {
      count += 11;
    }else if (event.target.value == "yellow") {
      count += 12;
    }
  }

  render() {
    return (
      <div>
        <label>
          Please select Analysis :
          <select
            className="sel"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="...">...</option>
            <option value="players">Most players from which countries</option>
            <option value="maximum">
              Clubs with maximum players in their squad
            </option>
            <option value="least">
              Clubs with least players in their squad
            </option>
            <option value="Age Groups">Total Players with Age Groups</option>
            <option value="Penalties">Penalties missed vs scored</option>
            <option value="under 20">
              Total under 20 players in each club
            </option>
            <option value="Average">Average age of players in each club</option>
            <option value="Total assists">Total assists from each club</option>
            <option value="Top 10 Assists">Top 10 Assists</option>
            <option value="Clubs">Clubs vs Total Goals</option>
            <option value="Goals">Goals with assist and without assist</option>
            <option value="yellow">Players with the most yellow cards</option>
          </select>
        </label>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { one: "", two: "", three: "", four: "" };

    this.handleResult = this.handleResult.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleReset(value) {
    // this.setState({ one: "", two: "", three: "", four: "" });
    // this.setState({ value: "" });
    // count = 0;
    // console.log("count=", count);
    // const elem = ReactDOM.createRoot(document.getElementById("gal"));
    // elem.render(<img src=""></img>);
    window.location.reload(false)

    // this.setState({one:"..."})
    // this.setState({two:""})
    // this.setState({three:""})
    // this.setState({four:"..."})
  }
  handleResult() {

    switch (count) {
      case 4:
        console.log("ok=4");
        {
        this.showPic1();
        }
        break;
      case 5:
        console.log("ok=5");
        {
          this.showPic2();
        }
        break;
      case 6:
        console.log("ok=6");
        {
          this.showPic3();
        }
        break;
      case 7:
        console.log("ok=7");
        {
          this.showPic4();
        }
        break;
      case 8:
        console.log("ok=8");
        {
          this.showPic5();
        }
        break;
      case 9:
        console.log("ok=9");
        {
          this.showPic6();
        }
        break;
      case 10:
        console.log("ok=10");
        {
          this.showPic7();
        }
        break;
      case 11:
        console.log("ok=11");
        {
          this.showPic8();
        }
        break;
      case 12:
        console.log("ok=12");
        {
          this.showPic9();
        }
        break;
      case 13:
        console.log("ok=13");
        {
          this.showPic10();
        }
        break;
      case 14:
        console.log("ok=14");
        {
          this.showPic11();
        }
        break;
        case 15:
          console.log("ok=14");
          {
            this.showPic12();
          }
          break;
      default: {
        this.showPicDef();
      }
    }
  }
  
  showPic1() {
    const titr = ReactDOM.createRoot(document.getElementById("titr"))
    titr.render(<h1>Most players from which countries</h1>);
    const elem = ReactDOM.createRoot(document.getElementById("gal"));
    elem.render(<img src={require("./pic/players.png")} alt={"Players"}></img>);
  }
  showPic2() {
    const titr = ReactDOM.createRoot(document.getElementById("titr"))
    titr.render(<h1>Clubs with maximum players in their squad</h1>);
    const elem = ReactDOM.createRoot(document.getElementById("gal"));
    elem.render(<img src={require("./pic/maximum.png")} alt={"Maximum"}></img>);
  }
  showPic3() {
    const titr = ReactDOM.createRoot(document.getElementById("titr"))
    titr.render(<h1>Clubs with least players in their squad</h1>);
    const elem = ReactDOM.createRoot(document.getElementById("gal"));
    elem.render(<img src={require("./pic/least.png")} alt={"Least"}></img>);
  }
  showPic4() {
    const titr = ReactDOM.createRoot(document.getElementById("titr"))
    titr.render(<h1>Total Players with Age Groups</h1>);
    const elem = ReactDOM.createRoot(document.getElementById("gal"));
    elem.render(<img src={require("./pic/age-group.png")} alt={"age-group"}></img>,
    );
  }
  showPic5() {
    const titr = ReactDOM.createRoot(document.getElementById("titr"))
    titr.render(<h1>Penalties missed vs scored</h1>);
    const elem = ReactDOM.createRoot(document.getElementById("gal"));
    elem.render(<img src={require("./pic/Penalties.png")} alt={"Penalties"}></img>,);
  }
  showPic6() {
    const titr = ReactDOM.createRoot(document.getElementById("titr"))
    titr.render(<h1> Total under 20 players in each club</h1>);
    const elem = ReactDOM.createRoot(document.getElementById("gal"));
    elem.render(<img src={require("./pic/under-20.png")} alt={"under-20"}></img>,);
  }
  showPic7() {
    const titr = ReactDOM.createRoot(document.getElementById("titr"))
    titr.render(<h1> Average age of players in each club </h1>);
    const elem = ReactDOM.createRoot(document.getElementById("gal"));
    elem.render(<img src={require("./pic/Average.png")} alt={"Average"}></img>);
  }
  showPic8() {
    const titr = ReactDOM.createRoot(document.getElementById("titr"))
    titr.render(<h1> Total assists from each club </h1>);
    const elem = ReactDOM.createRoot(document.getElementById("gal"));
    elem.render(<img src={require("./pic/Total assists.png")}alt={"Total assists"}></img>,);
  }
  showPic9() {
    const titr = ReactDOM.createRoot(document.getElementById("titr"))
    titr.render(<h1> Top 10 Assists </h1>);
    const elem = ReactDOM.createRoot(document.getElementById("gal"));
    elem.render(<img src={require("./pic/Top 10 Assists.png")}alt={"Top 10 Assists"}></img>,);
  }
  showPic10() {
    const titr = ReactDOM.createRoot(document.getElementById("titr"))
    titr.render(<h1> Clubs vs Total Goals </h1>);
    const elem = ReactDOM.createRoot(document.getElementById("gal"));
    elem.render(<img src={require("./pic/Clubs.png")} alt={"Clubs"}></img>);
  }
  showPic11() {
    const titr = ReactDOM.createRoot(document.getElementById("titr"))
    titr.render(<h1> Goals with assist and without assist </h1>);
    const elem = ReactDOM.createRoot(document.getElementById("gal"));
    elem.render(<img src={require("./pic/Goals.png")} alt={"Goals"}></img>);
  }
  showPic12() {
    const titr = ReactDOM.createRoot(document.getElementById("titr"))
    titr.render(<h1>Players with the most yellow cards </h1>);
    const elem = ReactDOM.createRoot(document.getElementById("gal"));
    elem.render(<img src={require("./pic/yellow.png")} alt={"yellow"}></img>);
  }
  render() {
    return (
      <>
        <h1 className="title">FPA</h1>
        <FlavorFormOne />
        <FlavorFormTwo />
        <FlavorFormThree />
        <FlavorFormFour />
        {this.state.one}
        {this.state.two}
        {this.state.three}
        {this.state.four}
        <div className="btn-wrapper">
        <button
          className="btn" id="show"
          type="button"
          onClick={this.handleResult.bind(this)}
        >
          Show Result
        </button>
        <button className="btn"  id="clear" onClick={this.handleReset.bind(this)}>
          Clear
        </button>
        </div>
      </>
    );
  }
}
export default App;
