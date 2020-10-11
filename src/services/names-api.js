const BASE_URL = '/api/names';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(name) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(name)
    }).then(res => res.json());
}

export function update(name) {
    return fetch(`${BASE_URL}/${name._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(name)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}