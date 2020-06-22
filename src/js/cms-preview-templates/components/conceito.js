import React from "react";

export default class Conceito extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="conceito">
          {/* <div className="conceito__seta"></div> */}
          <div className="conceito__burger">
            <img src={this.props.img} alt="" />
          </div>
          <div className="conceito__descricao">
            <h2>{this.props.title}</h2>
            <p dangerouslySetInnerHTML={{__html: this.props.content}}></p>
            <div className="conceito__alert"><b>Vai a dica - </b>{this.props.dica}</div>
          </div>
        </div>
        <div className="conceito__horizontal-line"></div>
      </React.Fragment>
    );
  }
}

