import React from "react";

export default class Gallery extends React.Component {
  render() {
    return  (
        <div className="gallery">
            {this.props.gallery.map((photo) =>
            <img src={`${photo.get('url')}`} alt=""></img>
            )}
        </div>
    );
  }
}
