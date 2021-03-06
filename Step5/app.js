$(document).ready(function () {
  let model = {
    init: function () {
      currentDog: null;
      allDogs = [
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
      return allDogs;
    },
    getCurrentDog: function () {
      return currentDog;
    },
    changeCurrentDog: function (index) {
      currentDog = index;
    },
    incrementDogClicks: function (index) {
      allDogs[index].clicks++;
    },
    editCurrentDog: function (name, image, clicks) {
      allDogs[currentDog].name = name;
      allDogs[currentDog].image = image;
      allDogs[currentDog].clicks = clicks;
    }
  };

  let octopus = {
    init: function () {
      model.init();
      viewDogList.render();

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
    },
    editDog: function (name, image, clicks) {
      model.editCurrentDog(name, image, clicks);
      viewDogList.render();
      viewDogDisplay.render();
    }
  };

  let viewDogList = {
    render: function () {
      $("#list").empty();
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
      let toDisplay = "<div class='name'>" + dog.name + "</div><img src='" + dog.image + "' class='moves'/><div id='" + octopus.getDog().toString() + "'>" + dog.clicks.toString() + "</div>";
      $("#display").append(toDisplay);
      $(".moves").click(function (object) {
        let elem = object.target.parentElement.childNodes[2];
        octopus.incrementClicks(elem.id);
        $("#" + elem.id).text(dogs[elem.id].clicks);
        viewAdmin.init();
      });
    }
  };

  let viewAdmin = {
    init: function () {
      $("#button").click(function () {
        viewAdmin.render();
      });
    },
    render: function () {
      dogs = octopus.getDogs();
      dog = dogs[octopus.getDog()];
      if (currentDog != null) {
        $("#admin").empty();
        editArea = "";
        editArea += "<form>Name: <input type='text' name='name'><br>Image: <input type='text' name='image'><br>Clicks: <input type='text' name='clicks'><br><button id='save'>Save</button><br><button id='cancel'>Cancel</button></form>";
        $("#admin").append(editArea);
        $("input[name=name]").val(dog.name);
        $("input[name=image]").val(dog.image);
        $("input[name=clicks]").val(dog.clicks);
        $("#save").click(function () {
          name = $("input[name=name]").val();
          image = $("input[name=image]").val();
          clicks = $("input[name=clicks]").val();
          octopus.editDog(name, image, clicks);
          $("#admin").empty();
        });
        $("#cancel").click(function () {
          $("#admin").empty();
        });
      }
    }
  }
  octopus.init();
});