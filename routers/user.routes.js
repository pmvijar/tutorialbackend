import {getAllUsers,createUser,deleteUser} from "../controllers/user.controller.js"

async function userRouter(fastify, options) {
	fastify.post("/getAllUsers", getAllUsers);
    fastify.post("/createUser", createUser);
    fastify.post("/deleteUser", deleteUser);
}

export default userRouter