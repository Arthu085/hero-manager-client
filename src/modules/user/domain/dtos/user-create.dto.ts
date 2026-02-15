import z from "zod";
import {
	RoleEnum,
	RoleEnumTranslated,
} from "../../../../shared/domain/enums/role.enum";
import { buildEnumHelpers } from "../../../../shared/utils/enum.util";

export const roleConfig = buildEnumHelpers(RoleEnum, RoleEnumTranslated);

export const userCreateSchema = z.object({
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
		.string({ error: "Personagem é obrigatório" })
		.min(3, { error: "Personagem deve ter no mínimo 3 caracteres" })
		.max(200, { error: "Personagem deve ter no máximo 200 caracteres" }),
	role: z.enum(roleConfig.values, { error: "Função inválida" }),
});

export type IUserCreateDto = z.infer<typeof userCreateSchema>;
