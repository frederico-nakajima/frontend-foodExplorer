# 🍽️ Food Explorer - Front-end

Interface web da aplicação **Food Explorer**, desenvolvida com **React + Vite**, com foco em uma experiência fluida, responsiva (Mobile First) e intuitiva para usuários comuns e administradores.

---

## 📚 Funcionalidades

- 🔐 Autenticação de usuários e administradores com JWT
- 📱 Telas de login, menu principal, detalhes do prato e cadastro
- 🔍 Busca por **nome** e **ingredientes**
- 📸 Upload de imagem ao cadastrar pratos (admin)
- 🧭 Navegação entre rotas com React Router
- 💬 Feedback visual com animações e transições
- 📱 Layout responsivo (Mobile First) com adaptação para desktop

---

## 🚀 Tecnologias utilizadas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [Swiper](https://swiperjs.com/) (slider de imagens)
- React Router DOM
- Phosphor Icons

---

## 🎨 Design

O layout da aplicação foi baseado no modelo proposto no **Figma**, disponível publicamente em:

🔗 [Food Explorer v2 (Community) no Figma](https://www.figma.com/design/8IvzsyLnFO3Lwbq5Nrh9Li/food-explorer-v2-(Community)?node-id=96-5219&p=f&m=dev)

A interface foi implementada seguindo os princípios de:

- Mobile First
- Animações e transições suaves
- Componentes reutilizáveis
- Indicadores visuais de ação e estado
- Foco em responsividade e boa usabilidade


---

## 🔍 Integração de busca inteligente

A aplicação possui um sistema de busca integrada entre:

### ✅ `DesktopHeader` (versão desktop)
### ✅ `SideMenu` (versão mobile)

Ambos utilizam um **contexto global (`SearchContext`)** para compartilhar o termo buscado (`searchTerm`) com toda a aplicação.

#### 🔁 Comportamento da busca:

- O valor digitado no campo de busca é salvo no contexto global.
- O componente responsável pela listagem dos pratos escuta essas mudanças.
- Uma requisição é feita à API com base no `searchTerm`, retornando os pratos filtrados.
- Ao clicar no ícone de busca:
  - Se o usuário **não estiver na rota `/`**, é redirecionado automaticamente.
  - No mobile, o menu lateral (`SideMenu`) é **fechado automaticamente** após a busca, garantindo visibilidade do conteúdo.

#### 📂 Arquivos envolvidos:
- `contexts/SearchContext.jsx`
- `components/Search`
- `components/DesktopHeader`
- `components/SideMenu`
- `pages/MenuAdminUser` (ou componente de listagem)

---

## 📦 Como executar o projeto localmente

- npm run dev

## 🌐 Deploy

A aplicação está publicada em:

🔗 https://nakak.netlify.app

### 1. Clonar o repositório

```bash
git clone git@github.com:frederico-nakajima/frontend-foodExplorer.git
```
---

📄 Licença
Este projeto está sob a licença MIT.