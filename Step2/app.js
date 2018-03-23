let dogs = [
  {
    "name": "Pixie",
    "image": "../img/Pixie.jpg",
    "clicks": 0
  },
  {
    "name": "Evo",
    "image": "../img/Evo.jpg",
    "clicks": 0
  }
];

function addDogs() {
  let addingDogs = "";
  $.each(dogs, function (dogIndex, dog) {
    addingDogs += "<div class='dog'><div class='name'>" + dog.name + "</div><img src='" + dog.image + "' class='moves'/><div id='" + dogIndex.toString() + "' class='count'>" + dog.clicks.toString() + "</div></div></div>";
  });
  $("#main").append("<div>" + addingDogs + "</div>");
}

$(document).ready(function () {
  addDogs();
  $(".moves").click(function (obj) {
    let elem = obj.target.parentElement.childNodes[2];
    dogs[elem.id].clicks += 1;
    $("#" + elem.id).text(dogs[elem.id].clicks);
  });
});