import { UUID } from "crypto";

export interface ISession {
	id: UUID;
	idSteam: string;
	start: Date;
	end: Date;
}