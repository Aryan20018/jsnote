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
const hideButton = document.querySelector('#stop')
const image = document.querySelector('#img')
const names = document.querySelector('#name')
const followers = document.querySelector('#followers')
const follow = document.querySelector('#follow')
const avtar = document.querySelector('.image')

const repopublic = document.querySelector('#public_repos')


startButton.addEventListener('click', function (e) {
    console.log('clicked');
    dataCall()
})
hideButton.addEventListener('click', function (c) {
    console.log("clicked");
    //    remove dataCall();
    names.innerHTML = `<h2></h2>`
    followers.innerHTML = `<h2></h2>`
    follow.innerHTML = `<h2></h2>`
    console.log(repopublic);
    
    repopublic.innerHTML = ` `
    console.log(repopublic);
    image.src = ``;
    // image.parentNode.removeChild(image);
    //   avtar.src.card.visibility="hidden";
    // console.log(c.target.parentNode);
    // function hider(){}
    // removeIt. 
    // image.src.remove()
    // avtar.card.visibility="hidden";
    //    hide();  
})
function dataCall() {
    const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function () {
        // console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            // console.log(data);
            // console.log(data.login);
            // names.innerHTML= `<h2>${data.login}</h2>`;
            names.innerText = data.name === null ? data.login : data.name;
            followers.innerHTML = `${data.followers}`;
            follow.innerHTML = `${data.following}`;
            image.src = `${data.avatar_url}`;
            repopublic.innerHTML = `${data.public_repos}`;
            console.log(repopublic);


            // const addim = `${data.avatar_url}`;
            // imgadd();
        } 
            
            
        

    }
    xhr.send();

}









// function hide() { 
//     if (document.getElementById) { 
//     document.getElementById('.image').style.visibility = 'hidden'; 
//     } 
// }

// function hider(){
//     target.image
//     console.log(c.target.parentNode);
//     // const myImage = document.getElementById("myP");
//     // myImage.style.visibility = (myImage.style.visibility === "hidden") ? '' : "hidden"; 
// }
// function dataCall() {
//     const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', requestUrl)
//     xhr.onreadystatechange = function () {
//         console.log(xhr.readyState);
//         if (xhr.readyState === 4) {
//             const data = JSON.parse(this.responseText)
//             // console.log(data);
//             // console.log(data.login);
//             // names.innerHTML= `<h2>${data.login}</h2>`;
//             names.innerText = data.name === null ? data.login : data.name;
//             followers.innerHTML = `${data.followers}`;
//             follow.innerHTML = `${data.following}`;
//             image.src = `${data.avatar_url}`;
//             // const addim = `${data.avatar_url}`;
//             // imgadd();
          
//             repopublic.innerHTML = `${data.public_repos}`;
//             console.log(repopublic);
            
//         }

//     }
//     xhr.send();

// }
// function imgadd() {
//     let img = document.createElement('img');
//     img.src =`${data.avatar_url}`
//     document.getElementById('.avtar').appendChild(img);
//     res.innerHTML = "Image Element Added.";
// }

