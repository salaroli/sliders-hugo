import React from "react";
import format from "date-fns/format";

import Historia from "./components/historia";
import Missao from "./components/missao";
import Governanca from "./components/governanca";
import Pessoas from "./components/pessoas";
import Relatorios from "./components/relatorios";
import Padrao from "./components/padrao";
import Gallery from "./components/gallery";
import Cta3 from "./components/cta-3";

export default class SobreNosPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return (
		<React.Fragment>
        <Historia
            historias={entry.getIn(["data", "historia"])}
        />
        <Missao
            h2={entry.getIn(["data", "missao", "h2"])}
            h3={entry.getIn(["data", "missao", "h3"])}
            cards={entry.getIn(["data", "missao", "cards"])}
        />
        <Governanca
            img={entry.getIn(["data", "governanca", "img"])}
            h2={entry.getIn(["data", "governanca", "h2"])}
            h3={entry.getIn(["data", "governanca", "h3"])}
            text={entry.getIn(["data", "governanca", "text"])}
            btn={entry.getIn(["data", "governanca", "btn", "text"])}
        />
        <Pessoas
            backgroundColor={entry.getIn(["data", "pessoas", "backgroundColor"])}
            h2={entry.getIn(["data", "pessoas", "h2"])}
            h3={entry.getIn(["data", "pessoas", "h3"])}
            grupos={entry.getIn(["data", "pessoas", "grupos"])}
        />
        <Relatorios
            h2={entry.getIn(["data", "relatorios", "h2"])}
            h3={entry.getIn(["data", "relatorios", "h3"])}
            arquivos={entry.getIn(["data", "relatorios", "arquivos"])}
        />
        <Padrao
            h2={entry.getIn(["data", "padrao", "h2"])}
            h3={entry.getIn(["data", "padrao", "h3"])}
            text={entry.getIn(["data", "padrao", "text"])}
        />
        <Gallery
            gallery={entry.getIn(["data", "gallery"])}
        />
        <Cta3
            h3={entry.getIn(["data", "cta3", "h3"])}
            text={entry.getIn(["data", "cta3", "text"])}
            btn={entry.getIn(["data", "cta3", "btn"])}
        />
		</React.Fragment>
	);
  }
}
