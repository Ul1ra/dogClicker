$(document).ready(function () {
  let model = {
    init: function () {
      currentDog: null,
        dogs = [
          {
            name: "Pixie",
            image: "../img/Pixie.jpg",
            clicks: 0
          },
          {
            name: "Evo",
            image: "../img/Evo.jpg",
            clicks: 0
          },
          {
            name: "Joy",
            image: "../img/Joy.jpg",
            clicks: 0
          },
          {
            name: "Lucy",
            image: "../img/Lucy.jpg",
            clicks: 0
          },
          {
            name: "Cookie",
            image: "../img/Cookie.jpg",
            clicks: 0
          },
          {
            name: "Vicky",
            image: "../img/Vicky.jpg",
            clicks: 0
          },
          {
            name: "Vivaldi",
            image: "../img/Vivaldi.jpg",
            clicks: 0
          }
        ];
    },
    getAllDogs: function () {
      return dogs;
    },
    getCurrentDog: function () {
      return currentDog;
    },
    changeCurrentDog: function (index) {
      currentDog = index;
    },
    incrementDogClicks: function (index) {
      dogs[index].clicks += 1;
    }
  };

  let octopus = {
    init: function () {
      model.init();
      viewDogList.init();
    },
    getDogs: function () {
      return model.getAllDogs();
    },
    getDog: function () {
      return model.getCurrentDog();
    },
    changeDog: function (index) {
      model.changeCurrentDog(index);
      viewDogDisplay.render();
    },
    incrementClicks: function (index) {
      model.incrementDogClicks(index);
      viewDogDisplay.render();
    }
  };

  let viewDogList = {
    init: function () {
      dogs = octopus.getDogs();
      let willBeAdded = "";
      $.each(dogs, function (dogIndex, dog) {
        willBeAdded += "<li class='dog'>" + dog.name + "</li>";
      });
      $("#list").append("<ul class='list'>" + willBeAdded + "</ul>");
      $(".dog").click(function (obj) {
        id = dogs.indexOf(dogs.filter(function (i) {
          return i.name == obj.target.innerHTML;
        })[0]);
        octopus.changeDog(id);
      });
    }
  };

  let viewDogDisplay = {
    render: function () {
      $("#display").empty();
      dogs = octopus.getDogs();
      dog = dogs[octopus.getDog()];
      let toDisplay = "<div class='name'>" + dog.name + "</div><img src='" + dog.image + "' class='moves'/><div id='" + octopus.getDog().toString() + "' class='count'>" + dog.clicks.toString() + "</div>";
      $("#display").append(toDisplay);
      $(".moves").click(function (object) {
        let elem = object.target.parentElement.childNodes[2];
        octopus.incrementClicks(elem.id);
      });
    }
  };

  octopus.init();
});