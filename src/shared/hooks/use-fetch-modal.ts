import { useState, useEffect } from "react";
import { Modal } from "antd";
import type { IApiResponse } from "../../core/interfaces/response/api-response.interface";
import { getErrorMessage } from "../utils/api-error.util";

type FetcherFunction<TData> = (uuid: string) => Promise<IApiResponse<TData>>;

export const useFetchModal = <TData>(
	uuid: string | null | undefined,
	open: boolean,
	fetcher: FetcherFunction<TData>,
	onError?: () => void,
) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<TData | null>(null);

	useEffect(() => {
		if (open && uuid) {
			fetchData(uuid);
		} else if (!open) {
			setData(null);
		}
	}, [open, uuid]);

	const fetchData = async (id: string) => {
		try {
			setLoading(true);
			const response = await fetcher(id);

			if (response.success && response.data) {
				setData(response.data);
			} else {
				handleError(response.message || "Erro ao carregar dados");
			}
		} catch (error) {
			handleError(getErrorMessage(error));
		} finally {
			setLoading(false);
		}
	};

	const handleError = (msg: string) => {
		if (onError) onError();

		Modal.error({
			title: "Erro",
			content: msg,
		});
	};

	return { loading, data };
};
