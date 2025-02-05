# 🎨 PintaPoco Backend (NestJS)

Este es el backend de **PintaPoco**, una API construida con **NestJS** que permite gestionar dibujos, almacenándolos en **Cloudinary** y utilizando **Prisma** como ORM para la base de datos.

## 🚀 Tecnologías usadas

- **NestJS** (Framework backend basado en Node.js)
- **Prisma** (ORM para la base de datos)
- **Cloudinary** (Almacenamiento de imágenes en la nube)
- **Express** (Middleware para CORS y manejo de JSON)
- **Jest** (Pruebas unitarias)

---

## 📦 Instalación

### 1️⃣ Clona el repositorio

```sh
git clone https://github.com/Fidoi/PintaPoco-Backend.git
cd pintapoco-backend
```

### 2️⃣ Instala las dependencias

```sh
npm install
```

### 3️⃣ Configura las variables de entorno

Crea un archivo **`.env`** en la raíz del proyecto y añade:

```env
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
ADMIN_API_KEY=tu_clave_secreta

-------------------- DataBase---------------

DB_USER=usuario_database
DB_NAME=nombre_database
DB_PASSWORD=contraseña_database

-------------------Frontend------------------------

URL_FRONTEND=url_del_frontend
```

### 4️⃣ Ejecuta la base de datos con Prisma

```sh
npx prisma migrate dev --name init
```

### 5️⃣ Inicia el servidor

```sh
npm run start
```

Por defecto, la API correrá en `http://localhost:3000`.

---

## 📡 Endpoints

### 🔹 Obtener todos los dibujos

`GET /drawings`
🔑 **Requiere x-api-key**  
📌 **Ejemplo de respuesta:**

```json
[
  {
    "id": "1",
    "name": "Mi Dibujo",
    "imageUrl": "https://cloudinary.com/imagen.png",
    "createdAt": "2025-02-04T10:00:00Z",
    "isNew": true
  }
]
```

### 🔹 Crear un nuevo dibujo

`POST /drawings`
🔑 **Requiere x-api-key**  
📌 **Body:**

```json
{
  "name": "Nuevo Dibujo",
  "imageData": "data:image/png;base64,iVBOR..."
}
```

### 🔹 Eliminar un dibujo

`DELETE /drawings/:id`
🔑 **Requiere x-api-key**

---

## 🛠 Pruebas

Ejecuta las pruebas unitarias con:

```sh
npm run test
```

---

## 📌 Notas

- La API usa **Cloudinary** para el almacenamiento de imágenes.
- El acceso está protegido con una clave API (`x-api-key`).
- Prisma maneja la base de datos y requiere una conexión válida.

---
