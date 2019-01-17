![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# TechBreak | Manipuler HTML / CSS / JavaScript

## Introduction

Ce projet est une introduction au HTML, CSS et Javascript durant lequel vous allez pouvoir manipuler différents documents.

Pour commencer, vous allez simplement cliquer sur le bouton ["**Clone or download > Download ZIP**"](https://github.com/eloji9/techbreak-learn-html-css-javascript/tree/master).

Après avoir téléchargé le dossier et l'avoir décompressé, vous allez y trouver 4 documents sur lesquels nous allons intervenir en 4 étapes :

- **étape 1**: HTML et CSS.
- **étape 2**: HTML et CSS avec Bootstrap
- **étape 3**: HTML, CSS et Javascript.
- **étape 4**: HTML, CSS, Javascript et utilisation d'une API

Vous allez avoir besoin d'une éditeur de texte tel que [Visual Studio Code](https://code.visualstudio.com/), c'est un outil très répandu et facile à appréhender. Au lieu d'ouvrir les fichiers un à un, nous allons ouvrir le dossier principal `first_web_page_master`.

![Visual Studio Code](https://raw.githubusercontent.com/wesbos/cobalt2-vscode/cobalt2-updates/images/ss.png)

<!-- Vous trouverez la solution dans la branche `solution` en cliquant sur  ["**Branch: master > solution**"](LINK FOR THE BRANCH SOLUTION). Mais avant de faire ça, commençons par coder 😃 ! -->

## Instructions

### Etape 1 | HTML & CSS

1. Ouvrez `index.html` avec Chrome ou n'importe quel autre navigateur.
2. Dans `index.html`, mettre votre prénom dans le `<titre>` à la place de "_Your name_".
3. Dans `index.html`, mettre le `<h1 class="container-title-one">...</h1>`.
4. Dans `style.css`, ajouter à la classe `.container-title-one` le style de la police à "italic" et le poids de la police à "bold".
   (https://www.w3schools.com/cssref/pr_font_weight.asp).

### Etape 2 | HTML & CSS avec Bootstrap

1. Ouvrez `index.html` avec Chrome ou n'importe quel autre navigateur.
2. Ajoutez un bouton avec `<button>` avec la classe `container-my-button`.
3. Dans `style.css`, ajouter à `.container-my-button` des caractéristiques telles que :

- `background-color: black` pour mettre la couleur de l'arrière-plan en noir.
- `color: white` pour mettre la police en blanc.
- `display: block`, `margin-left:auto`, `margin-right:auto` pour placer le bouton au centre de la page.

4. Dans `style.css`, enlever les règles de CSS dans `index.html` et ajouter les classes `btn btn-dark btn-lg`
   (https://getbootstrap.com/docs/4.0/components/buttons/).

### Etape 3 | Javascript

1. Ouvrez `index.html` avec Chrome ou n'importe quel autre navigateur.
2. Ajoutez un `<h2>` avec "_But is it the right time to do so ?_" et un `<p>` avec "_I don't know_".
3. Ajouter une classe `working-hours` aux deux précédentes balises.
4. Dans `style.css`, ajouter à `.working-hours` la caractéristique `text-align: center`.
5. Dans `main.js`, changez la variable `hours` à `20`, vous allez voir que la phrase affichée sera "_No, it's 20:00, you can't contact anyone outside of working hours but you can go grab a beer!_".
6. Dans `main.js`, nous allons la variable `hours` à `Math.floor(24*Math.random())`. A chaque fois que vous rafraîchissez, l'heure affichée sera différente et le message s'adaptera à l'heure.
7. **Bonus**: vous pouvez mettre la variable `hours` à `(new Date()).getHours()` et faire pareil pour `minutes`, vous trouverez la bonne syntaxe ici https://www.w3schools.com/jsref/jsref_obj_date.asp.

### Project 4 | HTML, CSS, Javascript et utilisation d'une API

1. Ouvrez `index.html` avec Chrome ou n'importe quel autre navigateur.
2. Ouvrez "https://randomuser.me/api/?seed=ironhack&format=prettyjson&page=1&results=10" avec votre navigateur pour voir les données récupérées grâce à l'API. Sur Chrome, nous recommandons d'installer [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc).
3. Dans le navigateur, changez l'URL et amusez-vous avec les paramètres. Par exemple :
   - "[https://randomuser.me/api/?seed=ironhack&format=prettyjson&page=1&**results=2**](https://randomuser.me/api/?seed=ironhack&format=prettyjson&page=1&results=2)": pour montrer 2 utilisateurs seulement.
   - "[https://randomuser.me/api/?seed=ironhack&format=prettyjson&page=1&results=10&**nat=fr**](https://randomuser.me/api/?seed=ironhack&format=prettyjson&page=1&results=10&nat=fr)": pour montrer filtrer les utilisateurs avec une nationalité française.
4. Dans `main.js`, changez l'API et vérifiez les résultats sur votre navigateur.

## Solution

`index.html`

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <!-- ETAPE 1 -->

    <!-- REPLACE BY YOUR NAME -->

    <title>Jihad's web page</title>

    <meta charset="utf-8" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- ETAPE 2 -->

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
      integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
      crossorigin="anonymous"
    />

    <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />

    <!-- ETAPE 1 -->

    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- ETAPE 2 -->

    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-danger">
      <div class="container">
        <a class="navbar-brand" href="index.html">BootstrapHire</a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>

            <li class="nav-item active">
              <a class="nav-link" href="index.html">Candidates</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <!-- ETAPE 1 -->

      <h1 class="container-title-one">Hire your next employee</h1>

      <!-- ETAPE 3 -->

      <h2 class="working-hours">But is it the right time to do so ?</h2>

      <p class="working-hours">I don't know</p>

      <!-- ETAPE 2 -->

      <button class="btn btn-dark btn-lg container-my-button">
        Access Your LinkedIn
      </button>

      <!-- ETAPE 4 -->

      <br />

      <ul class="list-group list-employees"></ul>

      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link text-danger" page="prev" href="#">Previous</a>
          </li>

          <li class="page-item">
            <a class="page-link text-danger" page="1" href="index.html?page=1"
              >1</a
            >
          </li>

          <li class="page-item">
            <a class="page-link text-danger" page="2" href="index.html?page=2"
              >2</a
            >
          </li>

          <li class="page-item">
            <a class="page-link text-danger" page="3" href="index.html?page=3"
              >3</a
            >
          </li>

          <li class="page-item">
            <a class="page-link text-danger" page="4" href="index.html?page=4"
              >4</a
            >
          </li>

          <li class="page-item">
            <a class="page-link text-danger" page="5" href="index.html?page=5"
              >5</a
            >
          </li>

          <li class="page-item">
            <a class="page-link text-danger" page="next" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- JavaScript -->

    <!-- ETAPE 2 -->

    <script
      src="https://code.jquery.com/jquery-3.2.1.min.js"
      integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
      crossorigin="anonymous"
    ></script>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"
      integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
      crossorigin="anonymous"
    ></script>

    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"
      integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
      crossorigin="anonymous"
    ></script>

    <!-- ETAPE 3 -->

    <script src="main.js"></script>
  </body>
</html>
```

`style.css`

```css
body {
  background-color: #f5f5f5;
}

h1 {
  margin: 20px;

  text-align: center;
}

.list-employees {
  max-width: 600px;

  margin: auto;

  margin-bottom: 20px;
}

.list-employees .rounded-circle {
  height: 50px;

  margin-right: 16px;
}

.list-employees .name {
  text-transform: capitalize;
}

.list-employees .btn.btn-danger,
.list-employees .btn.btn-danger:hover {
  color: white;

  margin-top: 6px;

  min-width: 100px;
}

.pagination {
  margin: 20px;
}

.pagination .page-item.active .page-link {
  background-color: #dc3545;

  border-color: #dc3545;

  color: white !important;
}

/* ETAPE 1 */

.container-my-button {
  /* color:white;

background-color: black; */

  /* ETAPE 2 */

  display: block;

  margin-left: auto;

  margin-right: auto;
}

/* ETAPE 3 */

.working-hours {
  text-align: center;
}
```

`main.js`

```js
// Get the current page (default = "1")

var page = new URL(location.href).searchParams.get("page");

if (!page) {
  page = "1";
}

// ETAPE 3

// Check the time to know if you can contact the person or not.

var hours = new Date().getHours();

var minutes = new Date().getMinutes();

if (hours >= 9 && hours < 18) {
  $(".working-hours").text(
    "Yes, it's " +
      hours +
      ":" +
      minutes +
      ", you can still contact you next employee!"
  );
} else {
  $(".working-hours").text(
    "No, it's " +
      hours +
      ":" +
      minutes +
      ", you can't contact anyone outside of working hours but you can go grab a beer!"
  );
}

// Call the API "GET https://randomuser.me/api/"

jQuery.get(
  `https://randomuser.me/api/?seed=ironhack&format=prettyjson&page=${page}&results=10`,
  function(data) {
    for (let i = 0; i < data.results.length; i++) {
      var name = data.results[i].name.first + " " + data.results[i].name.last;

      var buttonText;

      if (data.results[i].gender === "male") {
        buttonText = "Hire him";
      } else {
        buttonText = "Hire her";
      }

      // Add a new <li> tag in ".list-employees"

      $(".list-employees").append(`

<li class="list-group-item">

<img class="rounded-circle float-left" src="${data.results[i].picture.large}">

<a class="btn btn-danger float-right" href="https://www.linkedin.com/search/results/index/?keywords=${name}" target="_blank">

${buttonText}

<a/>

<strong class="name">${name}</strong><br>

${data.results[i].email}

</li>

`);
    }
  }
);

// Updating the pagination

$(".pagination .page-link").each(function() {
  var currentPage = $(this).attr("page");

  console.log(currentPage, page);

  if (currentPage == page)
    $(this)
      .parent()
      .addClass("active");
});

$(".pagination .page-link[page=prev]").attr(
  "href",
  "index.html?page=" + (Number(page) - 1)
);

$(".pagination .page-link[page=next]").attr(
  "href",
  "index.html?page=" + (Number(page) + 1)
);
```
