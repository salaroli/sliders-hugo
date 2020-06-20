import React from "react";
import format from "date-fns/format";

import Title from "./components/title";
import Passos from "./components/passos";
import Doe2 from "./components/doe2";

export default class Doe2Preview extends React.Component {
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
        <Doe2
            h3={entry.getIn(["data", "doe2", "h3"])}
            btn={entry.getIn(["data", "doe2", "btn"])}
        />
		</React.Fragment>
	);
  }
}
