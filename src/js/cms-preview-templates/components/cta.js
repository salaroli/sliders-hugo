import React from "react";

export default class Cta extends React.Component {
  render() {
    return  (
        <form className="section--center flex">
            <h3>{ this.props.h3 }</h3>
            <div className="donate-value--cta">
                <input className="donate-value__value" type="radio" id="4" name="2"></input>
                <label for="4"><span>R$ 75</span></label>
                <input className="donate-value__value" type="radio" id="5" name="2"></input>
                <label for="5"><span>R$ 150</span></label>
                <input className="donate-value__value--hide-big" type="radio" id="6" name="2"></input>
                <label for="6"><span>R$ 300</span></label>
                <input className="donate-value__other" type="text" placeholder="outro valor"></input>
            </div>
            <a className="btn margin-top">{ this.props.btn.get('text') }</a>
        </form>
    );
  }
}

