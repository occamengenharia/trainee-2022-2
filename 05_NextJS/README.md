img aq
>É um framework para React. Serve para criação de interfaces de usuário.


## ReactJs

- Biblioteca para construção de interfaces, podendo ser web, desktop, realidade virtual, entre outras;
- Utilizado para construção de Single-Page Applications, conceito SPA, onde a página nunca recarrega, só vai alterando os componentes em tela;
- Desenvolvido com js ou ts.


```jsx
import React from 'react';

import './button.css';
import icon from './button.svg';

function Button() {
return (
  <button>
    <img src={icon}/>
  </button>
  );
}
```

## Nextjs
> Segue o mesmo conceito React. Mas conta com algumas "facilidades"

### Iniciando

```bash
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```

### Instalar dependências

```bash
npx install <dep>
# or
yarn add <dep>
# or
pnpm install <dep>
```
> Para atualizar basta deixar `<dep>` vazio.

### Rodar o projeto

```bash
npx run dev
# or
yarn dev
# or
pnpm run dev
```
