var grid = document.getElementById("grid");
var campoBusca = document.getElementById("campoBusca");
var contador = document.getElementById("contador");

// transforma "1979-08-27" em "27/08/1979"
function formatarData(data) {
  var partes = data.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

// desenha os cards na tela a partir de uma lista de atores
function mostrarAtores(lista) {
  if (lista.length === 0) {
    grid.innerHTML = "<p class='vazio'>Nenhum ator ou atriz encontrado.</p>";
    contador.textContent = "0 resultados";
    return;
  }

  grid.innerHTML = lista.map(function (ator) {
    return `
      <div class="card">
        <img src="${ator.foto}" alt="Foto de ${ator.nome}">
        <h2>${ator.nome}</h2>
        <p>País: ${ator.pais}</p>
        <p>Nascimento: ${formatarData(ator.nascimento)}</p>
      </div>
    `;
  }).join("");

  contador.textContent = lista.length + " de " + atores.length + " resultados";
}

// chamada a cada letra digitada (oninput)
function filtrarAtores() {
  var texto = campoBusca.value.trim().toLowerCase();

  var filtrados = atores.filter(function (ator) {
    return ator.nome.toLowerCase().includes(texto);
  });

  mostrarAtores(filtrados);
}

// ao abrir a página, mostra todos
mostrarAtores(atores);
