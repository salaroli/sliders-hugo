import React from "react";

export default class Hero extends React.Component {
  render() {
    return  (
        <form className="hero">
            <div className="hero__left">
                <h1>{ this.props.h1 }</h1>
                
                <div className="donate-value">
                    <input className="donate-value__value" type="radio" id="1" name="1"></input>
                    <label for="1"><span>R$ 75</span></label>
                    <input className="donate-value__value" type="radio" id="2" name="1"></input>
                    <label for="2"><span>R$ 150</span></label>
                    <input className="donate-value__value--hide" type="radio" id="3" name="1"></input>
                    <label for="3"><span>R$ 300</span></label>
                    <input className="donate-value__other" type="text" placeholder="outro valor"></input>
                </div>
                <a className="btn margin-top">Quero doar</a>
            </div>
            <div className="hero__image">
                <div className="hero__picture" style={
                    {'background-image': `url('${ this.props.img }')`}
                }></div>
                <div className="hero__circle--1"></div>
                <div className="hero__circle--2"></div>
                <div className="hero__circle--3"></div>
            </div>
            <div className="hero__right"></div>
        </form>
    );
  }
}
