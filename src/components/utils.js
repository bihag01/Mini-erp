const BASE_URL = "https://minierp.rbnetto.dev";

export async function login(email, password) {
    let res = await fetch(`${BASE_URL}/api/users/users/login/`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: email, password: password})
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw {
            status: res.status,
            message: errorData.message || "Error al iniciar sesion"
        };
    }
    return await res.json();
}

export async function getProducts(access_token) {
    let res = await fetch(`${BASE_URL}/api/inventory/products`, {
        method: 'GET',
        headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${access_token}`}
    });

    let data = await res.json();

    return data;
}

export async function deleteProducts(access_token, prodId){
    let res = await fetch(`${BASE_URL}/api/inventory/products/${prodId}`, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${access_token}`}
    });

    let data = await res.json();

    return data;
}

export async function postProducts(access_token, prod){
    let res = await fetch(`${BASE_URL}/api/inventory/products`, {
        method: 'POST',
        headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${access_token}`},
        body: JSON.stringify(prod)
    });

    let data = await res.json();

    return data;
}

export async function putProducts(access_token, prodId, prod){
    let res = await fetch(`${BASE_URL}/api/inventory/products/${prodId}`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${access_token}`},
        body: JSON.stringify(prod)
    });

    let data = await res.json();

    return data;
}