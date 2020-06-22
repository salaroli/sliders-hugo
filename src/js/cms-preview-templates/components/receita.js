import React from "react";

export default class Receita extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ingrediente__group">
          {this.props.ingredientes.map((ingrediente, index) =>
            <div className="ingrediente">
              <div className="ingrediente__num">{index + 1}</div>
              <div className="ingrediente__title">{ingrediente.get('name')}</div>
              {ingrediente.get('description')}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}


