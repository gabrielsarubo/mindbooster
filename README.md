# MindBooster

Agora você pode memorizar todos os diferentes tipos de assuntos sem ficar entediado. Pratique suas habilidades em assuntos como: história, idiomas, geografia biologia, matemática, arte e qualquer outro assunto que desejar.

A melhor parte do MindBooster é que você pode aprender sobre novos tópicos assim como criar as suas próprias lições. Para fazer isso, é só criar uma coleção e adicinar novos cartões, e que é um processo bem simples e intuitivo que pode ser feito do seu próprio celular.

## ✨ Funcionalidades

Principais funcionalidades do app:

1. <b>Criar nova coleção</b> (assim como editar e apagar)
1. <b>Criar novo cartão</b> para uma coleção existente (assim como editar e apagar)
1. <b>Jogar</b>, que consiste em:
    * Ler a pergunta (contida na frente do cartão);
    * Responder a pergunta. A resposta pode ser escrita, verbal ou mental;
    * Virar o cartão para verificar se a resposta está correta;
    * Caso tenha acertado, contabilize seu acerto. Caso tenha errado, contabilize seu erro;
    * Ao finalizar os cartões, contabilize quantos acertos e erros houveram. Após uma pausa de aproximadamente 30 minutos, se avalie novamente.
1. <b>Autenticação</b>, entrar no app com uma conta existente ou criar uma nova conta

### Próximas Funcionalidades

- [x] Recuperação e apresentação da lista de coleções do banco de dados;
- [x] Persistência do cadastro de uma nova coleção em banco de dados;
- [x] Alteração de uma coleção existente no banco de dados;
- [x] Exclusão de uma coleção no banco de dados;
- [x] Recuperação e apresentação da lista de flashcards de uma coleção;
- [x] Persistência do cadastro de um novo flashcard em banco de dados;
- [x] Alteração de uma flashcard existente no banco de dados;
- [x] Exclusão de flashcard no banco de dados;
- [x] Filtragem de elementos; 
- [x] Uso do REDUX para manter o estado das coleções e cartões;
- [x] Carregamento dos flashcards no jogo com a opção virar conforme no protótipo.

## 🚀 Tecnologias

Alguns dos frameworks, bibliotecas, serviços, APIs e plataformas que foram usadas para o desenvolvimento do app:

- React `v17.0.1`
- React Native `v6.0.10`
- Context API
- Expo `v44.0.0`
- Firebase `v8.2.3`
- Formik: `v2.2.9`
- Yup: `v0.32.11`

## 👨‍🚀 Instalação

Este projeto utiliza Expo e Yarn. Para instalar e executar o app, siga as orientações abaixo:

```bash
# Clone o repositório na sua máquina
git clone https://github.com/gabrielsarubo/mindbooster.git

# Instale as dependências e acesse o repositório
yarn install

cd ./mindbooster

# Inicie o app na plataforma escolhida
yarn start
```

# FAQ

<details>
  <summary>O que são flashcards?</summary>
  Flashcards são cartões utilizados para a memorização. Cada cartão possui dois lados. Um lado contém uma pergunta e o outro, a resposta. Geralmente, os flashcards são organizados em coleções de diferentes assuntos.
</details>

# Sobre

Este projeto foi desenvolvido como parte da disciplina de Programação Móvel pela UTFPR-CP (2022/1).
