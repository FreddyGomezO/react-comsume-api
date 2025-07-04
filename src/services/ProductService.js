import axios from 'axios';

export class ProductService {
    baseUrl = "https://freddy-production-api-5977f618ffa6.herokuapp.com/api/products";

    create(product) {
        return axios.post(this.baseUrl, product, { 
            withCredentials: true 
        }).then(res => res.data);
    }

    readAll() {
        return axios.get(this.baseUrl, { 
            withCredentials: true 
        }).then(res => res.data);
    }

    update(product) {
        return axios.put(`${this.baseUrl}/${product._id}`, product, { 
            withCredentials: true 
        }).then(res => res.data);
    }

    delete(id) {
        return axios.delete(`${this.baseUrl}/${id}`, { 
            withCredentials: true 
        }).then(res => res.data);
    }
}