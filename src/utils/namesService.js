import tokenService from './tokenService';
const BASE_URL = '/api/names/';

export default {
    getAll,
    create,
    update,
    deleteOne,
};

function getAll() {
    return fetch(BASE_URL, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }, { mode: 'cors' })
        .then(res => res.json());
}

function create(name) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(name)
    }, { mode: 'cors' })
        .then(res => res.json());
}

function update(name) {
    return fetch(`${BASE_URL}/${name._id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(name)
    }, { mode: 'cors' })
        .then(res => res.json(name));
}

function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    }, { mode: 'cors' })
        .then(res => res.json());
}