```
# Mathilde Web App (Host)

Este proyecto es un **host** configurado con **React**, **Vite** y **Module Federation** para consumir módulos desde un microfrontend llamado `app-mathilde-web`. Este enfoque permite construir aplicaciones escalables con **microfrontends**, donde diferentes equipos pueden desarrollar y desplegar componentes o funcionalidades de forma independiente.

---

## 🚀 Características principales

- **React con Vite**: Ofrece un entorno rápido de desarrollo y compilación.
- **Module Federation**: Permite compartir y consumir módulos entre aplicaciones independientes.
- **Remotes**: Integra un microfrontend (`app-mathilde-web`) y consume sus componentes.
- **Dependencias compartidas**: React, React DOM, y React Router DOM son compartidos entre el host y el microfrontend para evitar duplicados.

---

## 📦 Estructura del proyecto

```
mathilde-web-app/
├── public/              # Archivos públicos estáticos
├── src/                 # Código fuente principal
│   ├── components/      # Componentes locales del host
│   ├── pages/           # Páginas principales
│   ├── main.tsx         # Punto de entrada principal
│   └── vite-env.d.ts    # Declaraciones de tipos
├── .gitignore           # Archivos y carpetas ignoradas por Git
├── package.json         # Dependencias y scripts del proyecto
├── tsconfig.json        # Configuración de TypeScript
└── vite.config.ts       # Configuración de Vite y Module Federation
```

---

## 🛠️ Configuración de Module Federation

La configuración de **Module Federation** en este proyecto está definida en `vite.config.ts` utilizando el plugin `@originjs/vite-plugin-federation`.

### Configuración del host (`mathilde-web-app`):
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mathilde-web-app', // Nombre del host
      remotes: {
        appmathildeweb: 'http://localhost:5173/assets/remoteEntry.js', // URL del microfrontend
      },
      shared: {
        react: {
          requiredVersion: '^18.2.0',
          singleton: true,
        },
        'react-dom': {
          requiredVersion: '^18.2.0',
          singleton: true,
        },
        'react-router-dom': {
          requiredVersion: '^7.1.3',
          singleton: true,
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5000, // Puerto para el host
  },
});
```

### Componentes importados desde el microfrontend

En este proyecto, se consumen componentes remotos del microfrontend `app-mathilde-web`. Los módulos se cargan de manera dinámica utilizando `React.lazy`.

#### Ejemplo de uso:
```javascript
import React from 'react';

// Componentes remotos
const Button = React.lazy(() => import('appmathildeweb/Button'));
const Header = React.lazy(() => import('appmathildeweb/Header'));

const App = () => {
  return (
    <div>
      <h1>Mathilde Web App (Host)</h1>
      <React.Suspense fallback={<div>Loading components...</div>}>
        <Header />
        <Button />
      </React.Suspense>
    </div>
  );
};

export default App;
```

---

## 📋 Scripts disponibles

### `npm run dev`
Inicia el servidor de desarrollo en el puerto `5000`.

### `npm run build`
Construye la aplicación para producción en la carpeta `dist`.

### `npm run preview`
Sirve la aplicación construida localmente para verificar el build.

---

## 🧩 Dependencias compartidas

Para evitar duplicados y conflictos, las siguientes dependencias están configuradas como **singleton** y compartidas entre el host y el microfrontend:

- `react`
- `react-dom`
- `react-router-dom`

Asegúrate de que ambas aplicaciones tengan las mismas versiones de estas dependencias.

---

## ⚙️ Configuración de `.gitignore`

El archivo `.gitignore` está configurado para excluir:

- Dependencias (`node_modules/`)
- Archivos de salida (`dist/`, `.vite/`)
- Configuraciones locales (`.env`, `.vscode/`)
- Archivos de logs y cachés

```gitignore
# Dependencias de Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Archivos de compilación y distribución
dist/
build/
.vite/

# Configuración de desarrollo local
.env
.env.*.local
*.local

# Archivos de configuración de logs y caches
*.log
.cache/
.DS_Store
.vscode/
.idea/
*.swp
*.swo

# Configuración de testing
coverage/
*.test.js
*.test.ts
*.test.tsx
```

---

## ⚡ Cómo ejecutar el proyecto

### 1. Clona el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
```

### 2. Instala las dependencias:
```bash
npm install
```

### 3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

### 4. Verifica el microfrontend remoto:
Asegúrate de que el microfrontend `appmathildeweb` esté corriendo en `http://localhost:5173`.

---

## 🌐 Notas importantes

1. **Sincronización de dependencias**:  
   El host y el microfrontend deben usar las mismas versiones de `react`, `react-dom` y `react-router-dom` para evitar conflictos.

2. **Carga de módulos remotos**:  
   Asegúrate de que el archivo `remoteEntry.js` del microfrontend sea accesible desde el host.

3. **Compatibilidad con navegadores**:  
   Este proyecto está configurado con `target: 'esnext'`, lo que requiere navegadores modernos para funcionar correctamente.

---
