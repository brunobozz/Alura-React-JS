import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeCategoria) {
    const novaCategoria = nomeCategoria;
    const novoArrayCategorias = [...this.state.categorias, novaCategoria];
    const novoEstado = {
      categorias: novoArrayCategorias,
    };
    this.setState(novoEstado);
  }

  deletarNota(indice) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <section className="content">
        <FormularioCadastro
          criarNota={this.criarNota.bind(this)}
          categorias={this.state.categorias}
        />
        <main>
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            deletarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
