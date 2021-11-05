import { mapToArray } from "../../../helpers/mapToArray";
import { User } from "../../../types";
import { api } from "../../../utils";

type Payload = {
    email: string;
    password: string;
};

const login = async (payload: Payload) => {
    try {
        const response = await api.get("/users.json");
        const users: User[] = mapToArray(response.data);
        const user = users.find(
            (user) =>
                user.email === payload.email && user.password === payload.password
        );
        if (user) {
            return user;
        } else {
            throw new Error("El usuario no existe");
        }
    } catch (e) {
        console.log(e);
    }
};

export { login };

