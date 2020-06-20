import React from "react";

export default class Padrao extends React.Component {
  render() {
    return  (
        <div className="padrao">
            <h2>{ this.props.h2 }</h2>
            <h3>{ this.props.h3 }</h3>
            <p dangerouslySetInnerHTML={{__html: this.props.text }}></p>
        </div>
    );
  }
}
