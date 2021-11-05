import { api } from "../../../utils";

type Payload = {
    title: string;
    description: string;
    status: string;
};

const setTask = async (data: Payload) => {
    await api.post("/tasks.json", data);
};

export { setTask };