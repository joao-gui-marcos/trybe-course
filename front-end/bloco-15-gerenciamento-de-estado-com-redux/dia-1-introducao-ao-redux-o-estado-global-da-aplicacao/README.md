# DIA 1

## Aprendizados do dia:
* Criar uma Store para armazenar o estado de uma aplicação.
* Utilizar Reducers e Actions para atualizar a Store

## Exercícios:
### Parte 1:
Vamos construir um estado gerenciado pelo Redux e vamos realizar algumas modificações nele. O nosso objetivo será manipular a cor de um container através do Redux.
1. Crie uma store para a nossa aplicação.
2. Crie um reducer, implementando um switch retornando apenas o estado inicial como default. Não se esqueça de colocar o reducer como parâmetro para o createStore, feito na etapa anterior.
3. Incremente o switch criado no exercício anterior com os cases NEXT_COLOR e PREVIOUS_COLOR. Essas actions devem alterar o valor index guardado no INITIAL_STATE. Atente-se aos limites de tamanho do array, as posições devem iniciar em 0 e não podem exceder a numeração do último item do array.
4. Crie eventListeners que escutam os cliques de cada botão, o Previous color e o Next color, e realizam um dispatch com as respectivas actions.
5. Faça o subscribe da store, alterando o innerHTML da tag com id value para a cor atual e o style do elemento com id container. Você deverá ser capaz de ver as cores mudando ao fundo, e o nome da cor exibida.
6. Crie um botão com o texto Random color, um eventListener e uma action no reducer adicionando uma cor aleatória ao array colors guardado em nosso estado inicial. Faça também com que essa cor seja mostrada ao ser criada, alterando o estado index para a posição dela.