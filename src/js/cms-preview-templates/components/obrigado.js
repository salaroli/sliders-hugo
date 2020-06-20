import React from "react";

export default class Obrigado extends React.Component {
  render() {
    return  (
        <div className="obrigado">
            <h1>Obrigado, Doador!</h1>
            <p>{ this.props.text }</p>
            <div className="obrigado__card">
                <div className="obrigado__title">{ this.props.text2 }</div>
                <div className="obrigado__social-group">

                    {this.props.social.map((site) =>
                    <a className="obrigado__social">
                        <img src={`${site.get('img')}`} alt=""/>
                    </a>
                    )}

                </div>
                <p>{ this.props.text3 }</p>
            </div>
        </div>
    );
  }
}
