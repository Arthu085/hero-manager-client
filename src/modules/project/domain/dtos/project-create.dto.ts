import z from "zod";

export const projectCreateSchema = z.object({
	name: z
		.string({ error: "Nome é obrigatório" })
		.min(3, { error: "Nome deve ter no mínimo 3 caracteres" })
		.max(200, { error: "Nome deve ter no máximo 200 caracteres" }),
	description: z
		.string({ error: "Descrição é obrigatória" })
		.min(10, { error: "Descrição deve ter no mínimo 10 caracteres" })
		.max(1000, { error: "Descrição deve ter no máximo 1000 caracteres" }),
	agility: z
		.number({ error: "Agilidade é obrigatória" })
		.min(0, { error: "Agilidade deve ser no mínimo 0" })
		.max(100, { error: "Agilidade deve ser no máximo 100" }),
	enchantment: z
		.number({ error: "Encantamento é obrigatório" })
		.min(0, { error: "Encantamento deve ser no mínimo 0" })
		.max(100, { error: "Encantamento deve ser no máximo 100" }),
	efficiency: z
		.number({ error: "Eficiência é obrigatória" })
		.min(0, { error: "Eficiência deve ser no mínimo 0" })
		.max(100, { error: "Eficiência deve ser no máximo 100" }),
	excellence: z
		.number({ error: "Excelência é obrigatória" })
		.min(0, { error: "Excelência deve ser no mínimo 0" })
		.max(100, { error: "Excelência deve ser no máximo 100" }),
	transparency: z
		.number({ error: "Transparência é obrigatória" })
		.min(0, { error: "Transparência deve ser no mínimo 0" })
		.max(100, { error: "Transparência deve ser no máximo 100" }),
	ambition: z
		.number({ error: "Ambição é obrigatória" })
		.min(0, { error: "Ambição deve ser no mínimo 0" })
		.max(100, { error: "Ambição deve ser no máximo 100" }),
	user: z.uuid({ error: "Responsável é obrigatório" }),
});

export type IProjectCreateDto = z.infer<typeof projectCreateSchema>;
