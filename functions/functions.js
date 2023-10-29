function Limpar() {
  document.getElementById("res").value = "";
}

function Inserir(valor) {
  var visor = document.getElementById("res").value;
  visor += valor;
  document.getElementById("res").value = visor;
}

function Calcular() {
  try {
    var expressao = document.getElementById("res").value;

    if (expressao == "") {
      return;
    }

    document.getElementById("res").value = eval(expressao);
  } catch (e) {
    document.getElementById("res").value = "Erro";
  }
}
