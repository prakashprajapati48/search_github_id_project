<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Github Profile Search</title>
  <style>
    body {
    background-image: url("https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/searching-images1619473572572954.jpg?impolicy=Png_Res&imdensity=1&imwidth=600");
}

#inputtext {
    width: 42%;
    height: 12rem;
    position: relative;
    left: 26rem;
    top: 5rem;
    justify-content: center;
    font-size: 65px;
    display: inline-block;
    justify-items: center;
}

button {
    width: 20%;
    height: 2rem;
    position: relative;
    top: 12rem;
    left: -4rem;
}

#result {
    position: absolute;
    left: 35rem;
    top: 22rem;
    font-size: 30px;
}

@media only screen and (max-width: 980px) {
    body {
        width: 100%;
        height: 100%;
        background-image: url("https://searchengineland.com/wp-content/seloads/2015/01/future-search-box-ss-1920.jpg");
        background-repeat: no-repeat;
        background-size: 100% 1000%;
        /* background-size: 100rem 120rem; */
    }

    #inputtext {
        width: 50%;
        height: 15rem;
        position: absolute;
        left: 17rem;
        top: 50rem;
    }

    button {
        width: 20%;
        height: 5rem;
        position: relative;
        top: 70rem;
        left: 25rem;
    }

    #result {
        position: absolute;
        left: 20rem;
        top: 85rem;
        font-size: 30px;
    }
    
}
  </style>
</head>

<body>
    <!-- <form id="text" method="get"> -->
        <input type="search" name="" id="inputtext" placeholder="Search id">
        <button type="button" id="searchbtn" onclick="serbtn()">submit</button>
        <div id="result">
        </div>
        <main id="main"></main>
        <div id="video1">
            <video src="" id="video"></video>
        </div>
    <!-- </form> -->
  <script>
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
  </script>
</body>

</html>
