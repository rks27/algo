import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tab, Tabs } from "react-bootstrap";
import Tree from "./components/Tree";
import Graph from "./components/Graph";


class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    alert(`selected ${key}`);
    this.setState({ key });
  }


  state = { tabIndex: 0 };
  render() {
    return (
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Tab 1">
        <Tabs defaultActiveKey={1.1} id="uncontrolled-tab-example">
          <Tab title="1.1" eventKey={1.1}>
              <Tree/>
          </Tab>        
          <Tab title="1.1" eventKey={1.2}>
              This is 1.1
          </Tab>        
        </Tabs>
      </Tab>
      <Tab eventKey={2} title="Tab 2">
        Tab 2 content
      </Tab>
      <Tab eventKey={3} title="Tab 3">
        Tab 3 content
      </Tab>
    </Tabs>
    );
  }
}

export default App;
