fetch('https://api.github.com/users/')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

function getUserData(gitUrl) {
    fetch(gitUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateProfile(data);
      })
      .catch((error) => {
        throw error;
      });
  }