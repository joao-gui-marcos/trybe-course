# DIA 2

## Aprendizados do dia:
* Criar imagens do zero no Docker;
* Criar imagens Docker usando outras imagens como base;
* Aplicar boas práticas e padrões na criação de imagem;
* Dockerizar aplicações, ou seja, criar uma imagem Docker com tudo que é necessário para executar projetos na hora;

## Exercícios:
1. Crie um Dockerfile utilizando a imagem chuanwen/cowsay.
2. Defina um ENTRYPOINT para a execução do comando.
3. Observe que o executável cowsay está no diretório /usr/games/
4. Lembre-se que com ele, diferente do CMD, o comando não poderá ser sobrescrito com o docker run, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.
5. Utilize o CMD para definir uma mensagem padrão.
6. Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.
7. Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQV TRYBE", para exibir um dragão junto com a vaquinha.
