# CI-Green

## Visión general

**CI-Green** es un proyecto Node.js con APIs para gestionar clientes, empleados y productos.

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/yracnet/ci01-uargm
cd ci-green

# Instalar dependencias
yarn install
```

## Execucion

```bash
# Iniciar servidor de desarrollo con Vite
yarn dev

# Compilar archivos TypeScript y luego construir con Vite
yarn build

# Ejecutar pruebas con cobertura
yarn test
```

## APIs

### Clientes

```json
{
  "nombre": "string",
  "email": "string",
  "telefono": "string",
  "direccion": "string",
  "tipoDocumento": "string",
  "documento": "string",
  "fechaRegistro": "Date"
}
```

- **GET** `/api/clientes/`
  Obtiene una lista de clientes.

- **PUT** `/api/clientes/`
  Crea un nuevo cliente.

- **POST** `/api/clientes/`
  Actualiza un cliente existente especificado por ID.

- **GET** `/api/clientes/:id`
  Obtiene detalles de un cliente específico.

- **PATCH** `/api/clientes/:id`
  Actualiza campos específicos de un cliente.

- **DELETE** `/api/clientes/:id`
  Elimina un cliente especificado por ID.

### Empleados

```json
{
  "nombre": "string",
  "cargo": "string",
  "departamento": "string",
  "fechaContratacion": "Date",
  "salario": "number",
  "email": "string",
  "telefono": "string"
}
```

- **GET** `/api/empleados/`
  Obtiene una lista de empleados.

- **PUT** `/api/empleados/`
  Crea un nuevo empleado.

- **POST** `/api/empleados/`
  Actualiza un empleado existente especificado por ID.

- **GET** `/api/empleados/:id`
  Obtiene detalles de un empleado específico.

- **PATCH** `/api/empleados/:id`
  Actualiza campos específicos de un empleado.

- **DELETE** `/api/empleados/:id`
  Elimina un empleado especificado por ID.

### Productos

```json
{
  "nombre": "string",
  "descripcion": "string",
  "precio": "number",
  "stock": "number",
  "categoria": "string",
  "proveedor": "string",
  "fechaRegistro": "Date"
}
```

- **GET** `/api/productos/`
  Obtiene una lista de productos.

- **PUT** `/api/productos/`
  Crea un nuevo producto.

- **POST** `/api/productos/`
  Actualiza un producto existente especificado por ID.

- **GET** `/api/productos/:id`
  Obtiene detalles de un producto específico.

- **PATCH** `/api/productos/:id`
  Actualiza campos específicos de un producto.

- **DELETE** `/api/productos/:id`
  Elimina un producto especificado por ID.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT
