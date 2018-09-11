import React, { Component } from "react";
import D3Tree from "react-d3-tree";

class Tree extends Component {
  state = {
    myTreeData: [
      {
        name: "Top Level",
        attributes: {
          keyA: "val A",
          keyB: "val B",
          keyC: "val C"
        },
        children: [
          {
            name: "Level 2: A",
            attributes: {
              keyA: "val A",
              keyB: "val B",
              keyC: "val C"
            }
          },
          {
            name: "Level 2: B",
            children: [
              {
                name: "Level 2: A",
                attributes: {
                  keyA: "val A",
                  keyB: "val B",
                  keyC: "val C"
                }
              },
              {
                name: "Level 2: B"
              }
            ]
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div
        style={{
          width: "30em",
          height: "30em",
          border: "thick double #32a1ce"
        }}
      >
        <D3Tree
          data={this.state.myTreeData}
          orientation="verticle"
          translate={{ x: 100, y: 100 }}
        />
      </div>
    );
  }
}

export default Tree;
