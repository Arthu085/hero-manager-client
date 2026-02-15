import { useCallback } from "react";
import {
	AppAsyncSelect,
	type AppAsyncSelectProps,
	type FetchResult,
} from "../app-async-select";
import type { IUserListData } from "../../../../modules/user/domain/dtos/user-list-response.dto";
import type { IUserFilterDto } from "../../../../modules/user/domain/dtos/user-filter.dto";
import { StatusEnum } from "../../../domain/enums/status.enum";
import { userService } from "../../../../modules/user/infra/user.service";

interface AppUserSelectProps extends Omit<
	AppAsyncSelectProps<IUserListData>,
	"fetchOptions" | "mapOption"
> {
	pageSize?: number;
}

export const AppUserSelect = ({
	pageSize = 20,
	placeholder = "Selecione o usuário...",
	...rest
}: AppUserSelectProps) => {
	const fetchUsers = useCallback(
		async ({
			search,
			page,
		}: {
			search: string;
			page: number;
		}): Promise<FetchResult<IUserListData>> => {
			const filters: IUserFilterDto = {
				page: page,
				limit: pageSize,
				name: search || undefined,
				status: StatusEnum.ATIVO,
			};

			const response = await userService.findAll(filters);

			if (!response.success || !response.data) {
				throw new Error(response.message || "Erro ao carregar usuários");
			}

			const { data, meta } = response.data;

			const hasMore = meta ? meta.page < meta.lastPage : false;

			return {
				data,
				hasMore,
			};
		},
		[pageSize],
	);

	return (
		<AppAsyncSelect<IUserListData>
			placeholder={placeholder}
			fetchOptions={fetchUsers}
			mapOption={(user) => ({
				label: user.name,
				value: user.uuid,
			})}
			{...rest}
		/>
	);
};
