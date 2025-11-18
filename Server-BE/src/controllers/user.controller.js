import { userService } from "../services/user.services.js";

class UserController {
    async getUsers(req, res) {
        try {
            const data = await userService.getUsers();
            console.info("Usuarios extraídos de la base de datos exitosamente")
            res.status(200).json(data)
        }
        catch (err) {
            res.status(500).json({ message: err.message })
            console.error("Error al buscar o en la extración de los usuarios.")
        }
    }

    async getUserById(req, res) {
        try {
            // Al parecer el parsing se hace en el controlador, no en el service...
            // A las legales, se hace con un validator supuestamente...
            const id = parseInt(req.params.id)
        
            const data = await userService.getUserById(id);
            console.info("Usuario encontrado y extraído de la base de datos exitosamente");
            res.status(200).json(data);
        }
        catch(err) {
            res.status(500).json({ error: err.message })
            console.error("Error al buscar o en la extración del usuario.")
        }
    }

    async createUser(req, res) {
        try {
            const { name, email, password } = req.body;

            const data = await userService.postUser(name, email, password);
            console.info("Usuario agregado a la base de datos exitosamente.")
            res.status(201).json({
                userCreated: {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    password: data.password
                }
            })
        } 
        catch (err) {
            res.status(500).json({ error: err.message })
            console.error("Error en la base de datos. No se ha creado el usuario.")    
        }
    }

    async updateUser(req, res) {
        try {
            const id = parseInt(req.params.id)
            const { name, email, password } = req.body;
            
            const data = await userService.putUser(id, name, email, password);
            console.info("Usuario editado exitosamente.");
            res.status(200).json({
                userBefore: {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    password: data.password
                },
                userAfter: {
                    id: data.id,
                    name: name,
                    email: email,
                    password: password
                }
            })

        } 
        catch (err) {
            res.status(500).json({ error: err.message });
            console.error("Error al editar el usuario. No se han guardado cambios.")
        }
    }

    async deleteUser(req, res) {
        try {
            const id = parseInt(req.params.id);

            const data = await userService.deleteUserById(id);
            console.info("Usuario eliminado de la base de datos exitosamente.")
            res.status(200).json({
                userDeleted: {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    password: data.password
                }
            })

        } catch (err) {
            res.status(500).json({ error: err.message })
            console.error("Error al borrar el usuario. Usuario sigue existiendo en la base de datos.")
        }
    }
}

export const userController = new UserController();