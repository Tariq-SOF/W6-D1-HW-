function getposts() {

    function getposts() {
        let request = new XMLHttpRequest();
        request.open("GET", "https://rickandmortyapi.com/api/character");
        request.responseType = "json";
        request.send();
        request.onload = function() {
            if (request.status >= 200 && request.status < 300) {
                let posts = request.response;

                document.getElementById("contenr").innerHTML = ""
    
                for (const character of posts.results) {
                    let conteent = `
                        <div class="div1" id="div">
                            <h2>${character.name}</h2>
                            <img src="${character.image}">
                        </div>
                    `;
    
                    document.getElementById("contenr").innerHTML += conteent;
                }
            } else {
                alert("error");
            }
        };
    }
    
    getposts();

}

getposts()