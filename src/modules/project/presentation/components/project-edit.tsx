import { Form } from "antd";
import type { IEditProps } from "../../../../shared/domain/interfaces/edit.interface";
import { useFormFetch } from "../../../../shared/hooks/use-form-fetch";
import { useFormSubmit } from "../../../../shared/hooks/use-form-submit";
import { AppModal } from "../../../../shared/components/modals/app-modal";
import { AppInput } from "../../../../shared/components/inputs/app-input";
import type { IProjectListData } from "../../domain/dtos/project-list-response.dto";
import { projectService } from "../../infra/project.service";
import { useSelectOptions } from "../../../../shared/hooks/use-select-option";
import {
	projectUpdateSchema,
	type IProjectUpdateDto,
} from "../../domain/dtos/project-update.dto";
import { AppTextArea } from "../../../../shared/components/inputs/app-text-area-input";
import { AppNumberInput } from "../../../../shared/components/inputs/app-number-input";
import { AppUserSelect } from "../../../../shared/components/selects/user/app-user-select";

export const ProjectEdit = ({ open, onClose, uuid, onSuccess }: IEditProps) => {
	const [form] = Form.useForm();
	const { optionsMap, loadOption } = useSelectOptions();

	const { loading: fetching } = useFormFetch<IProjectListData, any>(
		uuid,
		open,
		projectService.findOne,
		form,
		(data) => ({
			...data,
			user: loadOption("user", data.user),
		}),
		onClose,
	);

	const handleUpdate = async (dto: IProjectUpdateDto) => {
		if (!uuid) throw new Error("UUID não fornecido");
		return projectService.update(uuid, dto);
	};

	const { saving, handleSubmit } = useFormSubmit<IProjectUpdateDto>(
		handleUpdate,
		() => {
			onSuccess?.();
			onClose();
		},
	);

	return (
		<AppModal
			title="Editar Projeto"
			open={open}
			onCancel={onClose}
			onOk={form.submit}
			confirmLoading={saving}
			loading={fetching}>
			<Form<IProjectUpdateDto>
				form={form}
				layout="vertical"
				onFinish={handleSubmit}
				disabled={saving}
				preserve={false}>
				<AppInput
					name="name"
					label="Nome do Projeto"
					placeholder="Nome do projeto..."
					zodSchema={projectUpdateSchema.shape.name}
					maxLength={200}
				/>
				<AppTextArea
					name="description"
					label="Descrição"
					placeholder="Descrição do projeto..."
					zodSchema={projectUpdateSchema.shape.description}
					maxLength={1000}
				/>
				<AppNumberInput
					name="agility"
					label="Agilidade"
					placeholder="Agilidade do projeto..."
					zodSchema={projectUpdateSchema.shape.agility}
					max={100}
					min={0}
					precision={2}
					suffix="%"
				/>
				<AppNumberInput
					name="enchantment"
					label="Encantamento"
					placeholder="Encantamento do projeto..."
					zodSchema={projectUpdateSchema.shape.enchantment}
					max={100}
					min={0}
					precision={2}
					suffix="%"
				/>
				<AppNumberInput
					name="efficiency"
					label="Eficiência"
					placeholder="Eficiência do projeto..."
					zodSchema={projectUpdateSchema.shape.efficiency}
					max={100}
					min={0}
					precision={2}
					suffix="%"
				/>
				<AppNumberInput
					name="excellence"
					label="Excelência"
					placeholder="Excelência do projeto..."
					zodSchema={projectUpdateSchema.shape.excellence}
					max={100}
					min={0}
					precision={2}
					suffix="%"
				/>
				<AppNumberInput
					name="transparency"
					label="Transparência"
					placeholder="Transparência do projeto..."
					zodSchema={projectUpdateSchema.shape.transparency}
					max={100}
					min={0}
					precision={2}
					suffix="%"
				/>
				<AppNumberInput
					name="ambition"
					label="Ambição"
					placeholder="Ambição do projeto..."
					zodSchema={projectUpdateSchema.shape.ambition}
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
					zodSchema={projectUpdateSchema.shape.user}
					options={optionsMap.user}
				/>
			</Form>
		</AppModal>
	);
};
