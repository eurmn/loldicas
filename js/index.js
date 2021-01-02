var ddUrl;
var ddUrlLang;
var championsElem = document.getElementById("champions");

function getImg(champion) {
  pic_url = ddUrl + "/img/champion" + "/" + champion["id"] + ".png";
  return pic_url;
}

$.ajax({
  url: "https://ddragon.leagueoflegends.com/api/versions.json",
  type: "GET",
}).done((versions) => {
  var currentVersion = versions[0];
  ddUrl = "https://ddragon.leagueoflegends.com/cdn/" + currentVersion;
  ddUrlLang =
    "https://ddragon.leagueoflegends.com/cdn/" + currentVersion + "/data/pt_BR";

  $.ajax({
    url: ddUrlLang + "/champion.json",
    type: "GET",
    headers: "",
  }).done((champions) => {
    var championsSorted = [];
    for (var key in champions["data"]) {
      championsSorted.push(champions["data"][key]);
    }

    championsSorted.sort((a, b) => (a.name > b.name ) ? 1 : -1);
    console.log(championsSorted);

    for (var champion of championsSorted) {
      console.log(champion);
      var championElem = document.createElement("div");
      championElem.classList.add("champion");

      var championNameElem = document.createElement("p");
      championNameElem.innerHTML = champion["name"];

      var championIconLink = document.createElement("a");
      championIconLink.setAttribute(
        "href",
        "/tips.html?champion=" + champion["id"]
      );
      var championIcon = document.createElement("img");
      championIcon.classList.add("champion-icon");
      championIcon.src = getImg(champion);

      championIconLink.appendChild(championIcon);
      championElem.appendChild(championIconLink);
      championElem.appendChild(championNameElem);
      championsElem.appendChild(championElem);
    }
  });
});
