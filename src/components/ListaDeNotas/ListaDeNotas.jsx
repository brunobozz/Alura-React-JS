import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./style.css";

export class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas.bind(this));
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-de-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-de-notas_item" key={index}>
              <CardNota
                indice={index}
                deletarNota={this.props.deletarNota}
                categoria={nota.categoria}
                titulo={nota.titulo}
                texto={nota.texto}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
