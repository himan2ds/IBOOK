console.log("Hello Baba")

const helloWorldBox = document.getElementById('Hello--World')
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
        const data = JSON.parse(response.data)
        console.log(data)
    },
    error: function(error){
        console.log('error',error);
    }

})