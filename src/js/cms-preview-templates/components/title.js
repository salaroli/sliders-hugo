import React from "react";

export default class Title extends React.Component {
  render() {
    return  (
        <div className="title" style={
            {'background-image': `url('${this.props.img}')`}
        }>
            <h1>{ this.props.h1 }</h1>
        </div>
    );
  }
}
