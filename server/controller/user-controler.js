import User from "../modal/user.js";
import bcypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from '../modal/token.js'
dotenv.config();
export const signUpUser = async (request, response) => {
    try {
        const salt = await bcypt.genSalt(5);
        const hashedPassword = await bcypt.hash(request.body.password, salt);

        const user = {
            username: request.body.username,
            name: request.body.name,
            password: hashedPassword
        }

        // const user = request.body;

        const newUser = new User(user);
        await newUser.save();
        return response.status(200).json({msg: "User created successfully"});
    }
    catch (error) {
        return response.status(500).json({msg: "Error while signing up user"});
    }
}

export const loginUser = async (request, reponse) => {
    let user = await User.findOne({ username: request.body.username });
    if(!user) {
        return reponse.status(400).json({msg: 'Username not found'});
    }
    try {
        let match = await bcypt.compare(request.body.password, user.password);
        if(match) {
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, {expiresIn: '15m'});
            const refrestToken = jwt.sign(user.toJSON(), process.env.REFREST_SECRET_KEY)
            const newToken = new Token({token: refrestToken});
            await newToken.save();

            return reponse.status(200).json({ accessToken: accessToken, refrestToken: refrestToken, name: user.name, username:user.username});
        }
        else {
            reponse.status(400).json({ msg: 'Password does not match'});
        }
    }
    catch (error) {
        return reponse.status(500).json({ msg: 'Error while logging in user'});
    }
} 