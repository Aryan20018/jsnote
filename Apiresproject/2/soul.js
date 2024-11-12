// const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestUrl)
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4) {
//         const data = JSON.parse(this.responseText)
//         console.log(data);
//         console.log(data.followers);
//     }
// }
// xhr.send();


const startButton = document.querySelector('#start')
const image = document.querySelector('#img')
const names = document.querySelector('#name')
const followers = document.querySelector('#followers')
const follow = document.querySelector('#follow')

const repopublic = document.querySelector('#public_repos')


startButton.addEventListener('click', function (e) {
    console.log('clicked');
    dataCall()
})


function dataCall() {
    const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            console.log(data);
            console.log(data.login);
            // names.innerHTML= `<h2>${data.login}</h2>`;
            names.innerText = data.name === null ? data.login : data.name;
            // data.followers
            // data.following
            // data.avatar_url
            followers.innerHTML= `${ data.followers}`;
            follow.innerHTML= `${ data.following}`;
            image.src = `${data.avatar_url}`;
           
            repopublic.innerHTML= `${data.public_repos}`;
        }   
    }
    xhr.send();
}

// function nameshow(names){
//         names.innerHTML= `<h2>${names}</h2>`;
// }











// document.querySelector("button.follow").addEventListener('click',showCardId);