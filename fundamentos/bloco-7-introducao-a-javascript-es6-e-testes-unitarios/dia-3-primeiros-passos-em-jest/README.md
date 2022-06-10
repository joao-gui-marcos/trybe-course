# DIA 3

## Aprendizados do dia:
* Entender o que são e para que servem testes unitários;
* Aplicar o conceito de TDD, ou seja, o desenvolvimento orientado a testes;
* Criar testes unitários a partir do framework Jest.

## Exercícios:

### Parte 1:
1. A função sum(a, b) retorna a soma do parâmetro a com o b:
  * Teste se o retorno de sum(4, 5) é 9
  * Teste se o retorno de sum(0, 0) é 0
  * Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
  * Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

### Parte 2:
2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
  * Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  * Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  * Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

### Parte 3:
3. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
  * Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  * Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  * Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  * Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  * Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

### Parte 4:
4. A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto
5. A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. 

