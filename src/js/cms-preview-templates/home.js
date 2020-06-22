import React from "react";
import format from "date-fns/format";

import Hero from "./components/hero";
import Conceito from "./components/conceito";
import Receita from "./components/receita";
import Cardapio from "./components/cardapio";
import Delivery from "./components/delivery";
import Contato from "./components/contato";
import Localizacao from "./components/localizacao";
import Footer from "./components/footer";

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
          title={entry.getIn(["data", "hero", "title"])}
          img={entry.getIn(["data", "hero", "img"])}
        />
        <Conceito
          title={entry.getIn(["data", "conceito", "title"])}
          img={entry.getIn(["data", "conceito", "img"])}
          dica={entry.getIn(["data", "conceito", "dica"])}
          content={entry.getIn(["data", "conceito", "content"])}
        />
        <Receita
          ingredientes={entry.getIn(["data", "receita"])}
        />
        <Cardapio
          cardapio={entry.getIn(["data", "cardapio"])}
        />
        <Delivery
          empresas={entry.getIn(["data", "delivery"])}
        />
        <Contato
          title={entry.getIn(["data", "contato", "title"])}
          description={entry.getIn(["data", "contato", "description"])}
          medias={entry.getIn(["data", "contato", "medias"])}
          background={entry.getIn(["data", "contato", "background"])}
        />
        <Localizacao
          localizacao={entry.getIn(["data", "localizacao"])}
        />
        <Footer
          logo={entry.getIn(["data", "feet", "logo"])}
          text={entry.getIn(["data", "feet", "text"])}
        />
      </React.Fragment>

    );

  }
}
