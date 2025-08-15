# 🍽 Plataforma de Recetas Culinarias

API REST desarrollada con **Node.js, Express y MongoDB (Native Driver)** que permite gestionar usuarios, recetas e ingredientes, además de buscar recetas por ingrediente y listar recetas por usuario.

---

## 📦 Instalación y ejecución

1. **Clonar el repositorio**
```bash
git clone https://github.com/usuario/recetas-culinarias.git
cd recetas-culinarias
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno (`.env`)**
```env
MONGO_URI=mongodb://localhost:27017
DB_NAME=recetas_culinarias
PORT=3000
```

4. **Insertar datos de prueba**
```bash
npm run seed
```

5. **Iniciar el servidor**
```bash
npm run dev
```

---

## 📂 Estructura del proyecto

```
src/
 ├── config/db.js                # Conexión a MongoDB
 ├── controllers/                # Lógica de negocio
 ├── routes/                      # Definición de rutas
 ├── services/                    # Acceso a datos (MongoDB)
 ├── dataset.js                   # Script para datos iniciales
 └── server.js                    # Punto de entrada
```

---

## 📌 Endpoints

### **1. Usuarios**

#### Crear usuario
- **POST** `/users`
- **Descripción:** Crea un nuevo usuario en la plataforma.
- **Ejemplo request:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com"
}
```
- **Ejemplo response:**
```json
{
  "_id": "64f02a7f1234567890abcd12",
  "name": "Juan Pérez",
  "email": "juan@example.com"
}
```

#### Listar todos los usuarios
- **GET** `/users`
- **Descripción:** Obtiene todos los usuarios registrados.
- **Response:**
```json
[
  { "_id": "64f02a7f1234567890abcd12", "name": "Juan Pérez", "email": "juan@example.com" }
]
```

#### Obtener usuario por ID
- **GET** `/users/:id`
- **Descripción:** Obtiene la información de un usuario específico.

#### Actualizar usuario
- **PUT** `/users/:id`
- **Descripción:** Modifica los datos de un usuario existente.
- **Request ejemplo:**
```json
{
  "name": "Juan Actualizado"
}
```

#### Eliminar usuario
- **DELETE** `/users/:id`
- **Descripción:** Elimina un usuario y todas sus recetas asociadas.

---

### **2. Recetas**

#### Crear receta
- **POST** `/recipes/:userId`
- **Descripción:** Crea una receta asociada a un usuario.
- **Request:**
```json
{
  "title": "Pollo al horno",
  "description": "Receta deliciosa de pollo al horno."
}
```

#### Listar todas las recetas
- **GET** `/recipes`
- **Descripción:** Obtiene todas las recetas disponibles.

#### Obtener receta por ID
- **GET** `/recipes/:id`
- **Descripción:** Muestra una receta con todos sus ingredientes.

#### Actualizar receta
- **PUT** `/recipes/:id`
- **Descripción:** Modifica el título o descripción de una receta.

#### Eliminar receta
- **DELETE** `/recipes/:id`
- **Descripción:** Borra una receta.

#### Listar recetas de un usuario
- **GET** `/recipes/user/:userId`
- **Descripción:** Obtiene todas las recetas creadas por un usuario.

---

### **3. Ingredientes**

#### Agregar ingrediente a una receta
- **POST** `/ingredients/:recipeId`
- **Descripción:** Agrega un ingrediente a la receta especificada.
- **Request:**
```json
{
  "name": "Pechuga de pollo"
}
```

#### Listar ingredientes de una receta
- **GET** `/ingredients/:recipeId`
- **Descripción:** Muestra todos los ingredientes de la receta.

#### Eliminar ingrediente
- **DELETE** `/ingredients/:recipeId/:ingredientId`
- **Descripción:** Elimina un ingrediente específico de la receta.

#### Buscar recetas por ingrediente
- **GET** `/ingredients/search/:name`
- **Descripción:** Retorna todas las recetas que contienen el ingrediente buscado.
- **Ejemplo:**
```
GET /ingredients/search/pollo
```
- **Response:**
```json
[
  { "_id": "64f02b8c1234567890abcd34", "title": "Pollo al horno" }
]
```



## 🛠 Tecnologías usadas
- Node.js
- Express
- MongoDB (Native Driver)
- Dotenv



## 👥 Autores

- Juan Jose Prada Contreras
- Jerson Fuentes Parra