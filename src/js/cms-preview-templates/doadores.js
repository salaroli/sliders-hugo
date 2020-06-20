import React from "react";
import format from "date-fns/format";

import Why from "./components/why";
import Impacto from "./components/impacto";
import Pessoas from "./components/pessoas";
import Padrao from "./components/padrao";
import Gallery from "./components/gallery";
import Cta3 from "./components/cta-3";

export default class DoadoresPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return (
		<React.Fragment>
        <Why 
            h2={entry.getIn(["data", "why", "h2"])}
            h3={entry.getIn(["data", "why", "h3"])}
            cards={entry.getIn(["data", "why", "cards"])}
            btn={entry.getIn(["data", "why", "btn"])}
        />
        <Impacto
            h2={entry.getIn(["data", "impacto", "h2"])}
            h3={entry.getIn(["data", "impacto", "h3"])}
            img={entry.getIn(["data", "impacto", "img"])}
            cards={entry.getIn(["data", "impacto", "cards"])}
            btn={entry.getIn(["data", "impacto", "btn"])}
        />
        <Pessoas
            backgroundColor={entry.getIn(["data", "pessoas", "backgroundColor"])}
            h2={entry.getIn(["data", "pessoas", "h2"])}
            h3={entry.getIn(["data", "pessoas", "h3"])}
            grupos={entry.getIn(["data", "pessoas", "grupos"])}
        />
		</React.Fragment>
	);
  }
}
