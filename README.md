# Repositorio de Taller 9

Este repositorio corresponde al desarrollo de taller 9 de ingeniería del curso INF3245-1 de la PUCV, segundo semestre de 2026.

## ¿Qué encontrarás?

Además del desarrollo completo del taller encontrarás dos apartados con el desafío;

### 1. Página de registro (/registro)

Pruebas de existencia de errores;

<img width="714" height="449" alt="Screenshot 2026-10-26 204812" src="https://github.com/user-attachments/assets/15edcb66-c1de-4d97-8828-d4d240a25bed" />

"Nombre de usuario ya existe" correspondiente al error 409 <img width="272" height="18" alt="Screenshot 2026-10-26 204943" src="https://github.com/user-attachments/assets/25ec28ea-a85e-4262-9619-9d45e18d0b73" />

<img width="714" height="449" alt="Screenshot 2026-10-26 204812" src="https://github.com/user-attachments/assets/2ec091d5-414f-4509-b05d-78b1380cd4fb" />

"La contraseña debe tener al menos 8 caracteres" Que corresponde al error 400 <img width="277" height="16" alt="Screenshot 2026-10-26 204948" src="https://github.com/user-attachments/assets/b233f0cd-7be7-45ca-bafd-7d82d814cea3" />

Con esto se satisface el criterio de demostrar pruebas del código para el primer punto.

### 2. Ruta PUT /api/usuarios/yo/password

Está en usuarios.js y está protegida con verificarToken. Recibe { passwordActual, passwordNueva }.

| Caso | Respuesta |
|---|---|
| Sin token | `401` "Token requerido" |
| Falta alguno de los dos campos | `400` |
| La contraseña nueva tiene menos de 8 caracteres (igual que en el registro) | `400` |
| `bcrypt.compare` falla con la contraseña actual | `401` "La contraseña actual es incorrecta" |
| Todo bien | Se guarda el hash nuevo y responde `200` `{ "mensaje": "Contraseña actualizada" }` |

Finalmente, para correr y comprobar el código funcionando se debe clonar la carpeta actual y correr los comandos:

`npm run dev`

Para backend, y para frontend;

`ionic react`

con los correspondientes cd e instalación de dependencias si fuese necesario.
