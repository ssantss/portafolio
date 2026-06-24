# Portafolio personal de Santiago Jiménez

Sitio estático con Astro. Es la cara profesional pública de Santiago — los recruiters y leads aterrizan aquí. Tratar como producción real.

URL deployada: ver `src/data/config.ts` (`SITE_URL`).

## Concepto (rediseño 2026-06-24)

Dirección visual **"Terminal / CLI"**: una sola página (el `index`), oscura, monoespaciada y precisa, con acento morado (`#a855f7`). El frame imita una ventana de terminal (chrome con dots + prompt `santiago@portfolio: ~`) y la página se lee como una sesión de consola: cada bloque arranca con un comando (`$ whoami`, `$ cat about.md`, `$ ls --social`, `$ cat stack.json`, `$ ls projects/ --sort=featured`, `$ ./contact.sh --now`). Solo ES. Único elemento animado: el cursor parpadeante en la línea de teléfono. Diseño tomado del handoff `design_handoff_terminal_portfolio` (referencia pixel-perfect en su `reference_option_a.html`).

## Stack actual (al 2026-06-24)

- **Astro 6.2.1** (output static)
- **Tailwind 4** vía **`@tailwindcss/postcss`** (no usar `@astrojs/tailwind` ni `@tailwindcss/vite` — ver decisiones más abajo)
- **Node 22.12+** (mínimo requerido por Astro 6, fijado en `.nvmrc`)
- TypeScript en modo strict (`astro/tsconfigs/strict`)
- Integraciones: `@astrojs/sitemap`, `astro-robots-txt`
- Fuente: **JetBrains Mono** (Google Fonts, pesos 400/500/600/700) cargada en `SEOTags.astro`. Es la única familia del sitio.
- Markdown con Shiki (tema `nord`)

## Comandos

```bash
npm run dev      # localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ para verificar build
npm run check    # astro check (types) — esto corre en CI
npm run cv:build # regenera los PDFs del CV (es/en) en public/
```

## Estructura clave

- `src/pages/index.astro` — arma el `.frame` (max-w 1080px, borde + radius + sombra) y compone los 6 bloques de terminal.
- `src/components/terminal/` — los 6 bloques: `Header` (chrome + nav + control CV `.es/.en`), `Hero` (`whoami`/`cat about.md`/`ls --social`), `Stack` (`cat stack.json`), `Projects` (índice numerado), `Contact` (mail + teléfono con cursor), `Footer`.
- `src/data/presentation.ts` — `title`, `role`, `description` (bio con `*…*` → negritas blancas), `mail`, `phone`, `socials` (con `handle`). `skills` quedó pero ya **no se usa** (el stack está hardcoded en `Stack.astro`).
- `src/data/projects.ts` — proyectos. `isFeatured` → punto morado + orden primero. `shortDesc` = resumen de una línea para el índice (cae a `description` si falta). `techs` se muestran `.slice(0,4)`.
- `src/data/config.ts` — URL del sitio
- `src/content.config.ts` — config de content collections (loader `glob`)
- `src/content/posts/` — markdown de posts del blog (sin enlazar desde la home)
- `src/styles/tailwind.css` — Tailwind 4 entrypoint: tokens de color del diseño vía `@theme` (`--color-*`: page/bg/chrome/line/text/muted/faint/accent…), `--font-mono`, keyframe `blink` y `.cursor-blink`.
- `src/styles/post.css` — estilos del cuerpo del post; **debe iniciar con `@reference "tailwindcss";`** para que `@apply` funcione
- `src/components/seo/SEOTags.astro` — head/SEO + carga de JetBrains Mono.
- Componentes legacy del template viejo (`Header.astro`, `ProjectCard`, `Skills`, `SocialLinks`, `WhatsappFab`, `shared/*`) siguen en el repo pero **no los usa el index**; `PostCard` sí lo usan las páginas de posts.
- `public/santiago_jimenez_cv_es.pdf` y `_en.pdf` — CVs descargables (regenerados desde `cv/`); enlazados desde el control `cv .es/.en` del header.
- `cv/cv.es.yaml` y `cv/cv.en.yaml` — fuente del CV (RenderCV / Typst). Editar aquí, NO el PDF.
- `cv/README.md` — guía de cuándo y cómo actualizar el CV.

## Patrones / convenciones

- **Colores**: SIEMPRE vía los tokens de `@theme` (`text-text`, `text-muted`, `text-faint`, `text-accent`, `bg-bg`, `bg-bg-alt`, `border-line`…). Para los washes de hover usar valores arbitrarios (`hover:bg-[rgba(168,85,247,0.06)]`). No meter hex sueltos salvo casos puntuales (p. ej. `#fff` de las negritas del about).
- **Negritas en el bio**: la `description` usa marcadores `*texto*`; `Hero.astro` los convierte a `<strong>` localmente y los estilea blancos (#fff, 600) con CSS scoped. (El viejo `convertAsteriskToStrongTag` aplica color de tema y peso normal — NO usarlo aquí.)
- **Tamaños no estándar**: el diseño es de medidas precisas; usar valores arbitrarios de Tailwind (`text-[14.5px]`, `py-[14px]`, `grid-cols-[150px_1fr]`).
- **Imports type-only**: con `verbatimModuleSyntax` activado, importar tipos así: `import { type CollectionEntry } from "astro:content"`. Si no, `astro check` falla.
- **Content collections (Astro 6)**: usar `post.id` (NO `post.slug`, eso era Astro ≤5). Usar `render(post)` (NO `post.render()`).
- **Tailwind 4 en CSS no global**: cualquier `.css` con `@apply` que se importe como módulo necesita `@reference "tailwindcss";` arriba — si no, `@apply` no resuelve utilities.
- **Customizaciones de Tailwind**: NO recrear `tailwind.config.cjs`. Usar `@theme { ... }` en `src/styles/tailwind.css` (formato CSS-first de Tailwind 4).
- **Copy del hero**: tono profesional senior, sin lista de tecnologías sueltas. Mantener jerarquía clara Django + Next.js como stack principal, lo demás como secundario. Sin "apasionado por aprender nuevas tecnologías" ni clichés similares.
- **Fidelidad al handoff**: la verdad-de-tierra visual es `design_handoff_terminal_portfolio/reference_option_a.html`. Cambios de layout/espaciado/color deben respetarlo. Los datos vienen SIEMPRE de `src/data/` (los datos inline del HTML de referencia son solo para que el archivo sea autosuficiente).

## Lo que NO hacer

- **No reintroducir `@astrojs/tailwind`** — está deprecado y no soporta Astro 6.
- **No usar `@tailwindcss/vite`** — bug con rolldown-vite de Astro 6 (`Missing field tsconfigPaths`). La ruta PostCSS es la estable.
- **No agregar más animaciones** — el único elemento animado es el cursor parpadeante del teléfono. Respetar `prefers-reduced-motion` (ya cubierto en `tailwind.css`).
- **No agregar imágenes/íconos/SVGs ilustrativos** — la decisión de diseño es texto puro (solo tipografía + círculos para dots/cursor).
- **No commitear con `Co-Authored-By: Claude`** — los commits van firmados solo por Santiago.
- **No bajar de Node 22.12** — Astro 6 lo exige.
- **No actualizar GitHub Actions a versiones < v6** — v3/v4/v5 corren sobre Node 20 (deprecado por GitHub).

## CI / Deploy

- Workflow: `.github/workflows/ci-check.yaml` — corre `npm install` + `npm run check` en cada push y PR.
- Acciones: `actions/checkout@v6`, `actions/setup-node@v6` (Node 24 nativo).
- `npm run check` requiere `@astrojs/check` y `typescript` instalados como devDeps.
- Repo en GitHub: `ssantss/portafolio` (rama `main` es la fuente de verdad).

## Decisiones recientes

- **2026-06-24 — Rediseño "Terminal / CLI"** (opción A del handoff `design_handoff_terminal_portfolio`): se reemplazó la landing por una sola página con estética de consola (chrome de ventana, bloques como comandos, acento morado, JetBrains Mono). Datos desde `presentation.ts` + `projects.ts` (se agregó `shortDesc` y `role`/`handle`); stack hardcoded en `Stack.astro`; control de CV `.es/.en` en el header. Verificado pixel-perfect contra `reference_option_a.html` con Playwright. (Descartó un rediseño editorial "construyo y opero" que estaba sin commitear.)
- 2026-05-02: migración Astro 5.15 → 6.2.1 + Tailwind 3 → 4; CI valida types de verdad.

## Cómo agregar un proyecto al portafolio

Editar `src/data/projects.ts` y agregar una entrada al array. Campos relevantes para el índice de terminal: `title`, `shortDesc` (resumen de una línea), `techs` (se muestran los primeros 4), `link` (define el `linkLabel` = dominio, o `privado` si falta). Jerarquía de marcador + orden: `isStar` = producto estrella (★ morada, va primero) → `isFeatured` = destacado (• morado de 6px, va después) → resto sin marcador. Sin tocar componentes.

## Cómo actualizar el CV

El CV es ATS-friendly, generado con [RenderCV](https://rendercv.com/) (Typst). Vive en `cv/cv.es.yaml` y `cv/cv.en.yaml`.

Flujo:
1. Editar el(los) YAML correspondiente(s).
2. Ejecutar `npm run cv:build` (requiere `pipx install 'rendercv[full]'` instalado).
3. Verificar visualmente los PDFs en `public/`.
4. Commit de los YAML **y** de los PDFs (los PDFs son artefactos servidos por el sitio).

Cuándo actualizar:
- Termino un proyecto significativo (con métrica de impacto, no solo actividad).
- Cambio de rol/responsabilidad.
- Adquiero una skill con dominio real en producción.

Tono senior: bullets con verbo + qué hice + impacto medible. Sin "apasionado", "team player", "siempre aprendiendo". Skills curado, no exhaustivo. Ver `cv/README.md` para detalle.

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
