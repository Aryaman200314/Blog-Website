import User from "../modal/user.js";

export const signUpUser = async (request, response) => {
    try {
        const user = request.body;

        const newUser = new User(user);
        await newUser.save();
        return response.status(200).json({msg: "User created successfully"});
    }
    catch (error) {
        return response.status(500).json({msg: "Error while signing up user"});
    }
}