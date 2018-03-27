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
  },
  {
    "name": "Joy",
    "image": "../img/Joy.jpg",
    "clicks": 0
  },
  {
    "name": "Lucy",
    "image": "../img/Lucy.jpg",
    "clicks": 0
  },
  {
    "name": "Cookie",
    "image": "../img/Cookie.jpg",
    "clicks": 0
  },
  {
    "name": "Vicky",
    "image": "../img/Vicky.jpg",
    "clicks": 0
  },
  {
    "name": "Vivaldi",
    "image": "../img/Vivaldi.jpg",
    "clicks": 0
  }
];

function dogList() {
  let willBeAdded = "";
  $.each(dogs, function (dogIndex, dog) {
    willBeAdded += "<li class='dog'>" + dog.name + "</li>";
  });
  $("#list").append("<ul class='list'>" + willBeAdded + "</ul>");
}

function display(id) {
  $("#display").empty();
  dog = dogs[id];
  let toDisplay = "<div class='name'>" + dog.name + "</div><img src='" + dog.image + "' class='moves'/><div id='" + id.toString() + "' class='count'>" + dog.clicks.toString() + "</div>";
  $("#display").append(toDisplay);
  $(".moves").click(function (object) {
    let elem = object.target.parentElement.childNodes[2];
    dogs[elem.id].clicks += 1;
    $("#" + elem.id).text(dogs[elem.id].clicks);
  });
}

$(document).ready(function () {
  dogList();
  $(".dog").click(function (obj) {
    id = dogs.indexOf(dogs.filter(function (i) {
      return i.name == obj.target.innerHTML;
    })[0]);
    display(id);
  });
});