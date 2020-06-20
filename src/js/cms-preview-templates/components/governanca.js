import React from "react";

export default class Governanca extends React.Component {
  render() {
    return  (
        <div className="governanca">
            <div className="governanca__image">
                <img src={this.props.img} alt=""/>
            </div>
            <div className="governanca__content">
                <h2>{ this.props.h2 }</h2>
                <h3>{ this.props.h3 }</h3>
                <p dangerouslySetInnerHTML={{__html: this.props.text }}></p>
                <a className="btn--ghost">{ this.props.btn }</a>
            </div>
        </div>
    );
  }
}
