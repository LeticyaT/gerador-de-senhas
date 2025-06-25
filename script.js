function alterarTamanho(valor) {
  let tamanhoEl = document.getElementById("tamanho");
  let tamanho = parseInt(tamanhoEl.textContent);
  tamanho = Math.max(1, tamanho + valor); // mínimo 1 caractere
  tamanhoEl.textContent = tamanho;
}

function gerarSenha() {
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%&*?";

  let caracteres = "";
  if (document.getElementById("maiusculo").checked) caracteres += maiusculas;
  if (document.getElementById("minusculo").checked) caracteres += minusculas;
  if (document.getElementById("numero").checked) caracteres += numeros;
  if (document.getElementById("simbolo").checked) caracteres += simbolos;

  const tamanho = parseInt(document.getElementById("tamanho").textContent);
  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(index);
  }

  document.getElementById("senha").textContent = senha || "Selecione pelo menos uma opção";
}
