import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div>
            <img src={this.props.logo} alt="" />
          </div>
          <p dangerouslySetInnerHTML={{__html: this.props.text}}></p>
        </div>
      </React.Fragment>
    );
  }
}


