# INSTALAÇÃO TAILWIND CSS
- isntall postcss
- isntall postcss-cli
    - criar o arq. postcss.config.js
    -comenta o //`require('tailwindcss')`,

criar no pakcage.json
    - `"build-dev": "postcss ./src/css/tailwind.css --output ./public/css/styles.css",`
    - `"watch-css": "postcss ./src/css/tailwind.css --output ./public/css/styles.css --watch",`

- isntall autoprefixer
- isntall tailwindcss
    - criar o arq. config Tailwind
        - `npx tailwind init`
        - descomenta no arq. postcss.config.js //`require('tailwindcss')`, 

- executa yarn build-dev 

# INSTALL
- yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser 
- https://www.youtube.com/watch?v=imo0hXHQzMk&t=15s

# INSTALL ESLINT-PLUGIN-TAIWLIND
`npm install eslint-plugin-tailwind --save-dev`
-   https://www.npmjs.com/package/eslint-plugin-tailwind





