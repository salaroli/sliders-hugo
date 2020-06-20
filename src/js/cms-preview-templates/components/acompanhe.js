import React from "react";

export default class Acompanhe extends React.Component {
  render() {
    return  (
        <div className="acompanhe">
            <h1>{ this.props.h1 }</h1>
            <div className="acompanhe__group">

                {this.props.cards.map((card) =>
                <div className="acompanhe__card">
                    <div className="acompanhe__title">{ card.get('title') }</div>
                    <div className="acompanhe__description">{ card.get('description') }</div>
                </div>
                )}

                <div className="acompanhe__end">&nbsp;</div>
            </div>
        </div>
    );
  }
}
