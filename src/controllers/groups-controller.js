import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const indexGroups =  async ({ body }, res) => {
	const groups = await prisma.group.findMany({
		include:{
			nationalTeams: true
		}
	});
	res.status(200).send(groups)
};

export { indexGroups };
