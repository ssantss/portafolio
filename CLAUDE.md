# Portafolio personal de Santiago Jiménez

Sitio estático con Astro. Es la cara profesional pública de Santiago — los recruiters y leads aterrizan aquí. Tratar como producción real.

URL deployada: ver `src/data/config.ts` (`SITE_URL`).

## Stack actual (al 2026-05-02)

- **Astro 6.2.1** (output static)
- **Tailwind 4** vía **`@tailwindcss/postcss`** (no usar `@astrojs/tailwind` ni `@tailwindcss/vite` — ver decisiones más abajo)
- **Node 22.12+** (mínimo requerido por Astro 6, fijado en `.nvmrc`)
- TypeScript en modo strict (`astro/tsconfigs/strict`)
- Integraciones: `@astrojs/sitemap`, `astro-robots-txt`
- Markdown con Shiki (tema `nord`)

## Comandos

```bash
npm run dev      # localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ para verificar build
npm run check    # astro check (types) — esto corre en CI
```

## Estructura clave

- `src/data/presentation.ts` — bio, socials, skills (ICONOS DESHABILITADOS, ver decisiones)
- `src/data/projects.ts` — lista de proyectos del portafolio
- `src/data/config.ts` — URL del sitio
- `src/data/theme.ts` — colores
- `src/content.config.ts` — config de content collections (loader `glob`)
- `src/content/posts/` — markdown de posts del blog
- `src/styles/tailwind.css` — Tailwind 4 entrypoint con `@theme` para `--font-sans`
- `src/styles/post.css` — estilos del cuerpo del post; **debe iniciar con `@reference "tailwindcss";`** para que `@apply` funcione
- `src/components/Header.astro` — botón "Descargar CV" con dropdown ES/EN
- `public/santiago_jimenez_cv_es.pdf` y `_en.pdf` — CVs descargables

## Patrones / convenciones

- **Negritas en strings de presentación**: usar `*texto*`, lo procesa `convertAsteriskToStrongTag` antes de inyectar como HTML.
- **Imports type-only**: con `verbatimModuleSyntax` activado, importar tipos así: `import { type CollectionEntry } from "astro:content"`. Si no, `astro check` falla.
- **Content collections (Astro 6)**: usar `post.id` (NO `post.slug`, eso era Astro ≤5). Usar `render(post)` (NO `post.render()`).
- **Tailwind 4 en CSS no global**: cualquier `.css` con `@apply` que se importe como módulo necesita `@reference "tailwindcss";` arriba — si no, `@apply` no resuelve utilities.
- **Customizaciones de Tailwind**: NO recrear `tailwind.config.cjs`. Usar `@theme { ... }` en `src/styles/tailwind.css` (formato CSS-first de Tailwind 4).
- **Copy del hero**: tono profesional senior, sin lista de tecnologías sueltas. Mantener jerarquía clara Django + Next.js como stack principal, lo demás como secundario. Sin "apasionado por aprender nuevas tecnologías" ni clichés similares.

## Lo que NO hacer

- **No reintroducir `@astrojs/tailwind`** — está deprecado y no soporta Astro 6.
- **No usar `@tailwindcss/vite`** — bug con rolldown-vite de Astro 6 (`Missing field tsconfigPaths`). La ruta PostCSS es la estable.
- **No agregar grilla de íconos del stack en el hero** — ya se eliminó porque hacía ver el portafolio "junior/bootcamp". Los íconos pueden ir dentro de cada `ProjectCard` si aporta contexto.
- **No commitear con `Co-Authored-By: Claude`** — los commits van firmados solo por Santiago.
- **No bajar de Node 22.12** — Astro 6 lo exige.
- **No actualizar GitHub Actions a versiones < v6** — v3/v4/v5 corren sobre Node 20 (deprecado por GitHub).

## CI / Deploy

- Workflow: `.github/workflows/ci-check.yaml` — corre `npm install` + `npm run check` en cada push y PR.
- Acciones: `actions/checkout@v6`, `actions/setup-node@v6` (Node 24 nativo).
- `npm run check` requiere `@astrojs/check` y `typescript` instalados como devDeps.
- Repo en GitHub: `ssantss/portafolio` (rama `main` es la fuente de verdad).

## Decisiones recientes (2026-05-02)

- Reescritura del copy del hero para tono senior LatAm con foco Django + Next.js; eliminada la grilla de skills.
- Migración Astro 5.15 → 6.2.1 + Tailwind 3 → 4. Documentado arriba qué se cambió y por qué.
- CI ahora valida types de verdad (antes faltaban `@astrojs/check`/`typescript` y daba falso success).
- Header.astro tenía 7 errores de strict null checks ocultos por el CI roto — arreglados.

## Cómo agregar un proyecto al portafolio

Editar `src/data/projects.ts` y agregar una entrada al array. La estructura del objeto se ve en las entradas existentes. Sin tocar componentes.

## Cómo publicar un post

Crear `src/content/posts/<slug>.md` con frontmatter:

```yaml
---
title: "..."
publishedAt: 2026-05-02
description: "..."
isPublish: true
isDraft: false
---
```

El slug del URL viene del nombre del archivo (Astro 6 lo deriva de `post.id`).
