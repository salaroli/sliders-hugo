import React from "react";

export default class Impacto extends React.Component {
  render() {
    return  (
        <div className="background-image">
            <div className="background-image__impacto"></div>

            <div className="impacto">

                <div className="impacto__left" style={
                    {'background-image': `url('${ this.props.img }')`}
                }></div>

                <div className="impacto__right">
                    <h2>{ this.props.h2 }</h2>
                    <h3>{ this.props.h3 }</h3>
                    <div className="impacto__cards">
                        {this.props.cards.map((card) =>
                        <div className="card">
                            <div dangerouslySetInnerHTML={{__html: card.get('title') }}className="card__title"></div>
                            <div className="card__text">{ card.get('text') }</div>
                        </div>
                        )}
                    </div>
                    <a className="btn margin-top">{ this.props.btn.get('text') }</a>
                </div>
            </div>
        </div>
    );
  }
}
