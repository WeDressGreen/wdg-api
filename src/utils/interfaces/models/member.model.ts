import { IRank } from "./rank.model";
import { ISession } from "./session.model";

export interface IMember {
	id: string;
	idGroup?: number;
	name: string;
	mail: string;
	psswd: string;
	rank: IRank;
	session?: ISession[];
}