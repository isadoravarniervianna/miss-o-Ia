(function() {
  "use strict";

  // ------------------------------------------------
  // 1. LISTA DE OBJETOS (ferramentas de IA)
  // ------------------------------------------------
  let iaTools = [
    { id: 1, name: "ChatGPT", category: "Texto" },
    { id: 2, name: "DALL·E", category: "Imagem" },
    { id: 3, name: "Copilot", category: "Código" },
    { id: 4, name: "Midjourney", category: "Arte" },
    { id: 5, name: "Claude", category: "Análise" }
  ];

  // referências DOM
  const toolListEl = document.getElementById('iaToolList');
  const toolCounter = document.getElementById('toolCounter');
  const totalToolsDisplay = document.getElementById('totalToolsDisplay');
  const reflectionMsg = document.getElementById('reflectionMessage');
  const domFeedback = document.getElementById('domFeedback');

  // ------------------------------------------------
  // 2. FUNÇÕES (dividir problemas grandes em menores)
  // ------------------------------------------------

  // Função para renderizar a lista (DOM)
  function renderToolList() {
    toolListEl.innerHTML = '';

    if (iaTools.length === 0) {
      const emptyItem = document.createElement('li');
      emptyItem.textContent = '🧪 Nenhuma ferramenta no momento';
      emptyItem.style.justifyContent = 'center';
      emptyItem.style.borderLeftColor = '#5a6f96';
      emptyItem.style.background = 'rgba(20,30,50,0.4)';
      toolListEl.appendChild(emptyItem);
    } else {
      iaTools.forEach(tool => {
        const li = document.createElement('li');
        const nameSpan = document.createElement('span');
        nameSpan.textContent = tool.name;
        const catSpan = document.createElement('span');
        catSpan.className = 'tool-category';
        catSpan.textContent = tool.category;
        li.appendChild(nameSpan);
        li.appendChild(catSpan);
        li.dataset.id = tool.id;
        toolListEl.appendChild(li);
      });
    }

    const count = iaTools.length;
    toolCounter.textContent = count;
    totalToolsDisplay.textContent = `${count} ferramenta${count !== 1 ? 's' : ''}`;
  }

  // Função para adicionar ferramenta (com dados dinâmicos)
  function addTool() {
    const newId = iaTools.length > 0 ? Math.max(...iaTools.map(t => t.id)) + 1 : 1;
    const categories = ['Texto', 'Imagem', 'Código', 'Arte', 'Áudio', 'Análise', 'Planejamento'];
    const randomCat = categories[Math.floor(Math.random() * categories.length)];
    const names = ['Perplexity', 'Gemini', 'Runway', 'Pika', 'ElevenLabs', 'Synthesia', 'Bard', 'Jasper'];
    const randomName = names[Math.floor(Math.random() * names.length)] + (iaTools.length % 3 === 0 ? ' AI' : '');

    const newTool = {
      id: newId,
      name: randomName,
      category: randomCat
    };
    iaTools.push(newTool);
    renderToolList();
    domFeedback.textContent = `➕ ${newTool.name} adicionada`;
    domFeedback.style.color = '#8bb2ff';
    setTimeout(() => { domFeedback.textContent = 'pronto'; domFeedback.style.color = ''; }, 1800);
  }

  // Função para resetar para a lista inicial
  function resetTools() {
    iaTools = [
      { id: 1, name: "ChatGPT", category: "Texto" },
      { id: 2, name: "DALL·E", category: "Imagem" },
      { id: 3, name: "Copilot", category: "Código" },
      { id: 4, name: "Midjourney", category: "Arte" },
      { id: 5, name: "Claude", category: "Análise" }
    ];
    renderToolList();
    domFeedback.textContent = '↺ Lista restaurada';
    domFeedback.style.color = '#b0caff';
    setTimeout(() => { domFeedback.textContent = 'pronto'; domFeedback.style.color = ''; }, 1500);
  }

  // ------------------------------------------------
  // 3. REFLEXÃO SOBRE IA (mensagens)
  // ------------------------------------------------
  const reflectionPool = [
    "🧠 A IA me ajuda a resumir textos longos e economizar tempo.",
    "📊 Uso IA para analisar dados e encontrar padrões rapidamente.",
    "🎨 Ferramentas de geração de imagem expandem minha criatividade.",
    "📝 No dia a dia, a IA revisa minha escrita e sugere melhorias.",
    "💻 Com o Copilot, programo mais rápido e com menos erros.",
    "🗣️ Assistentes de voz facilitam tarefas enquanto estou ocupado.",
    "📚 A IA personaliza recomendações de estudo e conteúdo.",
    "🧩 Uso IA para tradução e comunicação em outros idiomas.",
    "⚡ Automação com IA reduz tarefas repetitivas no trabalho.",
    "🧘 A IA me ajuda a organizar minha agenda e prioridades."
  ];

  // Função para gerar reflexão aleatória
  function generateReflection() {
    const randomIndex = Math.floor(Math.random() * reflectionPool.length);
    const message = reflectionPool[randomIndex];
    reflectionMsg.textContent = message;
    domFeedback.textContent = '💭 reflexão gerada';
    domFeedback.style.color = '#aaccff';
    setTimeout(() => { domFeedback.textContent = 'pronto'; domFeedback.style.color = ''; }, 1500);
  }

  function clearReflection() {
    reflectionMsg.textContent = '💡 Clique em "Gerar reflexão" para pensar como a IA ajuda no dia a dia.';
    domFeedback.textContent = '🗑️ limpo';
    domFeedback.style.color = '#8899bb';
    setTimeout(() => { domFeedback.textContent = 'pronto'; domFeedback.style.color = ''; }, 1200);
  }

  // ------------------------------------------------
  // 4. MANIPULAÇÃO DOM (métodos adicionais)
  // ------------------------------------------------
  function applyDomManipulation() {
    const firstLi = document.querySelector('#iaToolList li');
    if (firstLi) {
      firstLi.style.transition = '0.3s';
      firstLi.style.background = 'rgba(60, 100, 200, 0.25)';
      firstLi.style.borderLeftColor = '#ffbb66';
      firstLi.style.transform = 'scale(1.02)';
      setTimeout(() => {
        firstLi.style.background = '';
        firstLi.style.borderLeftColor = '';
        firstLi.style.transform = '';
      }, 1200);
      domFeedback.textContent = '🎯 destaque aplicado ao primeiro item';
    } else {
      domFeedback.textContent = '⚠️ lista vazia, adicione ferramentas';
    }
    domFeedback.style.color = '#f0c080';
    setTimeout(() => { domFeedback.textContent = 'pronto'; domFeedback.style.color = ''; }, 1800);

    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
      subtitle.style.transition = '0.3s';
      subtitle.style.borderLeftColor = '#ffbb66';
      subtitle.style.paddingLeft = '1.4rem';
      setTimeout(() => {
        subtitle.style.borderLeftColor = '#3f7eff';
        subtitle.style.paddingLeft = '1rem';
      }, 1400);
    }
  }

  // ------------------------------------------------
  // 5. INICIALIZAÇÃO E EVENTOS
  // ------------------------------------------------
  function init() {
    renderToolList();

    document.getElementById('addToolBtn').addEventListener('click', addTool);
    document.getElementById('resetToolsBtn').addEventListener('click', resetTools);
    document.getElementById('generateReflectionBtn').addEventListener('click', generateReflection);
    document.getElementById('clearReflectionBtn').addEventListener('click', clearReflection);
    document.getElementById('domManipulateBtn').addEventListener('click', applyDomManipulation);

    toolListEl.addEventListener('dblclick', function(e) {
      const li = e.target.closest('li');
      if (li) {
        const toolName = li.querySelector('span')?.textContent || 'ferramenta';
        reflectionMsg.textContent = `🔍 Refletindo sobre "${toolName}": como essa IA impacta minhas tarefas?`;
        domFeedback.textContent = `🔍 ${toolName}`;
        setTimeout(() => { domFeedback.textContent = 'pronto'; }, 1500);
      }
    });
  }

  init();
})();