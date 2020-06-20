import React from "react";

export default class Depoimentos extends React.Component {
  render() {
    return  (
        <div className="background-image">
            <div className="background-image__depoimentos-1"></div>
            <div className="background-image__depoimentos-2"></div>
            <div className="section--center">
                <h2>{ this.props.h2 }</h2>
                <h3>{ this.props.h3 }</h3>
            
                <div className="dummy--700">

                    {this.props.depoimentos.map((depoimento) =>
                    <div className="card--horizontal">
                        <div className="card__image" style={
                            {'background-image': `url('${ depoimento.get('img') }')`}
                        }></div>
                        
                        <div className="flex padding flex-3">
                            <div className="card__text">"{ depoimento.get('text') }"</div>
                            <div className="card__author">{ depoimento.get('author') }</div>
                            <div className="card__job">{ depoimento.get('job') }</div>
                        </div>
                    </div>
                    )}

                </div>
            
            </div>
            
        </div>
    );
  }
}
