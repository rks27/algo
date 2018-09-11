import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Tree from "./components/Tree";
import Graph from "./components/Graph";

class App extends Component {
  state = { tabIndex: 0 };
  render() {
    return (
      <Tabs
        selectedIndex={this.state.tabIndex}
        onSelect={tabIndex => alert({ tabIndex })}
      >
        <TabList>
          <tab>Tree 1</tab>
          <tab>Tree 2</tab>
        </TabList>
        <TabPanel>
          <Tree />
        </TabPanel>
        <TabPanel>
          <div />
        </TabPanel>
      </Tabs>
    );
  }
}

export default App;
