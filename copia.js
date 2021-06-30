function copiaSenha(){
    let senhaCopiada = document.getElementById("password");
    senhaCopiada.select();
    senhaCopiada.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Senha Copiada com sucesso!!!");
}