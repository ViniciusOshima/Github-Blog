# Github-Blog

### Desafio do Módulo 3 da trilha ReactJS do curso Ignite da Rocketseat

![image](https://github.com/ViniciusOshima/Coffee-Delivery/assets/105689421/89c05369-d7fd-4d3a-9624-89bb2eb35061)

> STATUS: Terminado ✅

Nesse desafio desenvolvi uma aplicação que utiliza da API do GitHub para buscar issues do meu repositório, dados do meu perfil e exibir elas como um blog.

### Github Blog possui as seguintes funcionalidades:

+ Listagem do meu perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub. ✅
+ Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela. ✅
+ Criar uma página para exibir um post (issue) completo. ✅

### Adaptações utilizadas no desafio

O layout disponibilizado do desafio não possui botão para iniciar filtragem de issues na page Home, logo a filtragem acontece conforme o usuário digita graças ao método "onChange()" no form:

![image](https://github.com/ViniciusOshima/Coffee-Delivery/assets/105689421/2de68976-72ed-4503-afa9-5c4a61796355)

- Porém, a API fornecida pelo github oferece apenas 10 requisições por minuto, o que dificulta a utilização do método "onChange()" já que quando digitar, por exemplo, 10 letras, 10 requisições serão feitas e a API deixará de responder.

- uma solução mais viável nesta situação sem modificar o layout do desafio foi utilizar a biblioteca Lodash, que agora permite que o usuário digite palavras consecutivas e apenas quando parar de digitar, após 500ms uma requisição é realizada

![image](https://github.com/ViniciusOshima/Coffee-Delivery/assets/105689421/cba7d1ab-e62b-4567-844c-cfba2d60d2b7)

A segunda adaptação está na formatação e estilização do conteúdo da issue apresentado:

![image](https://github.com/ViniciusOshima/Coffee-Delivery/assets/105689421/f900d4d1-c711-4fa3-a216-ef558a9bd9c4)

para aplicar a estrutura HTML utilizada dentro do github no meu projeto:

![image](https://github.com/ViniciusOshima/Github-Blog/assets/105689421/08b91ca1-d9f3-4a01-8441-f029c96a2377)



## Tecnologias utilizadas

+ ReactJS
+ TypeScript
+ HTML
+ CSS
+ Node.JS
+ Vite

## Dependências utilizadas

+ styled-components
+ zod
+ lodash
+ react-router-dom
+ react-hook-form
+ phosphor-react
+ hookform/resolvers

## APIs utilizadas

+ GitHub Users API
+ GitHub Search API
+ GitHub Issues API
