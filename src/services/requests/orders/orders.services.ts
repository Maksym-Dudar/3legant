import { instance } from "../axios.interceptor";
import { API } from "@/config/api.config";
import type { IOrders } from "@/shared/types/orders/orders";
import type { IOrdersDto } from "./dto.type";

class OrdersService {
    constructor() {}

    async getOrders(signal?: AbortSignal): Promise<IOrders[]> {
        const res = await instance.get<IOrdersDto[]>(API.USER_ORDERS, { signal });
        const data = res.data.map((val) => ({ ...val, createdAt: new Date(val.createdAt) }) );
        return data;
    }
}

export const ordersService = new OrdersService();
