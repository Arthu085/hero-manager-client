import { z } from "zod";

export const loginSchema = z.object({
	email: z
		.email({ error: "E-mail inválido" })
		.max(250, { error: "E-mail deve ter no máximo 250 caracteres" }),
	password: z
		.string({ error: "Senha é obrigatória" })
		.min(6, { error: "Senha deve ter no mínimo 6 caracteres" })
		.max(100, { error: "Senha deve ter no máximo 100 caracteres" }),
});

export type ILoginDto = z.infer<typeof loginSchema>;
