// Add your code here
const submitData = () => {
    const postData = {
        name: "Jane Doe",
        email: "janedoe@yahoo.com"
    }

    const configureObject = {
        method: "POST",
        Headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body:JSON.stringify(postData),
    }
    return fetch('http://localhost:3000/users', configureObject)
    .then(res => res.json())
    .then(data => {
        document.body.textContent = data.id;})
     
        .catch(error =>{
            document.body.textContent = error.message
        })
}

    
      
