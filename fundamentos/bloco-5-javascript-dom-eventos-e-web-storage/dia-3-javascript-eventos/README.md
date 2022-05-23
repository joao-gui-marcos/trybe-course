# DIA 5

## Aprendizados do dia:
* Mudar o conteúdo, estilo e outros atributos de elementos HTML a partir de eventos do JavaScript;
* Aplicar no seu código JavaScript eventos de click e change, entre outros.

## Exercícios Parte 1(index):
1. Copie esse arquivo e edite apenas ele; Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
2. Crie uma função que adicione a classe 'tech' ao elemento li quando for clicado. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página; Que tal redirecionar para seu portfólio?
5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

## Exercícios Parte 2(index2):
1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag ul com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag li, e todos devem ter a classe day.
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday.
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday.
2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday".
Adicione este botão como filho/filha da tag div com classe "buttons-container".
3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday".
Adicione este botão como filho/filha da tag div com classe "buttons-container".
5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
7. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag span contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag div que possui a classe "my-tasks".
8. Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag div com a classe task.
O parâmetro cor deverá ser utilizado como cor de fundo da div criada.
O elemento criado deverá ser adicionado como filho/filha da tag div que possui a classe "my-tasks".

