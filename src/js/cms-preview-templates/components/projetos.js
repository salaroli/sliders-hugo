import React from "react";

export default class Projetos extends React.Component {
  render() {
    return  (
        <div className="background-image">
            <div className="background-image__projetos-1"></div>
            <div className="background-image__projetos-2"></div>

            <div className="section--center flex">
                <h2>{ this.props.h2 }</h2>
                <h3>{ this.props.h3 }</h3>
            
                <div className="dummy">
                    <div className="projeto-card">
                        <div className="projeto-card__image">
                            <div className="projeto-card__subject">Engenharia</div>
                        </div>
                        <div className="projeto-card__title">Aula Invertida - Mídias digitais como ferramenta de ensino para engenharia</div>
                        <div className="projeto-card__stats">
                            <div className="projeto-card__data">
                                <div className="projeto-card__number">2.000</div>
                                <div className="projeto-card__stat">Alunos impactados</div>
                            </div>
                            <div className="projeto-card__data">
                                <div className="projeto-card__number">50k</div>
                                <div className="projeto-card__stat">investidos desde 2016</div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
                { this.props.btn  != null && this.props.btn  != "" &&
                <a className="btn--ghost margin-top--40">{ this.props.btn.get('text') }</a>
                }

            </div>
        </div>
    );
  }
}
