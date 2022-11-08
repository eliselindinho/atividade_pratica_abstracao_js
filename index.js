class Alunos {
  nome = "";
  endereco = "";
  data_nascimento = null;
  email = "";
  telefone = "";
  avalicoes = [];

  constructor(name) {
    this.nome = name;
  }
}

class Avaliacao {
  tipo = "";
  nota = 0;
  obs = "";

  constructor(type) {
    this.tipo = type;
  }
}

const alunos = [];
const alunoObj = new Alunos("Elis");
const prova = new Avaliacao("Prova");

alunoObj.avalicoes.push(prova);
alunos.push(alunoObj);
