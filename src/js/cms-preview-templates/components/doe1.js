import React from "react";

export default class Doe1 extends React.Component {
  render() {
    return  (
        <form className="section bp-small-2">
            <h3 className="no-margin-top margin-bottom">{ this.props.h3 }</h3>
            <div className="donate-value">
                <input className="donate-value__value" type="radio" id="1" name="1"></input>
                <label for="1"><span>R$ 200</span></label>
                <input className="donate-value__value" type="radio" id="2" name="1"></input>
                <label for="2"><span>R$ 500</span></label>
                <input className="donate-value__value" type="radio" id="3" name="1"></input>
                <label for="3"><span>R$ 800</span></label>
            </div>
            <input className="donate-value__outro" type="text" placeholder="Outro valor"></input>
            <div className="donate-value__recorrencia">
                <input type="radio" id="4" name="2" checked="checked"></input>
                <label for="4">Doação mensal</label>
                <input type="radio" id="5" name="2"></input>
                <label for="5">Doação única</label>
            </div>

            <label for="6">Nome completo</label>
            <input className="with-label" type="text" id="6" required></input>
            
            <label for="7">E-mail</label>
            <input className="with-label" type="email" id="7" required></input>
            
            <label for="cpf">CPF</label>
            <input className="with-label" type="tel" id="cpf" required></input>
            
            <label for="telefone">Telefone</label>
            <input className="with-label" type="tel" id="telefone" required></input>
            
            <a className="btn margin-top inline-block">{ this.props.btn.get('text') }</a>
        </form>
    );
  }
}
