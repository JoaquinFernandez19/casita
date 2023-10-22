interface IMovie {
	name: string;
	image: string;
	status: 'Vista' | 'Pendiente' | 'Cancelada';
	rating: number;
	provider: string;
}

export type { IMovie };
