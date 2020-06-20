import React from "react";

export default class Relatorios extends React.Component {
  render() {
    return  (
        <div class="relatorios">
            <h2>{ this.props.h2 }</h2>
            <h3>{ this.props.h3 }</h3>

            <div class="relatorios__group">

                {this.props.arquivos.map((arquivo) =>
                <a class="relatorios__card" style={
                    {'background-color':  `${arquivo.get('color')}` }
                }>
                    <div class="relatorios__title">Relatório</div>
                    <div class="relatorios__data">{ arquivo.get('ano') }</div>
                </a>
                )}

                <div class="relatorios__end">&nbsp;</div>
            </div>

        </div>
    );
  }
}
