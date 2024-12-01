import { Request,Response } from "express";
import { User } from "../../User/Model/user.model";
import mysqlDataSource from '../../../db/db.connection';
const userRepository = mysqlDataSource.getRepository(User)
import bcrypt from 'bcryptjs';

export const signUp =async(req:Request,res:Response) => {
    const { name, email, password,role } = req.body;
        const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = hashedPassword;
    user.role = role;

    await userRepository.save(user);

    // Return the created user in the response
    res.status(201).json({ user });
}