let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 20;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

///Questoes
const questions = [
    {
      question: "Qual é a soma de 5 + 7?",
      options: ["11", "12", "13", "14"],
      answer: 2
    },
    {
      question: "Qual é o resultado de 9 x 6?",
      options: ["48", "54", "56", "63"],
      answer: 1
    },
    {
      question: "Qual é o valor de X na equação 3x + 5 = 14?",
      options: ["3", "4", "5", "6"],
      answer: 3  },
      {

      question: "Quanto é 1/2 + 1/4?",
      options: [" 1/4", "1/2", "3/4", " 1"],
      answer: 2  },
      {

      question: "Qual é a raiz quadrada de 25?",
      options: ["3", "4", "5", " 6"],
      answer: 3  },
      {
      question: "Quanto é o dobro de 7 menos 3?",
      options: ["8", "10", "11", "12"],
      answer: 2  },

      {
        question: "Qual é o valor de y na equação 2y - 6 = 10?",
        options: ["4", "5", "6", "7"],
        answer: 1  },
        {
            question: "Quanto é 3/5 como porcentagem?",
            options: ["20%", "40%", "60%", "75%"],
            answer: 2  },
            {
                question: "Qual é o número que, somado com 8, resulta em 15?",
                options: ["4", "5", "6", "7"],
                answer: 3  },
      
        {
            question: "Se um retângulo tem comprimento 12 e largura 6, qual é a sua área?",
            options: [" 12 ", "36", "72", "144"],
            answer: 2  }

  ];

  shuffleArray(questions);


  
  // Função para exibir a próxima questão do quiz
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
  
    // Limpa o resultado da pergunta anterior
    resultElement.textContent = "";
  
    if (currentQuestion < questions.length) {
      const question = questions[currentQuestion];
      questionElement.textContent = question.question;
  
      // Limpa as opções anteriores
      optionsElement.innerHTML = "";
  
      // Adiciona as opções como botões
      for (let i = 0; i < question.options.length; i++) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = question.options[i];
        button.setAttribute("onclick", "checkAnswer(" + i + ")");
        li.appendChild(button);
        optionsElement.appendChild(li);
      }
    } else {
      // Fim do quiz
      questionElement.textContent = "Fim do Quiz!";
      optionsElement.innerHTML = "";
      resultElement.textContent = "Você acertou " + score + " de " + questions.length + " perguntas.";
    }
  }
  
  // Função para verificar a resposta selecionada

    
    function checkAnswerTimer() {
      clearInterval(timer);
      checkAnswer(null); // Verificar resposta, passando null para indicar que o tempo acabou
    
      // Reinicia o temporizador para a próxima pergunta
      timeLeft = 20;
    
      // Verifica se todas as perguntas foram respondidas
      if (currentQuestion < questions.length) {
        // Exibe a próxima pergunta
        displayQuestion();
        // Inicia o temporizador para a próxima pergunta
        startTimer();
      } else {
        // Fim do quiz, exibe o resultado final ou qualquer ação desejada
        showQuizResult();
      }
    }
    
    function startTimer() {
      // Verifica se já chegou ao final do quiz
      if (currentQuestion >= questions.length) {
        // Se sim, para o temporizador
        clearInterval(timer);
        return;
      }
    
      document.getElementById("time").textContent = timeLeft;
      timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft === 0) {
          checkAnswerTimer();
        }
      }, 900);
    }
    
    function showQuizResult() {
      const resultElement = document.getElementById("result");
      resultElement.textContent = "Você acertou " + score + " de " + questions.length + " perguntas.";
      // Aqui você pode fazer qualquer ação desejada ao finalizar o quiz
    }
    
  displayQuestion();
      startTimer();
        function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
  
    if (selectedOption === question.answer) {
      score++;
      document.getElementById("result").textContent = "Resposta correta!";
    } else {
      document.getElementById("result").textContent = "Resposta incorreta!";
    }


    // Avança para a próxima pergunta
    currentQuestion++;
  }
  
  // Inicia o quiz
  displayQuestion();
      startTimer();