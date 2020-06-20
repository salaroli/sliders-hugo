import React from "react";

export default class Passos extends React.Component {
  render() {
    return  (
        <div className="passos">
            <div className="passos__passo">
                1. Preencha suas informações
            </div>
            <div className="passos__divider">
            </div>
            <div className="passos__passo">
                2. Confirmar e pagar
            </div>
        </div>
    );
  }
}
