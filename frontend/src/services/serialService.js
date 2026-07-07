import api from "./api";

export const getSerials = () => {
    return api.get("/serials");
};