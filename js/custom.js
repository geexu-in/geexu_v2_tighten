$(window).scroll(function () {
  if ($(this).scrollTop() > 120) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});

// According js here 


            let partnerPlayers = [];

            // When loaded, add the players to an array
            document
              .querySelector("#partnerPlayerAB")
              .addEventListener("load", (e) => {
                partnerPlayers["AB"] = e.target;
                
              });

            document
              .querySelector("#partnerPlayerBC")
              .addEventListener("load", (e) => {
                partnerPlayers["BC"] = e.target;
              });

            document
              .querySelector("#partnerPlayerAC")
              .addEventListener("load", (e) => {
                partnerPlayers["AC"] = e.target;
              });

            function partners() {
              return {
                active: "B",
                playerId: "BC",
                direction: 1,
                seek: 0,
                showPlayer: function (player) {
                  return this.playerId === player;
                },
                isActive({ id }) {
                  
                  return this.active === id;
                },
                clickRow({ id }) {
                  if (this.active === id) {
                    // Clicked on the active row
                    
                    return;
                  }

                  this.direction = 1;
                  this.seek = "0%";

                  let fromTo = this.active + id;

                  switch (fromTo) {
                    case "AB":
                    case "AC":
                    case "BC":
                      // Forwards transitions
                      this.setPlayerProperties(fromTo);
                      break;

                    case "CA":
                    case "BA":
                    case "CB":
                      // Backwards transitions
                      this.setPlayerProperties(fromTo, true);
                      break;

                    default:
                      break;
                  }

                  // Set the active row (this shows the correct animation element)
                  this.active = id;

                  // Set player properties
                  let player = partnerPlayers[this.playerId];
                  player.seek(this.seek);
                  player.setDirection(this.direction);

                  // Play the animation
                  player.play();
                },
                setPlayerProperties(fromTo, reverse = false) {
                  if (reverse === true) {
                    // Reverse the from/to string to get the player ID
                    this.playerId = fromTo.split("").reverse().join("");
                    this.direction = -1;
                    this.seek = "100%";
                  } else {
                    this.playerId = fromTo;
                    this.direction = 1;
                    this.seek = "0%";
                  }
                },
              };
            }
            































            