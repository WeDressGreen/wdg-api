export interface IRank {
	id: number;
	label: string;
	idChild: number | null;
	permissions: string[];
}