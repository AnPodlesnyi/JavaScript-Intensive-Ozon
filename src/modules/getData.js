const getData = () => {
    return fetch('https://testozon-b12e9-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json();
        })
}

export default getData;