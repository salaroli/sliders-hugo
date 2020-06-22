import React from "react";

export default class Contato extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="contato">
          <div className="contato__text">
            <h4>{this.props.title}</h4>
            <p>{this.props.description}</p>
            <div className="contato__social">
              {this.props.medias.map((media) =>
                <a href={media.get('url')}><img src={media.get('img')} targets="_blank" alt="" /></a>
              )}
            </div>
          </div>
          <div className="contato__images">
            {this.props.background.map((image) =>
              <img src={image.get('img')} alt="" />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

