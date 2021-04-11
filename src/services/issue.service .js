import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api'

class IssueDataService {
  
  getAll() {
    return axios.get(API_URL + "/issues", { headers: authHeader() });
  }

  get(id) {
    return axios.get(API_URL + `/issues/${id}`, { headers: authHeader() });
  }

  create(data) {
    return axios.post(API_URL + `/issues`, data, { headers: authHeader() });
  }

  update(id, data) {
    return axios.put(API_URL + `/issues/${id}`, data, { headers: authHeader() });
  }

  delete(id) {
    return axios.delete(API_URL + `/issues/${id}`, { headers: authHeader() });
  }

}

export default new IssueDataService();