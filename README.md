# Frontend - Sistema de Transacciones

Este es el frontend del **Sistema de Transacciones**, desarrollado con **Angular 18**, **PrimeNG** y **TailwindCSS**. Permite la gestión de usuarios y transacciones a través de una interfaz amigable.

## Tecnologías Utilizadas

- **Angular 18** 
- **PrimeNG** (Componentes UI)
- **TailwindCSS** (Estilización)
- **RxJS** (Manejo de datos reactivos)
- **Vite** (Compilación rápida)
- **HTTPClient** (Consumo de API REST)

## Estructura del Proyecto

```
frontend-UI/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── transactions/
│   │   │   ├── transactions-form/
│   │   │   ├── users/
│   │   ├── services/
│   │   │   ├── api.service.ts
│   │   ├── pages/
│   │   │   ├── transactions/
│   │   │   ├── users/
│   │   ├── app.routes.ts
│   │   ├── app.component.ts
│── public/
│── index.html
│── tailwind.config.js
│── package.json
│── vite.config.ts
```

## Instalación y Configuración

### 1 Clonar el Repositorio
```sh
git clone https://github.com/tu-usuario/frontend-transacciones.git
cd frontend-transacciones
```

### 2 Instalar Dependencias
```sh
npm install
```

### 3 Ejecutar en Desarrollo
```sh
ng serve
```
El proyecto correrá en **http://localhost:4200/**.

## 📡 Configuración de la API

Para que el frontend pueda comunicarse con el backend, asegúrate de modificar la URL base en `api.service.ts`:

```ts
private apiUrl = 'http://localhost:3000/api';
```

## Estilos con TailwindCSS
El proyecto usa **TailwindCSS** para estilos personalizados. Se pueden modificar los estilos en `tailwind.config.js`.

```js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Funcionalidades Principales

### Gestión de Transacciones
✅ Listado de transacciones en una tabla interactiva.  
✅ Filtrado por **Folio, RFC, Estado y Rango de Fecha**.  
✅ Creación de nuevas transacciones mediante un modal.  
✅ Eliminación de transacciones con confirmación.  
✅ Actualización del estado de transacciones pendientes.

### Gestión de Usuarios
✅ Listado de usuarios registrados.  
✅ Consulta de usuario por RFC.  
✅ Creación de usuarios.  
✅ Bloqueo de usuarios.  
✅ Eliminación de usuarios.

## Diseño y UX
- **Diseño responsivo** para móviles y escritorio.
- **Uso de componentes de PrimeNG** para una interfaz moderna y rápida.
- **Sombras y bordes redondeados** para mejorar la estética.


## Autores y Contribución
Proyecto desarrollado por Iñaki Rodriguez Morales.
Si deseas contribuir, crea un *pull request* en el repositorio de GitHub.

