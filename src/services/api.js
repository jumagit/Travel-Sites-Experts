import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:8000/api',
    baseURL: 'https://api.travelsitesexperts.com/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default {
    getProjects() {
        return api.get('/projects');
    },
    getProject(id) {
        return api.get(`/projects/${id}`);
    },
    createProject(data) {
        return api.post('/projects', data);
    },
    updateProject(id, data) {
        return api.put(`/projects/${id}`, data);
    },
    deleteProject(id) {
        return api.delete(`/projects/${id}`);
    }
};