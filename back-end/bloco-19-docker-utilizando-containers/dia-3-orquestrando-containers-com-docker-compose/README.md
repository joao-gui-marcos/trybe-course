# DIA 3

## Aprendizados do dia:
* Instalar e utilizar a ferramenta docker-compose;
* Entender a relação entre a ferramenta docker-compose e o Docker, e porque usamos ambos;
* Gerenciar redes virtuais, utilizando-as para a comunicação e isolamento entre os contêineres;
* Persistir dados dos contêineres utilizando volumes;
* Criar arquivos compose para gerenciar todo seu ambiente com contêineres;
* Entender e gerenciar Services, Network e Volumes, que são novos conceitos trazidos pelo Docker Compose.

## Exercícios:
### Parte 1:
* Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura:
* Tag title com o seguinte texto “Trybe”;
* Tag h1 com o seguinte texto “Missão da Trybe”;
* Tag p com o seguinte texto “Gerar oportunidade para pessoas”;
* Salve o arquivo em qualquer lugar da sua máquina com a extensão html
* Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
* Após criar o container acesse a página HTML que está rodando no servidor em seu browser.
* Acesse o arquivo missao_trybe.html e acrescente a tag p com o seguinte texto “Nosso negócio é GENTE! #VQV”;
* Obtenha o id do container httpd:2.4;
* Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host;
* Agora pare o container httpd:2.4;
* Exclua o seu container;
* Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;
* Obtenha o IMAGE ID do servidor;
* Depois de obter o IMAGE ID, exclua a imagem.

### Parte 2:
Crie o arquivo Compose para subir um ghost blog, essa plataforma é similar com o Wordpress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:
* Utilize a versão “3” no arquivo;
* Crie um service para subir a plataforma, utilize a imagem ghost:1-alpine;
* Publique a porta 2368, fazendo bind também para a 2368;
* Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.

### Parte 3:
Por padrão o ghost utiliza um sqlite interno para salvar as informações, porém, vamos alterar esse comportamento para exercitar nossos conhecimentos:
* Crie um novo serviço para o nosso banco de dados, podemos utilizar um mysql, utilize a imagem mysql:5.7;
* Precisamos definir uma senha root para o nosso bd, para isso utilize a variável MYSQL_ROOT_PASSWORD, lembre-se que é possível utilizar a sintaxe ${} para passar uma env do host, para a env do container;
* Agora precisamos configurar nosso service com o ghost para utilizar o MySQL, para isso defina a variável database__client para mysql;
* Defina o nome ghost para o nome do database utilizando a variável database__connection__database;
* E então, indique a conexão para o nosso MySQL na env database__connection__host;
* Para definir a pessoa usuária (root) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs database__connection__user e database__connection__password.
* Utilize a opção depends_on para criar relações de dependências entre os serviços.
* Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.

