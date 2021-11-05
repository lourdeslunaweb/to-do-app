import { mapToArray } from "../../../helpers/mapToArray";
import { Task } from "../../../types";
import { api } from "../../../utils";


const getTasks = async (): Promise<Task[]> => {
    const response = await api.get("/tasks.json");
    return mapToArray(response.data)
};

export { getTasks };