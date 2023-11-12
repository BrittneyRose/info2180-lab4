document.addEventListener('DOMContentLoaded', function(){
    let button = document.querySelector('button');
    button.addEventListener("click", function(){
        const httpRequest = new XMLHttpRequest();
        let url = "superheroes.php";
        httpRequest.onreadystatechange = searchResponse;
        httpRequest.open('GET', url);
        httpRequest.send();

        function searchResponse(){
            if (httpRequest.readyState === XMLHttpRequest.DONE){
                if (httpRequest.status === 200){
                    let response = httpRequest.responseText;
                    alert(response);
                } else{
                    alert("There is a problem with the request :(");
                }
            }
        }
    })
})