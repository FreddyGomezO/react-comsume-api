import axios from 'axios';

export class ProductService {
    baseUrl = "https://freddy-production-api-5977f618ffa6.herokuapp.com/api/products";

    create(product) {
        return axios.post(this.baseUrl, product, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.data)
        .catch(error => {
            console.error('Error creating product:', error);
            throw error;
        });
    }

    readAll() {
        return axios.get(this.baseUrl, {
            withCredentials: true,
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.data)
        .catch(error => {
            console.error('Error fetching products:', error);
            throw error;
        });
    }

    update(product) {
        return axios.put(`${this.baseUrl}/${product._id}`, product, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.data)
        .catch(error => {
            console.error('Error updating product:', error);
            throw error;
        });
    }

    delete(id) {
        return axios.delete(`${this.baseUrl}/${id}`, {
            withCredentials: true,
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.data)
        .catch(error => {
            console.error('Error deleting product:', error);
            throw error;
        });
    }
}