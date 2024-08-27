let api = "https://api.github.com/users/"

let form = document.getElementById('text')
let main = document.getElementById('main')

const userser = (name) => {
    axios(name + api)
}

fetch(api)
    .then((resolve) => {
        return resolve.text();
    })
    .catch((err) => {
        console.log(`${err} in api not found`)
    })
    .then((data) => {
        // console.log(data)
    })

const checkele = () => {
    let inputele = document.querySelector('#inputtext')
    input = inputele.value
    console.log(input)
}

let serbtn = () => {
    checkele()
    if (input.length === 0) {
        console.log("Enter id")
    }
    else {
        let item = api + input
        alert("Plase Wait Id is Searching")
        let vi = document.getElementById('video')
        console.log(vi)
        vi = vi.src
        vi= ("https://cdn.pixabay.com/video/2023/07/24/173102-848555581_large.mp4")
        console.log(vi)
        setTimeout(() => {
            fetch(item)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    console.log(data)
                    document.getElementById('result').innerText = `user: ${data.login}\n Name: ${data.name}\nPublic Repos: ${data.public_repos}`
                    window.open(`https://github.com/${data.login}`, '_blank')
                })
                .catch((err) => {
                    console.log(err)
                    document.getElementById('result').innerText = "user not found Please Try again"
                })
            }, 2000);
        }
}
