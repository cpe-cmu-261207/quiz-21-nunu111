const photo = document.getElementById("img-profile");
const all = document.getElementById("div-user-card");
const btng = document.getElementById("btn-random");
const email = document.getElementById("p-email");
const name = document.getElementById("p-name");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  photo.src = resp.data.results[0].picture.large;
  email.innerHTML = resp.data.results[0].email;
  name.innerHTML =
    resp.data.results[0].title +
    resp.data.results[0].first +
    resp.data.results[0].last;
  all.style.display = "";
}

callApi();

photo.onload = () => {
  all.style.display = "none";
  all.style.display = "";
};
