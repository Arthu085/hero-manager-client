import type z from "zod";
import { projectCreateSchema } from "./project-create.dto";

export const projectUpdateSchema = projectCreateSchema.partial();

export type IProjectUpdateDto = z.infer<typeof projectUpdateSchema>;
