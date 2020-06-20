import React from "react";
import format from "date-fns/format";

import Title from "./components/title";
import ComoFunciona from "./components/como-funciona";
import CtaSimple from "./components/cta-simple";
import Missao from "./components/missao";

export default class ProjetosPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return (
		<React.Fragment>
        <Title
            h1={entry.getIn(["data", "hero", "h1"])}
            img={entry.getIn(["data", "hero", "img"])}
        />
        <ComoFunciona 
            h2={entry.getIn(["data", "comoFunciona", "h2"])}
            h3={entry.getIn(["data", "comoFunciona", "h3"])}
            cards={entry.getIn(["data", "comoFunciona", "cards"])}
        />
        <CtaSimple
            h3={entry.getIn(["data", "ctaSimple", "h3"])}
            btn={entry.getIn(["data", "ctaSimple", "btn", "label"])}
        />
        <Missao
            h2={entry.getIn(["data", "missao", "h2"])}
            h3={entry.getIn(["data", "missao", "h3"])}
            cards={entry.getIn(["data", "missao", "cards"])}
        />
		</React.Fragment>
	);
  }
}
