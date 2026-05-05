const form = document.getElementById("form-produto");
const resultado = document.getElementById("resultado");

function limparErros() {
  document.querySelectorAll(".error").forEach((el) =>
    el.classList.remove("error")
  );
  document.querySelectorAll(".error-msg").forEach((el) => el.remove());
}

function mostrarErro(campo, mensagem) {
  campo.classList.add("error");
  const msg = document.createElement("span");
  msg.className = "error-msg";
  msg.textContent = mensagem;
  campo.after(msg);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  limparErros();

  const nome = document.getElementById("nome");
  const descricao = document.getElementById("descricao");
  const preco = document.getElementById("preco");
  const categoria = document.getElementById("categoria");

  let valido = true;

  if (nome.value.trim() === "") {
    mostrarErro(nome, "O nome é obrigatório");
    valido = false;
  }
  if (descricao.value.trim() === "") {
    mostrarErro(descricao, "A descrição é obrigatória");
    valido = false;
  }
  if (isNaN(parseFloat(preco.value)) || parseFloat(preco.value) <= 0) {
    mostrarErro(preco, "Informe um preço válido maior que zero");
    valido = false;
  }
  if (categoria.value === "") {
    mostrarErro(categoria, "Selecione uma categoria");
    valido = false;
  }

  if (!valido) {
    resultado.hidden = true;
    return;
  }

  const precoNum = parseFloat(preco.value);
  const categoriaTexto = categoria.options[categoria.selectedIndex].text;

  document.getElementById("res-nome").textContent = nome.value;
  document.getElementById("res-descricao").textContent = descricao.value;
  document.getElementById("res-preco").textContent = precoNum.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  );
  document.getElementById("res-categoria").textContent = categoriaTexto;

  resultado.hidden = false;

  nome.value = "";
  descricao.value = "";
  preco.value = "";
  categoria.selectedIndex = 0;
});

/* === THEME SWITCHER === */
const temaSalvo = localStorage.getItem("tema") || "mocha";
document.documentElement.setAttribute("data-tema", temaSalvo);

document.querySelectorAll(".theme-btn").forEach((btn) => {
  if (btn.dataset.tema === temaSalvo) btn.classList.add("active");

  btn.addEventListener("click", function () {
    document.querySelectorAll(".theme-btn").forEach((b) =>
      b.classList.remove("active")
    );
    this.classList.add("active");

    const tema = this.dataset.tema;
    document.documentElement.setAttribute("data-tema", tema);
    localStorage.setItem("tema", tema);
  });
});
