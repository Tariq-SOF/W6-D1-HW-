fetch("https://rickandmortyapi.com/api/character")
  .then(res => res.json())
  .then(x => {

    let container = document.getElementById("content-container");
    
    for (let i = 0; i < x.results.length; i++) {
      let content = document.createElement("div");
      content.id = "content";
      
      let h2 = document.createElement("h2");
      h2.textContent = x.results[i].name;
      content.appendChild(h2);

      let img = document.createElement("img");
      img.src = x.results[i].image;
      img.id = 'imgg';
      content.appendChild(img);

      container.appendChild(content);
    }

   
  });
