# CV — Santiago Jiménez

CV mantenido como código con [RenderCV](https://rendercv.com/) (Typst-based, ATS-friendly).

## Archivos

- `cv.en.yaml` — versión en inglés.
- `cv.es.yaml` — versión en español.

Los PDFs se publican en `public/santiago_jimenez_cv_en.pdf` y `public/santiago_jimenez_cv_es.pdf` (los que sirve el botón "Descargar CV" del Header del portafolio).

## Requisitos

- Python 3.10+ y `pipx`.
- RenderCV instalado: `pipx install 'rendercv[full]'`.

## Regenerar los dos PDFs

Desde la raíz del portafolio:

```bash
npm run cv:build
```

Esto:
1. Renderiza `cv.en.yaml` → `public/santiago_jimenez_cv_en.pdf`.
2. Renderiza `cv.es.yaml` → `public/santiago_jimenez_cv_es.pdf`.
3. Limpia `cv/rendercv_output/` (residuo intermedio de Typst).

## Cuándo actualizar

Cada vez que pase algo que valga la pena reflejar en el CV:

- Termino o lanzo un proyecto significativo → agregar a `projects:` con métricas (impacto medible, no actividad).
- Cambio de rol o responsabilidad → editar `experience:`.
- Adquiero una skill nueva con dominio real (no "le di un vistazo") → editar `skills:`.
- Aniversario de empresa → revisar fechas y duración.

Para mantener el tono senior:
- Bullets con **verbo + qué hice + impacto medible**, no "responsable de…".
- Sin clichés ("apasionado", "team player", "siempre aprendiendo").
- Skills curado, no exhaustivo: si no lo usaste en producción, no va.

## Diseño

Theme `classic` (single-column, ATS-friendly). Acento naranja (`rgb(234, 88, 12)`) que matchea el del portafolio. Para customizar más, ver bloque `design:` en cada YAML — hay decenas de opciones documentadas en [docs.rendercv.com](https://docs.rendercv.com/).
