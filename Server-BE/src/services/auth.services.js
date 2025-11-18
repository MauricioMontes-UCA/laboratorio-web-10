import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { userRepository } from "../repositories/user.repository.js";
import { generateToken } from "../utils/auth.utils.js";

dotenv.config()

class AuthService {
    async verifyCredentials(email, password) {
        try {
            // Los datos ya vienen validados y sanitizados por el validador
            
            // Buscar al usuario por email
            const user = await userRepository.selectByEmail(email);
            if (!user) {
                throw new Error("Credenciales inválidas");
            }
            
            // Comparar la contraseña con el hash almacenado
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Credenciales inválidas");
            }
            
            // Si todo es correcto, generar el JWT y borrar información del usuario no necesaria
            const token = generateToken(user.id, user.username, user.email);
            delete user.password_hash;
            
            // Devolver el token y el usuario
            return {
                user: user,
                token: token
            };
        } 
        catch (err) {
            // Para cualquier otro tipo de error
            throw new Error("Error en el servidor durante el login: " + err.message);
        }
    }
}

export const authService = new AuthService();
