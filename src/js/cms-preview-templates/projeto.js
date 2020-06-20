import React from "react";
import format from "date-fns/format";

import ContentHeading from "./components/content-heading";
import Cta2 from "./components/cta-2";
import Gallery from "./components/gallery";

export default class ProjetoPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return (
		<React.Fragment>
        <ContentHeading 
            title={entry.getIn(["data", "title"])}
            image={entry.getIn(["data", "image"])}
            tag={entry.getIn(["data", "category"])}
        />
        <div className="section border-bottom content">
        { widgetFor("body") }
        <Cta2 
            title={'Faça sua doação e ajude o Amigos da Poli a chegar mais longe'}
            btn={'Quero doar'}
        />
        </div>
        <Gallery
            gallery={entry.getIn(["data", "gallery"])}
        />
		</React.Fragment>
	);
  }
}

