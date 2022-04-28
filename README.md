# MindBooster

Projeto final da disciplina de Programação Móvel pela UTFPR-CP (2022/1)

## Visão geral das branches

```
main
|--regular
|--refact
```

### `main`

Versão incompleta, porém estável. Nesta versão foi apenas implementada para fins de estudo as seguintes telas e funcionalidades:

  - telas de Entrar, Cadastrar e Minhas Coleções (sem estilos)
  - tela de Entrar possui um form que lê os dados de email e senha do usuario e possui um botão que redireciona para a tela de Minhas Colções
  - implementado minimamente para fins de estudo o Stack Navigation e Drawer Navigation

> O app lê campos de login, navega entrar tela de entrar e cadastrar, redireciona para tela de Minhas Colecoes. Está implementado uma Stack para navegar entre telas de Login e Signin e uma navegacao por "gavetas" (Drawer Navigation) para navegar entre MyCollections e outras possiveis telas ou funcoes como a de encerrar a secao do usuario (log out)

### `regular`

Versão regular seguindo orientações origeinais do projeto. Versão feita para corresponder exatamente ao enunciado proposto para o projeto

### `refact`

Versão refatorada do app com o objetivo principal de melhorar a navegação entre as telas do app, i.e. melhorar a implementação do Stack Navigation e Drawer Navigation com base no meu entendimento atual das bibliotecas e de React Native

Alterações propostas:

- utilizar modais
- tornar a navegação melhor entre as telas

---

## Estrutura do diretório

```
App.js
|
|--pages/
    |-- LoginScreen.js
    |-- SignInScreen.js
    |-- MyCollectionsScreen.js
|    
|--components/
    |-- Menu.js
    |-- CustomButton.js
    |-- CustomTextInput.js
```
