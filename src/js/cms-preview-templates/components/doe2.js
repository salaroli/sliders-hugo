import React from "react";

export default class Doe2 extends React.Component {
  render() {
    return  (
        <form className="section bp-small-2">
            <h3 className="no-margin-top margin-bottom">{ this.props.h3 }</h3>

            <label for="card">Número do cartão</label>
            <input className="with-label" type="tel" id="card" required></input>
            
            <label for="titular">Nome do titular</label>
            <input className="with-label uppercase" type="text" id="titular" required></input>
            
            <label for="date">Data de validade</label>
            <input className="with-label" type="tel" id="date" required></input>
            
            <label for="cvv">Código de segurança CVV</label>
            <input className="with-label" type="tel" id="cvv" required></input>
            
            <div className="donate-value margin-top">
                <input className="donate-value__value" type="radio" id="1" name="1"></input>
                <label for="1"><span>R$ 200</span></label>
                <input className="donate-value__value" type="radio" id="2" name="1"></input>
                <label for="2"><span>R$ 500</span></label>
                <input className="donate-value__value" type="radio" id="3" name="1"></input>
                <label for="3"><span>R$ 800</span></label>
            </div>
            <input className="donate-value__outro" type="text" placeholder="Outro valor"></input>
            <div className="donate-value__recorrencia">
                <input type="radio" id="4" name="2"></input>
                <label for="4">Doação mensal</label>
                <input type="radio" id="5" name="2"></input>
                <label for="5">Doação única</label>
            </div>

            <a className="btn margin-top inline-block">{ this.props.btn.get('text') }</a>
        </form>
    );
  }
}
