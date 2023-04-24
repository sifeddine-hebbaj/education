var contenaire = document.getElementById("contenaire");
var acceuil = document.getElementById("accueil");
var cours = document.getElementById("cours");
var objectif = document.getElementById("objectif");
var histoire = document.getElementById("histoire");
var tech = document.getElementById("tech");


var accueilContent = `
<div class="slider">
      <div class="load">
        
      </div>
      <div class="content">
        <div class="principal">
        <img src="imgs/fsr.png" alt="">
          <h1>Sif Eddine Hebbaj</h1>
          <p>je vous souhaite la bienvenue.</p>
        </div>
      </div>
</div>
`;
 
var coursContent =  `
<div class="cards">
 
      <div class="card"><a href="https://www.tutorialspoint.com/javascript/javascript_tutorial.pdf" target="_blank">
        <div class="img-cover"><img src="imgs/js.jpg"><div class="icon"><i class="fas fa-arrow-right"></i>
    </div></a></div>
        
        <div class="desc">
          <h1>Cours JavaScript</h1>
          <p>Telechargez le cours Javascript</p>
        </div>
      </div>
      
      <div class="card"><a href="https://www.tutorialspoint.com/java/java_tutorial.pdf" target="_blank">
        <div class="img-cover"><img src="imgs/java.jpeg"><div class="icon"><i class="fas fa-arrow-right"></i>
        </div></a></div>
        <div class="desc">
          <h1>Cours JAVA</h1>
          <p>Telechargez le cours Java</p>
          
        </div>
      </div>
      
      
      <div class="card"><a href="https://upload.wikimedia.org/wikipedia/commons/0/0e/Cours_php.pdf" target="_blank">
        <div class="img-cover"><img src="imgs/php.jpg"><div class="icon"><i class="fas fa-arrow-right"></i>
        </div></a></div>
        
       <div class="desc">
          <h1>Cours Php</h1>
          <p>Telechargez le cours Php</p>
        </div>
      </div>

      <div class="card"><a href="https://www.emi.ac.ma/belouadha/assets/doc/Architecture.pdf" target="_blank">
        <div class="img-cover"><img src="imgs/ao.jpg"><div class="icon"><i class="fas fa-arrow-right"></i>
        </div></a></div>
        
       <div class="desc">
          <h1>A. des ordinateurs</h1>
          <p>Telechargez le cours Architecture des ordinateurs</p>
        </div>
      </div>

      <div class="card"><a href="https://www.fil.univ-lille1.fr/~sedoglav/RSX/Introduction.pdf" target="_blank">
        <div class="img-cover"><img src="imgs/ri.jpg"><div class="icon"><i class="fas fa-arrow-right"></i>
        </div></a></div>
        
       <div class="desc">
          <h1>Cours Reseaux</h1>
          <p>Telechargez le cours Reseaux</p>
        </div>
      </div>
      
      
      
    </div>

`;

var objectifContent = `
<div class="card text">
<h1>Objectif</h1>
<ul>
  <li>Utilisant ce que j'ai appris pendant le Cours/TD et TP du module de Technologie Du web. J'ai cree ce site web.</li>
  <li>Acquérir plus de connaissaces en Developement Web.</li>
  <li>blabla</li>
</ul>
</div>
`;

var histoireContent = `
<div class="card text">
<h1>Histoire</h1>
<ul>
  <li>k</li>
  <li>s</li>
  <li>s</li>
</ul>
</div>

`;

var techContent = `
<div class="card text">
<h1>Technologies</h1>
<ul>
  <li>Source des images : <a href="https://unsplash.com" target="_blank">Unsplash</a></li>
  <li>Les icons: <a href="https://fontawesome.com/" target="_blank">Font Awesome</a></li>
  <li>Les polices: <a href="https://fonts.google.com/" target="_blank">Google Fonts</a></li>
  <li>Les Cours: <a href="https://www.tutorialspoint.com" target="_blank">tutorialspoint</a>, <a href="https://www.wikimedia.org" target="_blank">wikimedia.org</a>, <a href="https://www.emi.ac.ma" target="_blank">www.emi.ac.ma</a>, <a href="https://www.fil.univ-lille1.fr" target="_blank">www.fil.univ-lille1.fr</a></li>
</ul>
</div>
`;

var unsetActive = () => {
    acceuil.classList.remove("active");
    cours.classList.remove("active");
    objectif.classList.remove("active");
    histoire.classList.remove("active");
    tech.classList.remove("active");
    document.body.style.background="linear-gradient(to bottom right, #333333, #ffffff)";
};

acceuil.addEventListener('click', e => {
    unsetActive();
    contenaire.innerHTML = accueilContent;
    acceuil.classList.add("active");
});

cours.addEventListener('click', e => {
    unsetActive();
    contenaire.innerHTML = coursContent;
    cours.classList.add("active");
    document.body.style.background = "white";
});

objectif.addEventListener('click', e => {
    unsetActive();
    contenaire.innerHTML = objectifContent;
    objectif.classList.add("active");
});

histoire.addEventListener('click', e => {
    unsetActive();
    contenaire.innerHTML = histoireContent;
    histoire.classList.add("active");
});

tech.addEventListener('click', e => {
    unsetActive();
    contenaire.innerHTML = techContent;
    tech.classList.add("active");
});
