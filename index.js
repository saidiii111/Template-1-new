/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("navv");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function getFlagEmoji(countryCode) {
  return countryCode.toUpperCase()
                    .replace(/./g, char => 
      String.fromCodePoint(127397 + char.charCodeAt())
  );
}

var language;
function getLanguage() {
  localStorage.getItem("language") == null ? setLanguage("en") : false;
  $.ajax({
    url: "/language/" + localStorage.getItem("language") + ".json",
    dataType: "json",
    async: false,
    dataType: "json",
    success: function (lang) {
      language = lang;
    },
  });
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
}

$(document).ready(function () {
  $("#div1").text(language.date);
});
