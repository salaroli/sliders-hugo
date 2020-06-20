import React from "react";

export default class CtaSimple extends React.Component {
  render() {
    return  (
        <div className="cta-simple">
            <h3 dangerouslySetInnerHTML={{__html: this.props.h3 }}></h3>
            <a className="btn">{ this.props.btn }</a>
        </div>
    );
  }
}
