import React from "react";
import format from "date-fns/format";

import Title from "./components/title";
import Passos from "./components/passos";
import Doe1 from "./components/doe1";

export default class Doe1Preview extends React.Component {
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
        <Passos />
        <Doe1
            h3={entry.getIn(["data", "doe1", "h3"])}
            btn={entry.getIn(["data", "doe1", "btn"])}
        />
		</React.Fragment>
	);
  }
}

