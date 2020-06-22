import React from "react";

export default class Localizacao extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Localização</h3>
        <div className="localizacao">
          <div className="map">
            {this.props.localizacao.map((local) =>
              <React.Fragment>
                <div className="map__rua" dangerouslySetInnerHTML={{__html: local.get('endereco')}}>
                </div>
                <div className="map__telefone" dangerouslySetInnerHTML={{__html: local.get('telefone')}}>
                </div>
                <div className="map__data" dangerouslySetInnerHTML={{__html: local.get('horario')}}>
                </div>
                <hr />
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}


