import {getAllOrgs,createOrg,deleteOrg} from "../controllers/org.controller.js"

async function OrgRouter(fastify, options) {
	fastify.post("/getAllOrgs", getAllOrgs);
    fastify.post("/createOrg", createOrg);
    fastify.post("/deleteOrg", deleteOrg);
}

export default OrgRouter