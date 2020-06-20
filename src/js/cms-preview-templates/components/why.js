import React from "react";

export default class Why extends React.Component {
  render() {
    return  (
        <div className="background-image">
            <div className="background-image__why-1"></div>
            <div className="background-image__why-2"></div>
            <div className="section--center flex">
                <h2>{ this.props.h2 }</h2>
                <h3>{ this.props.h3 }</h3>
            
                <div className="carousel--small">

                    {this.props.cards.map((card) =>
                    <div className="card--no-shadow">
                        <img className="card__icon" src={`${card.get('img')}`} alt=""/>
                        <div className="card__text--center">{card.get('text')}</div>
                    </div>
                    )}

                </div>

            
                <div className="carousel__after">
                    
                    {this.props.cards.map((card) =>
                    <div className="card--no-shadow">
                        <img className="card__icon" src={`${card.get('img')}`} alt=""/>
                        <div className="card__text--center">{card.get('text')}</div>
                    </div>
                    )}

                </div>

                <a className="btn margin-top--40">{ this.props.btn.get('text') }</a>
            </div>
        </div>
    );
  }
}
