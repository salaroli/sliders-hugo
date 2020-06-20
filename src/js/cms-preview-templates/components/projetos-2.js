import React from "react";

export default class Projetos2 extends React.Component {
  render() {
    return  (
        <div className="background-image">
            <div className="background-image__projetos-1"></div>
            <div className="background-image__projetos-2"></div>

            <div className="projetos-2">
                <h2>{ this.props.h2 }</h2>
                <h3>{ this.props.h3 }</h3>

                <div className="projetos-2__group">

                    {this.props.cards.map((card) =>
                    <div className="projeto-card-2">
                        <div className="projeto-card-2__image">
                            <img src={`${card.get('image')}`}/>
                        </div>
                        <div className="projeto-card-2__title">
                            {card.get('title')}
                        </div>
                        <div className="projeto-card-2__description">
                            {card.get('description')}
                        </div>
                        <div className="projeto-card-2__btn-group">
                            {card.get('btn').map((bt) =>
                            <a className={bt.get('class') != null ? 'btn--' + bt.get('class') : 'btn'}>{ bt.get('text') }</a>
                            )}
                        </div>
                    </div>
                    )}


                </div>
            
            </div>
        </div>
    );
  }
}
