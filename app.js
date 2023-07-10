
const form = document.querySelector("form");
const information = document.querySelector(".list");
const moreInfo = document.querySelector(".more-info");
const universityList = document.querySelector(".university-list");
const loader = document.querySelector(".loader");


const getUniversity = async (country) => {
    const base = "http://universities.hipolabs.com/search";
    const nameOfTheCountry = `?country=${country}`;
    const response = await fetch(base + nameOfTheCountry);
    const data = await response.json();
    return data;
}

const getCountry = (event) => {
    event.preventDefault();
    const country = university.value.trim();

    if (country) {
        moreInfo.innerHTML = ""
        information.innerHTML = "";
    }

    form.reset();
    getUniversity(country)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

}
form.addEventListener("submit", getCountry);

const updateUI = (data) => {
    data.map(universityInfo => {
        moreInfo.innerHTML = `
        <p>Pais :<span>${universityInfo.country}</span></p>
        <p>codigo alpha :<span>${universityInfo.alpha_two_code}</span></p>
        `
       information.innerHTML += `
            <li>${universityInfo.name}</li>
       `;
    });
}


