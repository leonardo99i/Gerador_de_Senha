function geraSenha() {
    var maiuscula = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
    var minuscula = "abcdefghijklmnopqrstuvwxyz";
    var numeros = "0123456789";
    var simbolos = ".$%-_&!@+?:"
    var juncao = maiuscula + minuscula + numeros + simbolos;
    var Tamanho_Senha = 16;
    var senha = "";

    for(var i = 0; i < Tamanho_Senha; i++) {
      var randomNumber = Math.floor(Math.random() * juncao.length);
      senha += juncao.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = senha;
  }