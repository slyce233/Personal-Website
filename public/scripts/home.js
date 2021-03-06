var github = "github.com/slyce233/";
var twitter = "twitter.com/adamah1_/";
var facebook = "facebook.com/andrew.adamah.1612/";
var linkedin = "linkedin.com/in/andrew-adamah/";
var emailTo = "adamah.andrew45@gmail.com";

var commands = [
  "bio",
  "projects",
  "socials",
  "email",
  "help",
  "history",
  "clear",
];

var cmd;

var counter = 0;
var command;
var commandHistory = [];

$(document).ready(function () {
  $("input").focus();
  window.setInterval(function () {
    if ($("#cursor").css("visibility") === "visible") {
      $("#cursor").css({ visibility: "hidden" });
    } else {
      $("#cursor").css({ visibility: "visible" });
    }
  }, 700);

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
        $("#cmd span").text("guest@andrewadamah.com:~$ ");
        // focus input
        $("input").focus();

        // get input
        $("input").keyup(function () {
          $("#cmd span").text("guest@andrewadamah.com:~$ " + $(this).val());
        });

        $(".display-area").append(
          `<p class="display-area-command"> guest@andrewadamah.com:~$ ` +
            command +
            `</p>`
        );

        switch (command) {
          case "bio":
            cmd = "bio";
            commandHistory.push(cmd);
            $(".display-area").append(
              `<p class="display-area-text">  I am a fourth year student at Ontario Tech University. My programming language experience includes Python, Java, JavaScript, SQL, Dart, C++ however I am always open to learning new languages and frameworks. 
                My interests are mainly in Data Science, Machine Learning, Artificial Intelligence and Blockhain.  My main motivation as a Computer Science major is how technology, specifically software and data, can be beneficial to my everyday 
                life as an individual and further expand these findings to larger demographics.
                  </p>`
            );
            break;
          case "projects":
            cmd = "projects";
            commandHistory.push(cmd);
            var starter = "https://www.";
            $(".display-area").append(
              `<ul class="main-ul">
              <li class="main-li"><table>
                <tr><td class="o0">big data analytics</td><td class="o1"><a id="bda" href="#">` +
                github +
                `BigDataAnalytics</a></td>
                  </tr>
                </table>
              </li>
              <li class="main-li"><table>
                <tr><td class="o0">data mining</td><td class="o1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="dm" href="#">` +
                github +
                `DataMining</a></td>
                  </tr>
                </table>
              </li>
              <li class="main-li"><table>
                <tr><td class="o0">web3</td><td class="o1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="w3" href="#">` +
                github +
                `Web3</a></td>
                  </tr>
                </table>
              </li>
              <li class="main-li"><table>
                <tr><td class="o0">spotifire</td><td class="o1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="sptf" href="#">` +
                github +
                `Spotifire</a></td>
                  </tr>
                </table>
              </li>
            </ul>`
            );

            $("#bda").on("click", function () {
              console.log("clicked");
              openUrl(starter + github + "BigDataAnalytics");
            });

            $("#dm").on("click", function () {
              console.log("clicked");
              openUrl(starter + github + "DataMining");
            });

            $("#w3").on("click", function () {
              console.log("clicked");
              openUrl(starter + github + "Web3");
            });

            $("#sptf").on("click", function () {
              console.log("clicked");
              openUrl(starter + github + "Spotifire");
            });

            break;
          case "socials":
            cmd = "socials";
            commandHistory.push(cmd);
            var starter = "https://www.";
            $(".display-area").append(
              `<ul class="main-ul">
            <li class="main-li"><table>
            <tr><td class="o0">linkedin</td><td class="o1"><a id="lkndn" href="#">` +
                linkedin +
                `</a></td>
            </tr>
              </table>
            </li>
            <li class="main-li"><table>
              <tr><td class="o0">github</td><td class="o1">&nbsp;&nbsp;<a id="gthb" href="#">` +
                github +
                `</a></td>
                </tr>
              </table>
            </li>
            <li class="main-li"><table>
              <tr><td class="o0">twitter</td><td class="o1">&nbsp;<a id="twttr" href="#">` +
                twitter +
                `</a></td>
                </tr>
              </table>
            </li>
            <li class="main-li"><table>
              <tr><td class="o0">facebook</td><td class="o1"><a id="meta" href="#">` +
                facebook +
                `<a></td>
                </tr>
              </table></li>
          </ul>`
            );

            $("#lkndn").on("click", function () {
              console.log("clicked");
              openUrl(starter + linkedin);
            });

            $("#gthb").on("click", function () {
              console.log("clicked");
              openUrl(starter + github);
            });

            $("#twttr").on("click", function () {
              console.log("clicked");
              openUrl(starter + twitter);
            });

            $("#meta").on("click", function () {
              console.log("clicked");
              openUrl(starter + facebook);
            });

            break;
          case "email":
            cmd = "email";
            commandHistory.push(cmd);
            $(".display-area").append(
              `<p class="display-area-text">  Opening email ...
                  </p>`
            );
            window.open("mailto:" + emailTo);
            break;
          case "help":
            cmd = "help";
            commandHistory.push(cmd);
            $(".display-area").append(`<ul class="main-ul">
            <li class="main-li"><table>
              <tr><td class="o0">bio</td><td class="o1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;who is Andrew Adamah?</td>
                </tr>
              </table>
            </li>
            <li class="main-li"><table>
              <tr><td class="o0">projects</td><td class="o1">some projects I've worked on</td>
                </tr>
              </table>
            </li>
            <li class="main-li"><table>
              <tr><td class="o0">socials</td><td class="o1">&nbsp;links to my social media</td>
                </tr>
              </table>
            </li>
            <li class="main-li"><table>
              <tr><td class="o0">email</td><td class="o1">&nbsp;&nbsp;&nbsp;shoot me an email</td>
                </tr>
              </table></li>
            <li class="main-li"><table>
              <tr><td class="o0">help</td><td class="o1">&nbsp;&nbsp;&nbsp;&nbsp;list all available commands</td>
                </tr>
              </table>
            </li>
            <li class="main-li"><table>
              <tr><td class="o0">history</td><td class="o1">&nbsp;view command history</td>
                </tr>
              </table></li>
            <li class="main-li"><table>
              <tr><td class="o0">clear</td><td class="o1"> &nbsp;&nbsp;&nbsp;clear terminal</td>
                </tr>
              </table></li>
          </ul>`);
            break;
          case "history":
            cmd = "history";
            commandHistory.push(cmd);
            // $(".history-ul").html(``);
            $(".display-area").append(
              `
              <ul class="history-ul" id="h` +
                counter +
                `">
              </ul>`
            );

            for (let i = 0; i < commandHistory.length - 1; i++) {
              $(`#h` + counter).append(
                `<li class="history-li"></li> ` + commandHistory[i] + ``
              );
            }
            counter += 1;
            break;
          case "clear":
            cmd = "clear";
            commandHistory.push(cmd);
            $(".display-area").html(``);
            break;
          default:
            cmd = command;
            commandHistory.push(cmd);
            "Command not found. Type 'help' for a list of available commands.";
            $(".display-area").append(
              `<p class="display-area-err"> Command not found. Type <span class="link">'help'</span> for a list of available commands.
                    </p>`
            );
        }

        console.log(commandHistory);
        console.log(screen.width);
        // var cm = document.getElementById("cmd");
        // cm.scrollIntoView({block: "center"});
        $('html,body').animate({
          scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2
      }, 200);
        // window.scrollTo(0, document.body.scrollHeight);
      }
    },
    false
  );

  document.addEventListener("click", function () {
    $("input").focus();
    $("#cmd span").text("guest@andrewadamah.com:~$ ");
  });
});

function openUrl(url) {
  window.open(url, "_blank");
}
