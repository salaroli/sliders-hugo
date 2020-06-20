import React from "react";

export default class Pessoas extends React.Component {
  render() {
    return  (
    <div className={this.props.backgroundColor != null ? 'background-image--grey' : 'background-image--primary'}>

     {this.props.backgroundColor != null &&
		<React.Fragment>
            <div class="background-image__blog-1"></div>
            <div class="background-image__blog-2"></div>
            <div class="background-image__blog-3"></div>
            <div class="background-image__blog-4"></div>
		</React.Fragment>
     }

        <div class="pessoas">
            <h2>{ this.props.h2 }</h2>
            <h3>{ this.props.h3 }</h3>
            {this.props.grupos.map((grupo) =>
            <div class="pessoas__group">
                <div class="pessoas__title">{ grupo.get('grupo') }</div>
                {grupo.get('pessoas').map((pessoa) =>
                <div class="pessoas__pessoa">
                    {pessoa.get('img') != null &&
                    <img src={ pessoa.get('img') } class="pessoas__foto"></img>
                    }
                    {pessoa.get('img') == null &&
                    <div class="pessoas__foto"></div>
                    }
                    <div class="pessoas__nome">{ pessoa.get('nome') }</div>
                    <div class="pessoas__job">{ pessoa.get('job') }</div>
                </div>
                )}
            </div>
            )}
        
        </div>

    </div>

    );
  }
}
