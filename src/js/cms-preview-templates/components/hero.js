import React from "react";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="hero angle--bottom-right" style={
        {'background-image': `url('${this.props.img}')`}
      }>
        <div className="navigation">
        </div>
        <div className="wrapper">
          <h1 className="hero__text">{this.props.title}</h1>
        </div>
      </div>
    );
  }
}
