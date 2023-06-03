import { contexts } from 'security-context';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		contexts
	};
};
