# A Sua Publicidade

Site institucional da A Sua Publicidade, feito com Next.js, React, TypeScript, Framer Motion e Lucide Icons. Preparado para publicação na Vercel.

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar

```bash
npm run lint
npm run typecheck
npm run build
```

## Publicar na Vercel

Importe esta pasta como projeto Next.js. Configure `NEXT_PUBLIC_SITE_URL` com o domínio público final, sem barra no fim. Isso ativa a URL canônica e as URLs absolutas de compartilhamento. O arquivo `.env.example` mostra o formato.

## Publicar no GitHub Pages

O endereço público é `https://jp17ribeiro.github.io/asuapublicidade/`. O GitHub Pages usa a pasta raiz da branch `main`, por isso ela inclui o `index.html` e os arquivos estáticos gerados.

Depois de alterar o site, execute `npm run build:pages`, confira o resultado e envie os arquivos alterados para a branch `main`. Esse comando gera a versão para o subdiretório `/asuapublicidade/`, copia os arquivos publicados para a raiz e cria `.nojekyll`, necessário para servir a pasta `_next`.

## Editar conteúdo

- Serviços, perguntas frequentes, pacotes, preços e mensagens do WhatsApp: `data/content.ts`.
- Projetos, categorias, imagens e futuros indicadores verificados: `data/portfolio.ts`.
- Os quatro valores de desenvolvimento web ficam somente em `sitePlans`.
- Cores, tamanhos e estilos responsivos: `app/globals.css` e `app/expansion.css`.
- Estrutura da página: `components/Site.tsx`; seções editoriais e portfólio: `components/Expansion.tsx`.
- Logo oficial horizontal: `public/images/logo-horizontal.png`.
- Logo quadrada oficial usada como favicon: `public/images/logo-square.jpg`.

As imagens de portfólio, a captura do perfil e os quadros de pacotes exibidos na conversa não estavam disponíveis como arquivos no ambiente. A página usa os dados informados nos briefings e apresenta editorialmente os quatro projetos identificados. Para usar imagens reais, coloque os arquivos em `public/images/portfolio` e preencha o campo `image` de cada item em `data/portfolio.ts`. O grid, o modal e o bloco do Instagram passarão a utilizá-las. Categorias sem projetos confirmados direcionam ao Instagram; o componente de indicadores só aparece quando `agencyStats` recebe dados reais.
