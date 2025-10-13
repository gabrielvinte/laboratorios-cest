# 💻 Portal dos Laboratórios de SI - CEST

Este é o repositório oficial da **landing page interativa dos laboratórios do curso de Sistemas de Informação do CEST - Centro Universitário**.

O projeto foi desenvolvido com o objetivo de **apresentar as áreas dos laboratórios de forma moderna, organizada e interativa**, servindo como vitrine para os projetos e informações de cada setor do curso.  
Esta documentação foi escrita para facilitar a **continuidade do desenvolvimento** pelos próximos integrantes do grupo.

---

## 🧩 Objetivo Geral

Criar uma **landing page institucional** com rolagem fluida e navegação lateral dinâmica, apresentando as principais áreas dos laboratórios:  
**Escritório Escola, Robótica, Dados e Inteligência Artificial**.

O foco do projeto é oferecer uma experiência de navegação intuitiva e visualmente agradável, com destaque para a integração entre as seções e a responsividade do layout.

---

## ✨ Tecnologias Utilizadas

O projeto utiliza um conjunto de tecnologias modernas para garantir desempenho e fácil manutenção:

- ⚛️ **React.js** → Biblioteca principal para construção da interface.
- 🎨 **Tailwind CSS** → Framework de estilização rápida e responsiva.
- 🧩 **React Icons** → Biblioteca de ícones usada na seção Hero e nos componentes visuais.

---

## 🚀 Como Rodar o Projeto

Para executar o projeto localmente:

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/gabrielvinte/laboratorios-cest
```

### 2️⃣ Acesse a pasta do projeto

```bash
cd nome-da-pasta-do-projeto
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Inicie o servidor de desenvolvimento

```bash
npm start
```

### 🏗️ Estrutura e Lógica do Projeto

```bash
src/
├── assets/
│   └── images/                      # Imagens e recursos visuais
├── components/
│   ├── Header.jsx                   # Cabeçalho e links de navegação
│   ├── SideNav.jsx                  # Navegação lateral dinâmica (scroll spy)
│   ├── Hero.jsx                     # Seção principal com destaque visual(Já construido)
│   ├── EscritorioEscola.jsx         # Laboratório: Escritório Escola(Já construído)
│   ├── Robotica.jsx                 # Laboratório: Robótica(Já construido)
│   ├── Dados.jsx                    # Laboratório: Dados(Pendente)
│   └── InteligenciaArtificial.jsx   # Laboratório: I.A(Pendente)
├── App.js                           # Controla o fluxo das seções e o scroll spy
├── index.js                         # Ponto de entrada da aplicação
├── index.css                        # Estilos globais
└── tailwind.config.js               # Configuração do Tailwind CSS
```

### 🔧 Funcionamento da Navegação por Scroll (Scroll Spy)

A funcionalidade de destaque automático da seção atual foi implementada com a API IntersectionObserver, que é mais eficiente que o uso direto de eventos de scroll.

Fluxo resumido:

- Cada seção (Hero, EscritorioEscola, etc.) é registrada com um ref.

- App.js utiliza o IntersectionObserver para detectar qual seção está visível no viewport.

- Quando uma seção entra na “zona de ativação”, o estado activeSection é atualizado.

- O componente SideNav.jsx recebe esse estado e realça a bolinha correspondente.

✅ Isso garante uma navegação fluida, leve e sincronizada com o movimento do usuário.

### 🧭 Como Adicionar Novas Seções

Caso seja necessário incluir um novo laboratório:

1. Crie um novo componente em src/components, por exemplo:

   ```bash
   src/components/NovoLaboratorio.jsx
   ```

2. Adicione o novo componente no App.js, junto com o ref correspondente.

3. Atualize o SideNav.jsx para incluir uma nova bolinha de navegação.

4. Opcionalmente, adicione um link no Header.jsx para acesso direto.

### 📋 Boas Práticas e Padrões de Código

- Utilize nomes descritivos para componentes e funções.

- Prefira componentes funcionais e hooks do React.

- Mantenha o código comentado somente quando necessário — os arquivos atuais seguem essa linha.

- Use as classes utilitárias do Tailwind CSS para manter o código enxuto.

- Sempre testar a responsividade após qualquer modificação.

### 🔮 Próximas Melhorias Visadas

📱 Melhorar a experiência mobile (ajuste de espaçamentos e fontes).

🧠 Integrar a página com dados reais dos projetos e laboratórios.

🔗 Implementar as páginas específicas de cada laboratório.
