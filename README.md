# 🎬 Aplicación de Películas - SSR (Next.js)

Este proyecto es un sitio web desarrollado con **Next.js**. Permite a los usuarios explorar películas populares, ver detalles de películas y buscar películas utilizando el sistema de rutas basado en el directorio `app/` y renderizado del lado del servidor (**SSR**). Consume **The Movie Database API (TMDB)** para mostrar información de películas.

---
## 🌐 Demo en linea

Vea la demostración en vivo del proyecto implementado en Vercel: https://filmatic-next.vercel.app/

---

## 🚀 Funcionalidades

- Página de inicio con lista de películas populares (https://filmatic-next.vercel.app/).
- Página de detalle con título, géneros, sinopsis, calificación y fecha de lanzamiento (https://filmatic-next.vercel.app/details/{id}).
- Página de búsqueda por título, se lista películas que coinciden con la búsqueda (https://filmatic-next.vercel.app/search/{elect}).
- Enrutamiento dinámico con App Router (Next.js).

---

## 🛠️ Tecnologías

- Next.js 13+ (App Router)
- React
- TMDB API

---

## 📁 Estructura del Proyecto

```
    └── 📁Filmatic-Next
        └── .env
        └── .env.example
        └── eslint.config.mjs
        └── jsconfig.json
        └── next.config.mjs
        └── package-lock.json
        └── package.json
        └── 📁public
            └── filmatic.png
            └── logo.svg
            └── poster_filmatic.png
        └── README.md
        └── 📁src
            └── 📁app
                └── favicon.ico
                └── globals.css
                └── layout.js
                └── 📁movie
                    └── 📁[movieId]
                        └── page.js
                └── page.js
                └── page.module.css
                └── 📁search
                    └── 📁[elect]
                        └── page.js
            └── 📁components
                └── Header.js
                └── MovieCard.js
```

---

## ▶️ Cómo ejecutar

1. Clona el repositorio:

   > ```bash
   > $ git clone https://github.com/thalia-mijas/Filmatic-Next.git
   > $ cd Filmatic-Next
   > ```

2. Instala las dependencias:

   > ```bash
   > $ npm install
   > ```

3. Crea un archivo **`.env`** que contenga las siguientes variables de entorno:

   > ```
   > # The Movie Database API Token (TMDB)
   > DB_TOKEN="your_api_token"
   > ```

4. Ejecuta el servidor en modo desarrollo:
   > ```bash
   > $ npm run dev
   > ```

---