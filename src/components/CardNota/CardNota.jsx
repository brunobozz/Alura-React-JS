import React, { Component } from "react";
import "./style.css";
import { ReactComponent as IconDelete } from "../../assets/imgs/icons/delete.svg";

class CardNota extends Component {
  deletar() {
    const indice = this.props.indice;
    this.props.deletarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <IconDelete onClick={this.deletar.bind(this)} />
        </header>
        <div className="card-nota_content">
          <p className="card-nota_texto">{this.props.texto}</p>
        </div>
      </section>
    );
  }
}

export default CardNota;
