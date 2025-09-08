// Lista de exercícios
const exercicios = [
  "Gire os ombros lentamente para trás por 30 segundos.",
  "Alongue os braços para cima e respire fundo 5 vezes.",
  "Toque os pés mantendo as pernas retas por 20 segundos.",
  "Gire o tronco para os lados suavemente por 30 segundos.",
  "Alongue os músculos das costas puxando os braços para frente por 30 segundos.",
  "Alongue os músculos das pernas, puxando os pés em direção ao corpo por 30 segundos.",
  "Alongue os músculos do quadril, puxando a perna em direção ao peito por 30 segundos.",
  "Alongue os músculos da panturrilha, empurrando o calcanhar para baixo enquanto flexiona o joelho por 30 segundos.",
  "Alongue os músculos do tornozelo, fazendo movimentos circulares com o pé por 30 segundos.",
  "Alongue os músculos do punho, estendendo a mão para frente e puxando os dedos com a outra mão por 30 segundos.",
  "Alongue os músculos da mandíbula, abrindo e fechando a boca lentamente por 30 segundos.",
  "Alongue os músculos do rosto, fazendo expressões faciais exageradas por 30 segundos.",
  "Alongue os músculos das mãos, abrindo e fechando as mãos lentamente por 30 segundos.",
  "Alongue o pescoço para os lados suavemente por 15 segundos cada.",

  '<img src="img/ombro1.jpg" alt="Alongamento de ombros" style="height:400px;vertical-align:middle;margin-right:80px;">Gire os ombros lentamente para trás por 30 segundos.',
  '<img src="img/braco16.jpg" alt="Alongamento de braços" style="height:400px;vertical-align:middle;margin-right:80px;">Alongue os braços para cima e respire fundo 5 vezes.',
  '<img src="img/pe19.jpg" alt="Alongamento do pés" style="height:400px;vertical-align:middle;margin-right:80px;">Toque os pés mantendo as pernas retas por 20 segundos.',
  '<img src="img/foto6.png" alt="Alongamento de tronco" style="height:400px;vertical-align:middle;margin-right:80px;">Gire o tronco para os lados suavemente por 30 segundos.',
  '<img src="img/foto7.png" alt="Alongamento de costas" style="height:400px;vertical-align:middle;margin-right:80px;">Alongue os músculos das costas puxando os braços para frente por 30 segundos.',
  '<img src="img/perna14.jpg" alt="Alongamento de pernas" style="height:400px;vertical-align:middle;margin-right:80px;">Alongue os músculos das pernas, puxando os pés em direção ao corpo por 30 segundos.',
  '<img src="img/foto9.jpg" alt="Alongamento de quadril" style="height:400px;vertical-align:middle;margin-right:80px;">Alongue os músculos do quadril, puxando a perna em direção ao peito por 30 segundos.',
  '<img src="img/foto10.jpg" alt="Alongamento de panturrilha" style="height:400px;vertical-align:middle;margin-right:80px;">Alongue os músculos da panturrilha, empurrando o calcanhar para baixo enquanto flexiona o joelho por 30 segundos.',
  '<img src="img/foto11.jpg" alt="Alongamento de tornozelo" style="height:400px;vertical-align:middle;margin-right:80px;">Alongue os músculos do tornozelo, fazendo movimentos circulares com o pé por 30 segundos.',
  '<img src="img/foto12.jpg" alt="Alongamento de punho" style="height:400px;vertical-align:middle;margin-right:80px;">Alongue os músculos do punho, estendendo a mão para frente e puxando os dedos com a outra mão por 30 segundos.',
  '<img src="img/foto3.jpg" alt="Alongamento de mandíbula" style="height:400px;vertical-align:middle;margin-right:80px;">Alongue os músculos da mandíbula, abrindo e fechando a boca lentamente por 30 segundos.',
  '<img src="img/foto5.png" alt="Alongamento de rosto" style="height:400px;vertical-align:middle;margin-right:80px;">Alongue os músculos do rosto, fazendo expressões faciais exageradas por 30 segundos.',
  '<img src="img/maos17.jpg" alt="Alongamento de mãos" style="height:400px;vertical-align:middle;margin-right:80px;">Alongue os músculos das mãos, abrindo e fechando as mãos lentamente por 30 segundos.',
  '<img src="img/foto2.jpg" alt="Alongamento de pescoço" style="height:400px;vertical-align:middle;margin-right:80px;">Alongue o pescoço para os lados suavemente por 15 segundos cada.',




];


// Função para sortear exercício
function mostrarExercicio() {
  const sorteado = exercicios[Math.floor(Math.random() * exercicios.length)];
  document.getElementById("exercicioAtual").innerHTML = sorteado;
}

// Botão de lembrete
document.getElementById("reminderBtn").addEventListener("click", () => {
  alert("Lembretes ativados! Você receberá notificações a cada 2 horas.");
  setInterval(() => {
    alert("🚀 Hora de alongar com o futuro!");
  }, 7200000); // 2 horas
});

// Botão começar
document.getElementById("startBtn").addEventListener("click", () => {
  mostrarExercicio();
});
