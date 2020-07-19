import React from "react";

export default class Delivery extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>{this.props.title}</h3>
        <div className="delivery">
          {this.props.empresas.map((empresa) =>
            <div>
              <img src={empresa.get('img')} alt="" />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
