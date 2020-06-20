import React from "react";

export default class Historia extends React.Component {
  render() {
    return  (
        <div className="background-image">
            <div className="background-image__historia-1"></div>
            <div className="background-image__historia-2"></div>
            <div className="background-image__historia-3"></div>
            <div className="historia">

                {this.props.historias.map((historia) =>

                <div className="historia__bloco">
                    <div className="flex">

                        { historia.get('h2') != null && historia.get('h2') != "" &&
                            <h2>{ historia.get('h2') }</h2>
                        }

                        { historia.get('h3') != null && historia.get('h3') != "" &&
                            <h3>{ historia.get('h3') }</h3>
                        }

                        { historia.get('text') != null && historia.get('text') != "" &&
                            <p dangerouslySetInnerHTML={{__html: historia.get('text') }}></p>
                        }

                        { historia.get('btn').get('text') != null && historia.get('btn').get('text') != "" &&
                            <a className="btn--ghost">{ historia.get('btn').get('text') }</a>
                        }

                    </div>

                    <div className="flex">

                        { historia.get('img') != null && historia.get('img') != "" &&
                            <img src={ historia.get('img')} alt=""/>
                        }

                    </div>
                </div>

                )}

            </div>
        </div>
    );
  }
}
