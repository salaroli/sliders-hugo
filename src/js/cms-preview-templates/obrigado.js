import React from "react";
import format from "date-fns/format";

import Obrigado from "./components/obrigado";

export default class ObrigadoPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return (
		<React.Fragment>
        <Obrigado
            text={entry.getIn(["data", "obrigado", "text"])}
            text2={entry.getIn(["data", "obrigado", "text2"])}
            text3={entry.getIn(["data", "obrigado", "text3"])}
            social={entry.getIn(["data", "obrigado", "social"])}
        />
		</React.Fragment>
	);
  }
}
