const urlParams = new URLSearchParams(window.location.search);
const champion = urlParams.get("champion");
var ddUrl;
var ddUrlLang;

console.log(champion);

$.ajax({
  url: "https://ddragon.leagueoflegends.com/api/versions.json",
  type: "GET",
}).done((versions) => {
  var currentVersion = versions[0];
  ddUrl = "https://ddragon.leagueoflegends.com/cdn/" + currentVersion;
  ddUrlLang =
    "https://ddragon.leagueoflegends.com/cdn/" + currentVersion + "/data/pt_BR";

  $.ajax({
    url: ddUrlLang + "/champion/" + champion + ".json",
    type: "GET",
  }).done((championData) => {
    console.log(championData);
    var tips = championData["data"][champion]["enemytips"];
    document.getElementById(
      "tips"
    ).innerHTML = `1. ${tips[0]}<br><hr>2. ${tips[1]}<br><hr>3. ${tips[2]}`;

    var championName = championData["data"][champion]["name"];
    document.getElementById("champion-name").innerHTML = championName;
    document.title = championName + " - GarrafaDicas";

    document.getElementById("champion-title").innerHTML =
      "- " + championData["data"][champion]["title"] + " -";
    document
      .getElementById("splash-art")
      .setAttribute(
        "src",
        `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`
      );
  });
});
