import React, { Component } from "react";
import "./style.css";

export class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.categoria = "Sem Categoria";
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.categoria, this.titulo, this.texto);
  }

  render() {
    return (
      <form
        onSubmit={this._criarNota.bind(this)}
        className="formulario-cadastro"
      >
        <h1>Cadastro de Notas</h1>
        <select onChange={this._handleMudancaCategoria.bind(this)}>
          <option>Sem Categoria</option>
          {this.props.categorias.map((categoria) => {
            return <option value={categoria}>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={10}
          placeholder="Escreva sua nota..."
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="btn-primary btn-block">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
