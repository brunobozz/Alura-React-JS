export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this._inscritos = [];
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
  }

  deletarNotas(indice) {
    this.notas.splice(indice, 1);
  }

  inscever(func) {
    this._inscritos.push(func);
  }

  notifica() {
    this._inscritos.forEach((func) => {
      func(this.categorias);
    });
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}