# React + Vite + Tailwind CSS

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Instalation
Install Menggunakan Vite 
```sh
npm create vite@latest my-react-app -- --template react
```

Install depedensi 
```sh
npm install
```

Install Tailwind CSS
```sh
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

Masuk ke file `tailwind.config.js` dan tambahkan kode di bawah ini
```sh
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Masuk ke file `./src/index.css` dan tambahkan kode di bawah ini
```sh
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Jalankan projectnya
```sh
npm run dev
```


## Lesson 
- Setup Project
- Component & Props
- Atonomic Design
- React Router
- Conditional Rendering
- Nested Component
- Rendering Lists
- Event Handler
- State
- UseState
- Lifecycle
- UseEffect
- UseRef
- Get Data API
- Post Data API
- Custom Hooks
- Dynamic Routing
- Redux - State Managament
