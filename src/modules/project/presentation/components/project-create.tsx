import { Form } from "antd";
import type { ICreateProps } from "../../../../shared/domain/interfaces/create.interface";
import { useFormSubmit } from "../../../../shared/hooks/use-form-submit";
import { AppModal } from "../../../../shared/components/modals/app-modal";
import { AppInput } from "../../../../shared/components/inputs/app-input";
import {
	projectCreateSchema,
	type IProjectCreateDto,
} from "../../domain/dtos/project-create.dto";
import { projectService } from "../../infra/project.service";
import { AppTextArea } from "../../../../shared/components/inputs/app-text-area-input";
import { AppNumberInput } from "../../../../shared/components/inputs/app-number-input";
import { AppUserSelect } from "../../../../shared/components/selects/user/app-user-select";

export const ProjectCreate = ({ open, onClose, onSuccess }: ICreateProps) => {
	const [form] = Form.useForm();

	const handleCreate = async (dto: IProjectCreateDto) => {
		return projectService.create(dto);
	};

	const { saving, handleSubmit } = useFormSubmit<IProjectCreateDto>(
		handleCreate,
		() => {
			onSuccess?.();
			onClose();
		},
	);

	return (
		<AppModal
			title="Criar Projeto"
			open={open}
			onCancel={onClose}
			onOk={form.submit}
			confirmLoading={saving}>
			<Form<IProjectCreateDto>
				form={form}
				layout="vertical"
				onFinish={handleSubmit}
				disabled={saving}
				preserve={false}>
				<AppInput
					name="name"
					label="Nome do Projeto"
					placeholder="Nome do projeto..."
					zodSchema={projectCreateSchema.shape.name}
					maxLength={200}
				/>
				<AppTextArea
					name="description"
					label="Descrição"
					placeholder="Descrição do projeto..."
					zodSchema={projectCreateSchema.shape.description}
					maxLength={1000}
				/>
				<AppNumberInput
					name="agility"
					label="Agilidade"
					placeholder="Agilidade do projeto..."
					zodSchema={projectCreateSchema.shape.agility}
					max={100}
					min={0}
					precision={2}
					suffix="%"
				/>
				<AppNumberInput
					name="enchantment"
					label="Encantamento"
					placeholder="Encantamento do projeto..."
					zodSchema={projectCreateSchema.shape.enchantment}
					max={100}
					min={0}
					precision={2}
					suffix="%"
				/>
				<AppNumberInput
					name="efficiency"
					label="Eficiência"
					placeholder="Eficiência do projeto..."
					zodSchema={projectCreateSchema.shape.efficiency}
					max={100}
					min={0}
					precision={2}
					suffix="%"
				/>
				<AppNumberInput
					name="excellence"
					label="Excelência"
					placeholder="Excelência do projeto..."
					zodSchema={projectCreateSchema.shape.excellence}
					max={100}
					min={0}
					precision={2}
					suffix="%"
				/>
				<AppNumberInput
					name="transparency"
					label="Transparência"
					placeholder="Transparência do projeto..."
					zodSchema={projectCreateSchema.shape.transparency}
					max={100}
					min={0}
					precision={2}
					suffix="%"
				/>
				<AppNumberInput
					name="ambition"
					label="Ambição"
					placeholder="Ambição do projeto..."
					zodSchema={projectCreateSchema.shape.ambition}
					max={100}
					min={0}
					precision={2}
					suffix="%"
				/>
				<AppUserSelect
					name="user"
					label="Responsável"
					placeholder="Selecione o responsável pelo projeto..."
					showSearch
					zodSchema={projectCreateSchema.shape.user}
				/>
			</Form>
		</AppModal>
	);
};
