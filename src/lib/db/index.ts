import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

export const getAllUsers = async () => {
	const users = await prisma.user.findMany();
	return users;
};
