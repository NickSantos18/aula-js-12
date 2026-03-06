const dadosPersonagens = [
    { nome: "Pug", titulo: "Mago do Caminho Maior", imagem: "Pug.png", desc: "O jovem aprendiz de Crydee que atravessou a fenda e dominou uma magia desconhecida.", extra: "Codinome: Milamber" },
    { nome: "Tomas", titulo: "Príncipe de Ashen-Shugar", imagem: "Tomas.png", desc: "Encontrou uma armadura antiga e herdou memórias e poderes dos Valheru.", extra: "Herança: Poder dos Dracos" },
    { nome: "Arutha", titulo: "Príncipe de Krondor", imagem: "Arutha.png", desc: "Mestre esgrimista e estrategista brilhante na defesa do Reino.", extra: "Arma: Rapieira" },
    { nome: "Kulgan", titulo: "Mestre do Caminho Menor", imagem: "Kulgan.png", desc: "Mago da corte de Crydee que reconheceu o potencial de Pug.", extra: "Foco: Magia Elemental" },
    { nome: "Duque Borric", titulo: "Senhor de Crydee", imagem: "Duque Borric.png", desc: "Líder que primeiro enfrentou a invasão Tsurani.", extra: "Linhagem: Casa Conroy" },
    { nome: "Carline", titulo: "Princesa de Crydee", imagem: "Carline.png", desc: "Irmã de Arutha, cujo destino se entrelaça com o de Pug.", extra: "Status: Nobreza" }
];

function configurarRunas() {
    const runas = document.querySelectorAll(".circulo span");
    runas.forEach((letra, i) => {
        let angulo = (360 / runas.length) * i;
        letra.style.transform = `rotate(${angulo}deg) translate(120px) rotate(-${angulo}deg)`;
    });
}
document.getElementById("loading").onclick = () => {
    const loadingScreen = document.getElementById("loading");
    const runas = document.querySelectorAll(".circulo span");

    // Efeito de Dispersão das Runas
    runas.forEach((letra) => {
        // Gera valores aleatórios para x, y e rotação
        const randomX = (Math.random() - 0.5) * 2000; // Move para longe no eixo X
        const randomY = (Math.random() - 0.5) * 2000; // Move para longe no eixo Y
        const randomRot = Math.random() * 720;        // Gira loucamente

        letra.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        letra.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRot}deg)`;
        letra.style.opacity = "0";
    });

    // Esconde a tela de loading após a animação
    loadingScreen.style.transition = "opacity 0.8s ease";
    loadingScreen.style.opacity = "0";

    setTimeout(() => {
        loadingScreen.style.display = "none";
        document.getElementById("conteudo").style.display = "flex";
        document.getElementById("btn-menu").style.display = "block";
        document.body.style.overflow = "auto";
        abrirSecao('home');
    }, 800); // Tempo ajustado para esperar a dispersão
};

function toggleMenu() {
    const menu = document.getElementById("menu-principal");
    const btn = document.getElementById("btn-menu");
    menu.classList.toggle("active");
    btn.innerHTML = menu.classList.contains("active") ? "Fechar &times;" : "Menu ⏷";
}

function abrirSecao(tipo) {
    document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active-section'));
    const alvo = document.getElementById(`secao-${tipo}`);
    if (alvo) alvo.classList.add('active-section');
    if (tipo === 'personagens') renderizarPersonagens();
    
    const menu = document.getElementById("menu-principal");
    if (menu.classList.contains("active")) toggleMenu();
    document.getElementById("conteudo").scrollTo({ top: 0, behavior: 'smooth' });
}

function renderizarPersonagens() {
    const grid = document.getElementById("grid-personagens");
    if (!grid || grid.children.length > 0) return;
    dadosPersonagens.forEach(p => {
        grid.innerHTML += `
            <div class="card-personagem">
                <div class="moldura-foto">
                    <img src="${p.imagem}" onerror="this.src='https://via.placeholder.com/300x200/200000/ffffff?text=${p.nome}'">
                </div>
                <div style="padding: 20px;">
                    <h3 style="color: white;">${p.nome}</h3>
                    <h4 style="color: #ff7d7d; font-size: 0.8rem; margin-bottom: 10px;">${p.titulo}</h4>
                    <p style="font-size: 0.85rem; color: #ccc;">${p.desc}</p>
                    <div style="margin-top:15px; border-top:1px solid #300; padding-top:10px; font-size:0.7rem; color:red;">${p.extra}</div>
                </div>
            </div>`;
    });
}

configurarRunas();



document.addEventListener("mousemove", (e) => {
    criarRastro(e.pageX, e.pageY);
});


// Localize ou crie o conteúdo da secao-home no seu HTML
const secaoHome = document.getElementById("secao-home");

if (secaoHome) {
    secaoHome.innerHTML = `
        <div class="janela-exibicao">
            <div class="container-imagem">
                <img src="img2.jpg" alt="Capa Crônicas da Fenda" onerror="this.src='https://via.placeholder.com/220x320/200000/ff0000?text=Mago+Aprendiz'">
            </div>
            <div class="info-texto">
                <h2 class="titulo-magico">Crônicas da Fenda</h2>
                <p style="font-style: italic; color: #ff7d7d; margin-bottom: 20px;">
                    "Entre dois mundos, uma guerra. Entre dois destinos, um herói."
                </p>
                <p style="line-height: 1.8; color: #ccc;">
                    Em <strong>Mago: Aprendiz</strong>, de Raymond E. Feist, somos transportados para o Reino das Ilhas.
                    O órfão Pug inicia sua jornada como aprendiz do mestre Kulgan, 
                    enquanto uma ameaça vinda de outro mundo surge através de fendas espaciais.
                </p>
                <button onclick="abrirSecao('personagens')" style="margin-top: 20px; background: none; border: 1px solid red; color: white; padding: 10px 20px; cursor: pointer; font-family: 'Cinzel'; transition: 0.3s;" onmouseover="this.style.background='red'" onmouseout="this.style.background='none'">
                    Conhecer os Heróis
                </button>
            </div>
        </div>
    `;
}
// Ordem das páginas para o botão "Próximo"
const ordemSecoes = ['home', 'personagens', 'historia', 'magias'];

function abrirSecao(tipo) {
    document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active-section'));
    const alvo = document.getElementById(`secao-${tipo}`);
    if (alvo) alvo.classList.add('active-section');
    
    // Lógica do botão Próximo
    const btnProximo = document.getElementById("btn-proximo");
    if (tipo === 'home') {
        btnProximo.style.display = "none";
    } else {
        btnProximo.style.display = "block";
    }

    if (tipo === 'personagens') renderizarPersonagens();
    
    const menu = document.getElementById("menu-principal");
    if (menu.classList.contains("active")) toggleMenu();
    document.getElementById("conteudo").scrollTo({ top: 0, behavior: 'smooth' });
}

function proximaSecao() {
    // Descobre qual seção está ativa no momento
    const secaoAtiva = document.querySelector('.section-content.active-section');
    const idAtual = secaoAtiva.id.replace('secao-', '');
    
    // Encontra o índice da próxima seção
    let proximoIndice = ordemSecoes.indexOf(idAtual) + 1;
    
    // Se chegar ao fim, volta para a primeira (ou pode esconder o botão)
    if (proximoIndice >= ordemSecoes.length) {
        proximoIndice = 0; 
    }
    
    abrirSecao(ordemSecoes[proximoIndice]);
}
const cursor = document.getElementById('cursor-magico');

document.addEventListener('mousemove', (e) => {
    // 1. Move a varinha (centro da imagem no mouse)
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // 2. Cálculo para a ponta da varinha:
    // Se sua varinha aponta para cima e para a direita, 
    // somamos uns 15px no X e subtraímos uns 15px no Y.
    const pontaX = e.clientX + 15; 
    const pontaY = e.clientY - 15;

    criarParticula(pontaX, pontaY);
});

function criarParticula(x, y) {
    const particula = document.createElement('div');
    particula.className = 'particula-magica';
    
    // Posicionamento com pequena variação aleatória para parecer faíscas reais
    const variacaoX = (Math.random() - 0.5) * 10;
    const variacaoY = (Math.random() - 0.5) * 10;

    particula.style.left = (x + variacaoX) + 'px';
    particula.style.top = (y + variacaoY) + 'px';
    
    const tamanho = Math.random() * 6 + 2 + 'px';
    particula.style.width = tamanho;
    particula.style.height = tamanho;

    document.body.appendChild(particula);

    setTimeout(() => {
        particula.remove();
    }, 800);
}

// Efeito de clique atualizado para manter a centralização
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8) rotate(-15deg)';
});
document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
});