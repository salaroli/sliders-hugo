import React from "react";
import format from "date-fns/format";

import Hero from "./components/hero";
import ComoFunciona from "./components/como-funciona";
import Impacto from "./components/impacto";
import Projetos2 from "./components/projetos-2";
import Historia from "./components/historia";
import Why from "./components/why";
import Depoimentos from "./components/depoimentos";
import Cta from "./components/cta";
import Doadores from "./components/doadores";

export default class HomePreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return (
		<React.Fragment>
        <Hero 
            h1={entry.getIn(["data", "hero", "h1"])}
            img={entry.getIn(["data", "hero", "img"])}
        />
        <ComoFunciona 
            h2={entry.getIn(["data", "comoFunciona", "h2"])}
            h3={entry.getIn(["data", "comoFunciona", "h3"])}
            cards={entry.getIn(["data", "comoFunciona", "cards"])}
        />
        <Impacto
            h2={entry.getIn(["data", "impacto", "h2"])}
            h3={entry.getIn(["data", "impacto", "h3"])}
            img={entry.getIn(["data", "impacto", "img"])}
            cards={entry.getIn(["data", "impacto", "cards"])}
            btn={entry.getIn(["data", "impacto", "btn"])}
        />
        <Projetos2
            h2={entry.getIn(["data", "projetos", "h2"])}
            h3={entry.getIn(["data", "projetos", "h3"])}
            cards={entry.getIn(["data", "projetos", "cards"])}
        />
        <Historia
            historias={entry.getIn(["data", "historia"])}
        />
        <Why 
            h2={entry.getIn(["data", "why", "h2"])}
            h3={entry.getIn(["data", "why", "h3"])}
            cards={entry.getIn(["data", "why", "cards"])}
            btn={entry.getIn(["data", "why", "btn"])}
        />
        <Depoimentos 
            h2={entry.getIn(["data", "depoimentos", "h2"])}
            h3={entry.getIn(["data", "depoimentos", "h3"])}
            depoimentos={entry.getIn(["data", "depoimentos", "depoimento"])}
        />
        <Cta 
            h3={entry.getIn(["data", "cta", "h3"])}
            btn={entry.getIn(["data", "cta", "btn"])}
        />
		</React.Fragment>
	);
  }
}
