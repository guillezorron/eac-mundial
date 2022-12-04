import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

await prisma.group.createMany({
	data: [
		{ name: 'A' },
		{ name: 'B' },
		{ name: 'C' },
		{ name: 'D' },
		{ name: 'E' },
		{ name: 'F' },
		{ name: 'G' },
		{ name: 'H' },
	],
});

await prisma.nationalTeam.createMany({
	data: [
		{ name: 'Qatar', groupId: 1 },
		{ name: 'Ecuador', groupId: 1 },
		{ name: 'Senegal', groupId: 1 },
		{ name: 'Paises Bajos', groupId: 1 },
		{ name: 'Inglaterra', groupId: 2 },
		{ name: 'Iran', groupId: 2 },
		{ name: 'Estados Unidos', groupId: 2 },
		{ name: 'Gales', groupId: 2 },
		{ name: 'Argentina', groupId: 3 },
		{ name: 'Arabia Saudita', groupId: 3 },
		{ name: 'Mexico', groupId: 3 },
		{ name: 'Polonia', groupId: 3 },
		{ name: 'Francia', groupId: 4 },
		{ name: 'Australia', groupId: 4 },
		{ name: 'Dinamarca', groupId: 4 },
		{ name: 'Tunez', groupId: 4 },
		{ name: 'España', groupId: 5 },
		{ name: 'Costa Rica', groupId: 5 },
		{ name: 'Alemania', groupId: 5 },
		{ name: 'Japon', groupId: 5 },
		{ name: 'Belgica', groupId: 6 },
		{ name: 'Canada', groupId: 6 },
		{ name: 'Marruecos', groupId: 6 },
		{ name: 'Croacia', groupId: 6 },
		{ name: 'Brasil', groupId: 7 },
		{ name: 'Serbia', groupId: 7 },
		{ name: 'Suiza', groupId: 7 },
		{ name: 'Camerun', groupId: 7 },
		{ name: 'Portugal', groupId: 8 },
		{ name: 'Ghana', groupId: 8 },
		{ name: 'Uruguay', groupId: 8 },
		{ name: 'Corea del Sur', groupId: 8 },
	],
})
