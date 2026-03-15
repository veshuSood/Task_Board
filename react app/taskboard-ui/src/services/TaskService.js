import axios from "axios";

const backendUrl = "http://localhost:8080/api/task";

export const getAllTasks = () => {
    return axios.get(backendUrl + "/getAllTasks");
}

export const createTask = (task) => {
    return axios.post(backendUrl + "/createTask", task);
}

export const deleteTask = (id) => {
    return axios.delete(backendUrl + "/deleteTask/" + id);
}