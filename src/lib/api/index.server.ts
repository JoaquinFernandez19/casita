import type { User } from '$lib/types/user';
import { users } from './localdb.server';

function validateUserLogin(password: string): User | false {
	const verifiedUser = users.find((user) => password === user.password);

	return verifiedUser ? { name: verifiedUser.name } : false;
}

export { validateUserLogin };
