export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  inscever(func) {
    this._inscritos.push(func);
  }

  notifica() {
    this._inscritos.forEach((func) => {
      func(this.categorias);
    });
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
  }
}
