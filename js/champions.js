const urlParams = new URLSearchParams(window.location.search);
const champion = urlParams.get("champion");
var ddUrl;
var ddUrlLang;
var tipsElem = document.getElementById("tips");
var allTips;

function updateColors() {
  if (team == 0) {
    document.getElementById("ally").classList = "team using";
    document.getElementById("enemy").classList = "team";
  } else {
    document.getElementById("enemy").classList = "team using";
    document.getElementById("ally").classList = "team";
  }
}

if (localStorage.getItem("team")) {
  var team = JSON.parse(localStorage.getItem("team"));
} else {
  var team = 0;
}
updateColors();

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
    allTips = [
      championData["data"][champion]["allytips"],
      championData["data"][champion]["enemytips"],
    ];
    var tips = allTips[team];
    for (tip in tips) {
      if (parseInt(tip) + 1 == tips.length) {
        tipsElem.innerHTML += `${parseInt(tip) + 1}. ${tips[tip]}`;
      } else {
        tipsElem.innerHTML += `${parseInt(tip) + 1}. ${tips[tip]}<br><hr>`;
      }
    }

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

function changeTeam(newTeam) {
  localStorage.setItem("team", JSON.stringify(newTeam));
  team = newTeam;
  updateColors();
  var tips = allTips[team];
  tipsElem.innerHTML = "";

  for (tip in tips) {
    if (parseInt(tip) + 1 == tips.length) {
      tipsElem.innerHTML += `${parseInt(tip) + 1}. ${tips[tip]}`;
    } else {
      tipsElem.innerHTML += `${parseInt(tip) + 1}. ${tips[tip]}<br><hr>`;
    }
  }
}
