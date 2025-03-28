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

## 💡 Sistema de Medidas

Todo o projeto — incluindo as versões mobile e desktop — foi construído utilizando `rem` ao invés de `px`.

- A base adotada foi: `1rem = 8px` (com `font-size: 50%` definido no `:root`).
- Essa conversão foi aplicada em todas as medidas do layout, como:
  - Fontes
  - Espaçamentos (margin, padding)
  - Largura e altura de elementos
  - Dimensões de imagens
- Os valores foram convertidos diretamente a partir do Figma, mantendo fidelidade ao design original.

> Exemplo: um botão de 160px de largura no Figma se tornou `20rem` no código.

Essa abordagem facilita a responsividade, melhora a escalabilidade e mantém uma hierarquia visual consistente em diferentes tamanhos de tela.

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

```bash
git clone git@github.com:frederico-nakajima/frontend-foodExplorer.git
cd frontend-foodExplorer
npm install
npm run dev
```

## 🌐 Deploy

A aplicação está publicada em:

🔗 https://nakak.netlify.app

---

📄 Licença
Este projeto está sob a licença MIT.