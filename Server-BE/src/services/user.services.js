import bcrypt from "bcrypt";

import { userRepository } from "../repositories/user.repository.js";

class UserService {
    async getUsers() {
        const results = await userRepository.selectAll();
        return results
    }

    async getUserById(id) {
        const results = await userRepository.selectByID(id);
        return results
    }

    async postUser(name, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const results = await userRepository.insert(name, email, hashedPassword);
        return results
    }

    async putUser(id, name, email, password){
        const hashedPassword = await bcrypt.hash(password, 10);
        const results = await userRepository.update(id, name, email, hashedPassword);
        return results
    }

    async deleteUserById(id) {
        const results = await userRepository.delete(id);
        return results
    }
}

export const userService = new UserService();