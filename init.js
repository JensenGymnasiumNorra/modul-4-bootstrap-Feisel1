 // Extrauppgift: Fixa så att headern och footern laddas in i varje sida från denna fil
 const header = document.getElementsByTagName("header")[0];
if (header) {
  header.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid bg-secondary">
    <a class="navbar-brand" href="index.html">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="movies.html">movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="music.html">music</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="series.html">series</a>
        </li>
       
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>`

}

 const footer = document.getElementsByTagName("footer")[0];
if (footer) {
  footer.innerHTML = `<p>© 1985</p>`;
}



 let main = document.getElementsByTagName("main")[0];
 if (main) {
    main.style.height = "90vh";
 }