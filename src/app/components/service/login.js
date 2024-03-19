export const loginUser = async (username, password) => {

       const resp = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            
            username,
            password,
        })
    })
    if (resp.status !== 200) {
        throw Error ('Invalid')
    }
    return resp.json();
}