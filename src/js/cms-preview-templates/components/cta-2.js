import React from "react";

export default class Cta2 extends React.Component {
  render() {
    return  (
        <div className="cta-2">
            <div className="cta-2__title">{ this.props.title }</div>
            <a className="btn">{ this.props.btn }</a>
            <div className="cta-2__circle"></div>
            <div className="cta-2__stripes"></div>
        </div>
    );
  }
}
