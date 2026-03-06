🔮 Mago: Midkemia - Experiência Interativa
Este repositório contém os arquivos de um site single-page (SPA) interativo. O design é focado na imersão do usuário, apresentando elementos visuais como runas mágicas, efeitos de neblina, um cursor personalizado em formato de varinha e animações de transição que simulam portais dimensionais.

📄 Arquivos do Projeto
1. index.html
O esqueleto do projeto. Ele estrutura as diferentes seções da jornada:

Portal de Entrada (Loading): Uma tela inicial com um vórtice e runas circulares.

Seção Home: Apresentação da obra e do autor.

Personagens: Um grid dinâmico para exibição dos heróis.

Mapa: Visualização do Reino das Ilhas (Midkemia).

História: Um layout estilo pergaminho detalhando a Guerra da Fenda.

Magias (Grimório): Comparativo entre o "Caminho Menor" e o "Caminho Maior".

2. style.css
Responsável pela atmosfera visual "Dark Fantasy". Destaques técnicos:

Animações de Neblina: Camadas de imagens (.fog-layer) com diferentes velocidades e opacidades para criar profundidade.

Filtros SVG: Uso de feTurbulence para criar um efeito de fumaça orgânica no fundo.

Estilização de Componentes: Cards com efeito glassmorphism, botões com brilho pulsante e tipografia medieval (Cinzel).

Cursor Mágico: Substituição do cursor padrão por uma varinha que solta partículas de luz.

3. script.js
A lógica de interatividade e dinamismo:

Sistema de Runas: Posiciona matematicamente as runas em círculo usando funções trigonométricas (através de rotate e translate).

Efeito de Dispersão: Ao clicar para entrar, as runas se espalham aleatoriamente pela tela antes de desaparecerem.

Renderização Dinâmica: Os dados dos personagens são injetados no HTML a partir de um array de objetos, facilitando a manutenção.

Navegação: Funções para alternar entre as seções, controlar o menu e gerenciar o botão de "Próxima Fase".

Sistema de Partículas: Gera pequenas "faíscas" mágicas na ponta da varinha seguindo o movimento do mouse.

🛠️ Tecnologias Utilizadas
HTML5: Estrutura semântica.

CSS3: Animações @keyframes, Flexbox, Grid e manipulação de filtros.

JavaScript (ES6+): Manipulação de DOM, eventos de mouse e lógica de transição.

🚀 Como Executar
Certifique-se de que todos os três arquivos (index.html, style.css, script.js) estejam na mesma pasta.

Para visualizar as imagens corretamente, garanta que os arquivos locais (varinha.png, img2.jpg, mapa.jpg, etc.) estejam presentes ou o navegador carregará os placeholders automáticos definidos no código.

Abra o arquivo index.html em qualquer navegador moderno.

🖋️ Notas de Design
O projeto utiliza um sistema de "Cursor Mágico" onde a ponta da varinha gera partículas. No CSS, o comando cursor: none !important; é aplicado a todos os elementos para garantir que o ponteiro padrão do sistema não quebre a imersão.
