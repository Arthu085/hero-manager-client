import { z } from "zod";

export const registerSchema = z.object({
	name: z
		.string({ error: "Nome é obrigatório" })
		.min(3, { error: "Nome deve ter no mínimo 3 caracteres" })
		.max(200, { error: "Nome deve ter no máximo 200 caracteres" }),
	email: z
		.email({ error: "E-mail inválido" })
		.max(250, { error: "E-mail deve ter no máximo 250 caracteres" }),
	password: z
		.string({ error: "Senha é obrigatória" })
		.min(6, { error: "Senha deve ter no mínimo 6 caracteres" })
		.max(100, { error: "Senha deve ter no máximo 100 caracteres" }),
	character: z
		.string({ error: "Nome do personagem é obrigatório" })
		.min(3, { error: "Nome do personagem deve ter no mínimo 3 caracteres" })
		.max(200, {
			error: "Nome do personagem deve ter no máximo 200 caracteres",
		}),
});

export type IRegisterDto = z.infer<typeof registerSchema>;
