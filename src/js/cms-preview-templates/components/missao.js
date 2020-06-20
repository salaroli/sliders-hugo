import React from "react";

export default class Missao extends React.Component {
  render() {
    return  (
        <div className="missao">
            <h2>{ this.props.h2 }</h2>
            <h3>{ this.props.h3 }</h3>
            <div className="missao__group">

                {this.props.cards.map((card) =>
                <div className="missao__card">
                    <div dangerouslySetInnerHTML={{__html: card.get('title') }}className="missao__title"></div>
                    <div className="missao__description">{ card.get('description') }</div>
                </div>
                )}

                <div className="missao__end">&nbsp;</div>
            </div>
        </div>
    );
  }
}
