import React from "react";

export default class Doadores extends React.Component {
  render() {
    return  (
        <div className="background-image--primary">
            <div className="section--flex">
                <img className="section__icon" src={`${this.props.img}`} alt=""></img>
                <div className="section__flex-container">
                    <h3>{ this.props.h3 }</h3>
                    <div className="flex">
                        <p>{ this.props.text }</p>
                        <a className="btn--ghost-white margin-top">{ this.props.btn.get('text') }</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
