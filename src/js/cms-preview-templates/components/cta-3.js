import React from "react";

export default class Cta3 extends React.Component {
  render() {
    return  (
        <div className="cta-3__background">
            <div className="cta-3">
                <h3>{ this.props.h3 }</h3>
                <p dangerouslySetInnerHTML={{__html: this.props.text }}></p>
                {this.props.btn.map((bt) =>
                <a className={"btn--" + bt.get('class')}>{ bt.get('label') }</a>
                )}
            </div>
        </div>
    );
  }
}
