import axios from "axios";

const backendUrl = "https://task-board-vmqp.onrender.com/api/task";

export const getAllTasks = () => {
    return axios.get(backendUrl + "/getAllTasks");
}

export const createTask = (task) => {
    return axios.post(backendUrl + "/createTask", task);
}

export const deleteTask = (id) => {
    return axios.delete(backendUrl + "/deleteTask/" + id);
}
