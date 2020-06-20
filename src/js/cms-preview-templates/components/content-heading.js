import React from "react";
import format from "date-fns/format";

export default class ContentHeading extends React.Component {
  render() {
    return  (
		<React.Fragment>
        <div style={
            {'background-image': `url('${this.props.image}')`}
        } className="content-heading__image">
        </div>
        <div className="content-heading">

            { this.props.info != null && this.props.info != "" &&
            <div className="content-heading__info">{ this.props.info }</div>
            }

            { this.props.tag != null && this.props.tag != "" &&
            <div className="content-heading__tag">{ this.props.tag }</div>
            }

            <h1>{ this.props.title }</h1>

            { this.props.date != null && this.props.date != "" &&
            <div className="content-heading__info">{ this.props.date }</div>
            }

        </div>
		</React.Fragment>
    );
  }
}
