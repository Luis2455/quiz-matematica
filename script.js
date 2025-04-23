const quiz = [
  {
    pergunta: "1. Um carro percorre 150 km com 10 litros de gasolina. Qual é o consumo em km/l?",
    opcoes: ["10 km/l", "15 km/l", "20 km/l", "12 km/l"],
    correta: 1,
    resolucao: "150 ÷ 10 = 15 km/l."
  },
  {
    pergunta: "2. Qual é o valor de x na equação 2x + 3 = 11?",
    opcoes: ["3", "4", "5", "6"],
    correta: 1,
    resolucao: "2x + 3 = 11 → 2x = 8 → x = 4."
  },
  {
    pergunta: "3. Qual é a área de um círculo de raio 3 cm? (Use π ≈ 3,14)",
    opcoes: ["28,26 cm²", "18,84 cm²", "9,42 cm²", "12,56 cm²"],
    correta: 0,
    resolucao: "A = πr² = 3,14 × 3² = 3,14 × 9 = 28,26 cm²."
  },
  {
    pergunta: "4. Qual a média dos números 7, 8, 9 e 6?",
    opcoes: ["7", "7,5", "8", "6,5"],
    correta: 1,
    resolucao: "(7 + 8 + 9 + 6) ÷ 4 = 30 ÷ 4 = 7,5"
  },
  {
    pergunta: "5. Qual é o resultado de 2³ + 4²?",
    opcoes: ["20", "24", "28", "16"],
    correta: 2,
    resolucao: "2³ = 8 e 4² = 16 → 8 + 16 = 24."
  },
  {
    pergunta: "6. Um produto de R$200,00 foi vendido com 25% de desconto. Qual foi o preço final?",
    opcoes: ["R$150,00", "R$160,00", "R$175,00", "R$180,00"],
    correta: 3,
    resolucao: "25% de 200 = 50 → 200 - 50 = 150."
  },
  {
    pergunta: "7. Qual é o mínimo múltiplo comum (MMC) entre 6 e 8?",
    opcoes: ["24", "12", "48", "16"],
    correta: 0,
    resolucao: "MMC entre 6 e 8 = 24 (múltiplo comum mais baixo)."
  },
  {
    pergunta: "8. Qual é a raiz quadrada de 121?",
    opcoes: ["10", "11", "12", "13"],
    correta: 1,
    resolucao: "√121 = 11."
  }
];

let indiceAtual = 0;
let tempoEspera = 5000; // 5 segundos

function carregarPergunta() {
  if (indiceAtual >= quiz.length) {
    mostrarFimDoQuiz();
    return;
  }

  const q = quiz[indiceAtual];
  const container = document.getElementById("quiz-container");

  container.innerHTML = `
    <h2>${q.pergunta}</h2>
    ${q.opcoes.map((opcao, i) => `<button onclick="verificarResposta(${i})">${opcao}</button>`).join('')}
    <div class="resolucao" id="resolucao" style="display:none;"></div>
  `;
}

function verificarResposta(i) {
  const q = quiz[indiceAtual];
  const resolucao = document.getElementById("resolucao");

  const botoes = document.querySelectorAll("button");

  botoes.forEach((btn, index) => {
    btn.disabled = true;
    if (index === q.correta) {
      btn.classList.add("correto");
    } else if (index === i) {
      btn.classList.add("errado");
    }
  });

  if (i === q.correta) {
    resolucao.innerHTML = `<strong>Correto!</strong> ${q.resolucao}`;
  } else {
    resolucao.innerHTML = `<strong>Errado!</strong> ${q.resolucao}`;
  }

  resolucao.style.display = "block";

  setTimeout(() => {
    indiceAtual++;
    carregarPergunta();
  }, tempoEspera);
}

function mostrarFimDoQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <h2>Você terminou o quiz!</h2>
    <button id="reiniciar" onclick="reiniciarQuiz()">Reiniciar</button>
  `;
}

function reiniciarQuiz() {
  indiceAtual = 0;
  carregarPergunta();
}

carregarPergunta(); // Inicia o quiz automaticamente
