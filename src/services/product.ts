import type { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

export async function fetchCardPage({ queryKey, signal }: QueryFunctionContext) {
    const [id] = queryKey;
    const res = await axios.get("/api/cardPage", {
        params: {
            id: id,
        },
        signal,
    });
    return res.data;
}

export async function fetchComment({ queryKey, signal }: QueryFunctionContext) {
	const [_key, id] = queryKey;
	const res = await axios.get("/api/cardPage/comment", {
		params: {
			id: id,
		},
		signal,
	});
	return res.data;
}