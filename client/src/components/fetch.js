function func(url) {
    return fetch(url)  // return this promise
    .then(response => response.json())
    .then(json => (json.results))
}

func('https://localhost:3443/projects/61e60c4de8e62d9530a69684/joinTeam')
.then(response => console.log(response))  // call `then()` on the returned promise to access users
.catch(err => console.log(err))