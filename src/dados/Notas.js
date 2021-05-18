export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this._inscritos = [];
  }

  criarNota(categoria, titulo, texto) {
    const novaNota = new Nota(categoria, titulo, texto);
    this.notas.push(novaNota);
    this.notificar();
  }

  deletarNotas(indice) {
    this.notas.splice(indice, 1);
    this.notificar();
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    this._inscritos.forEach((func) => {
      func(this.notas);
    });
  }
}

class Nota {
  constructor(categoria, titulo, texto) {
    this.categoria = categoria;
    this.titulo = titulo;
    this.texto = texto;
  }
}
