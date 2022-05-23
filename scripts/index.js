var github = "https://github.com/slyce233";
var twitter = "https://twitter.com/adamah1_";
var facebook = "https://www.facebook.com/andrew.adamah.1612/";
var linkedin = "https://www.linkedin.com/in/andrew-adamah/";

var commands = [
  "whois",
  "social",
  "projects",
  "history",
  "help",
  "email",
  "clear",
  "banner",
];

var command;

$(document).ready(function () {
  $("input").focus();
  window.setInterval(function () {
    if ($("#cursor").css("visibility") === "visible") {
      $("#cursor").css({ visibility: "hidden" });
    } else {
      $("#cursor").css({ visibility: "visible" });
    }
  }, 500);

  $("input").keyup(function () {
    $("#cmd span").text("guest@andrewadamah.com:~$ " + $(this).val());
  });

  // Add event listener on keyup
  document.addEventListener(
    "keyup",
    (event) => {
      var name = event.key;
      //check if key is enter
      if (name === "Enter") {
        // set input text
        commandSpan = $("#cmd span").text();
        command = commandSpan.substr(26, commandSpan.length);
        console.log(commands.includes(command));
        if (commands.includes(command)) {
          $("#cmd span").text("guest@andrewadamah.com:~$ ");
          // focus input
          $("input").focus();

          // get input
          $("input").keyup(function () {
            $("#cmd span").text("guest@andrewadamah.com:~$ " + $(this).val());
          });
          console.log(command);
          $(".display-area").append(
            `<p class="display-area-command"> guest@andrewadamah.com:~$ ` +
              command +
              `</p>`
          );
        } else {
          console.log(
            "Command not found. Type 'help' for a list of available commands."
          );
          $(".display-area").append(
            `<p class="display-area-command"> guest@andrewadamah.com:~$ ` +
              command +
              `</p> <p class="display-area-error">Command not found. Type 'help' for a list of available commands.</p>`
          );
          $("#cmd span").text("guest@andrewadamah.com:~$ ");
          // focus input
          $("input").focus();

          // get input
          $("input").keyup(function () {
            $("#cmd span").text("guest@andrewadamah.com:~$ " + $(this).val());
          });
        }
      }
    },
    false
  );

  document.addEventListener("click", function () {
    $("input").focus();
    $("#cmd span").text("guest@andrewadamah.com:~$ ");
  });
});
