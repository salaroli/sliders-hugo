import React from "react";

export default class Cardapio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Cardápio</h3>
        <div className="cardapio">
          <div className="cardapio__wrapper">
            {this.props.cardapio.map((item) =>

              <React.Fragment>
                {
                  item.get('title') != undefined
                    ? <h3>{item.get('title')}</h3>
                    : <div className={`alimento${item.get('border') ? "--original" : ""}`}>
                      {item.get('name') &&
                        <div className="alimento__title" dangerouslySetInnerHTML={{__html: item.get('name')}}></div>
                      }
                      {item.get('extra') &&
                        <div className="alimento__extra">{item.get('extra')}</div>
                      }
                      {item.get('price') &&
                        <div className="alimento__price">R$ {item.get('price')}</div>
                      }
                      {item.get('description') &&
                        <div className="alimento__description">{item.get('description')}</div>
                      }
                    </div>
                }
              </React.Fragment>
            )}
          </div>
          <div className="cardapio__background angle--both-left-right">
          </div>
        </div>
      </React.Fragment>
    );
  }
}



