console.log("Hello Baba")

const helloWorldBox = document.getElementById('Hello--World')
const postsBox = document.getElementById('posts-box')
// helloWorldBox.innerHTML = "hiii <b>shaktimaan<b>"


$.ajax({
    type : 'GET',
    url : '/hw/',
    success : function(response){
        console.log('success',response.text)
        helloWorldBox.innerHTML = response.text
    },
    error: function(error){
        console.log('error',error);     
    }
})

$.ajax({
    type : 'GET',
    url : '/data/',
    success : function(response){
        console.log('success',response)
        const data = response.data
        console.log(data)
        data.forEach(el => {
            postsBox.innerHTML += `
                ${el.title} - <b>${el.body}<b><br>
            `
        });
    },
    error: function(error){
        console.log('error',error);
    }

})