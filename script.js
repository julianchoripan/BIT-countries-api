let cardsContainer = document.querySelector("#cards-container");
fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let paises = data;
    console.log(paises[0]);
    for (x of paises) {
      cardsContainer.insertAdjacentHTML(
        "beforeend",
        `
       <article class="cards-content">
        <div class="img-container">
          <img src="${x.flags.svg}" alt="bandera de ${x.name.common}" />
        </div>
        <h2>${x.name.common}</h2>
        <h3>Capital: ${x.capital}</h3>
        <h3>Population: ${x.population}</h3>
      </article>
        `
      );
    }
  });
