// ============================================================
// 🎯 TODO 7: fetch GET — carregarFilmes(genero)
// Chamar /api/filmes?genero=... → exibirFilmes(json.dados)
// ============================================================
async function carregarFilmes(genero = 'todos') {
  // TODO: implementar fetch GET
}

// ============================================================
// 🎯 TODO 8: Exibir filmes no DOM
// document.getElementById("lista").innerHTML = filmes.map(...)
// ============================================================
function exibirFilmes(filmes) {
  // TODO: gerar HTML com template literals
}
function exibirTotal(total) {
  document.getElementById("total").textContent = total;
}

// ============================================================
// 🎯 TODO 9: fetch POST — criarFilme(event)
// event.preventDefault() + method POST + headers + body
// ============================================================
async function criarFilme(event) {
  event.preventDefault();
  // TODO: implementar fetch POST
}

// ============================================================
// 🎯 TODO 10: fetch DELETE — deletar(id)
// ============================================================
async function deletar(id) {
  // TODO: implementar fetch DELETE
}

// ============================================================
// 🎯 TODO 11: filtrar por gênero
// ============================================================
function filtrar() {
  const genero = document.getElementById("filtro-genero").value;
  carregarFilmes(genero);
}

// Carregar ao abrir
carregarFilmes();
