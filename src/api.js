import axios from "axios";

const api = axios.create({
    baseURL: 'https://be-teste-tec-b5dc1a90bbd0.herokuapp.com/api/atividades/list'
});

export default api;