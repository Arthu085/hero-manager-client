import type { IEnvConfig } from "../../interfaces/config/env-config.interface";

const env: IEnvConfig = {
	API_URL: import.meta.env.VITE_API_URL || "http://localhost:3000",
};

export const AppConfig = Object.freeze(env);
