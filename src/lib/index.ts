import { users } from './localdb';
import type { User } from './types/user';

function validateUserLogin(password: string): User | false {
	const verifiedUser = users.find((user) => password === user.password);

	return verifiedUser ? { name: verifiedUser.name } : false;
}

export { validateUserLogin };
