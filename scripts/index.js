var github = "github.com/slyce233/";
var twitter = "twitter.com/adamah1_/";
var facebook = "facebook.com/andrew.adamah.1612/";
var linkedin = "linkedin.com/in/andrew-adamah/";

var commands = [
  "whois",
  "projects",
  "socials",
  "email",
  "help",
  "history",
  "clear",
];

var cmd;

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
          case "whois":
            cmd = "whois";
            $(".display-area").append(
              `<p class="display-area-text">  I am a fourth year student at Ontario Tech University. My programming language experience includes Python, Java, JavaScript, SQL, Dart, C++ however I am always open to learning new languages and frameworks. 
                My interests are mainly in Data Science, Machine Learning, Artificial Intelligence and Blockhain.  My main motivation as a Computer Science major is how technology, specifically software and data, can be beneficial to my everyday 
                life as an individual and further expand these findings to larger demographics.
                  </p>`
            );
            break;
          case "projects":
            cmd = "projects";
            break;
          case "socials":
            cmd = "socials";
            $(".display-area").append(
              `<ul class="main-ul">
            <li class="main-li"><table>
              <tr><td class="o0">linkedin</td><td class="o1"><a href="https://www.` +
                linkedin +
                `">` +
                linkedin +
                `</a></td>
                </tr>
              </table>
            </li>
            <li class="main-li"><table>
              <tr><td class="o0">github</td><td class="o1">&nbsp;&nbsp;<a href="https://www.` +
                github +
                `">` +
                github +
                `</a></td>
                </tr>
              </table>
            </li>
            <li class="main-li"><table>
              <tr><td class="o0">twitter</td><td class="o1">&nbsp;<a href="https://www.` +
                twitter +
                `">` +
                twitter +
                `</a></td>
                </tr>
              </table>
            </li>
            <li class="main-li"><table>
              <tr><td class="o0">facebook</td><td class="o1"><a href="https://www.` +
                facebook +
                `">` +
                facebook +
                `<a></td>
                </tr>
              </table></li>
          </ul>`
            );
            break;
          case "email":
            cmd = "email";
            break;
          case "help":
            $(".display-area").append(`<ul class="main-ul">
            <li class="main-li"><table>
              <tr><td class="o0">whois</td><td class="o1">&nbsp;&nbsp;&nbsp;who is Andrew Adamah?</td>
                </tr>
              </table>
            </li>
            <li class="main-li"><table>
              <tr><td class="o0">projects</td><td class="o1">some projects I've worked on</td>
                </tr>
              </table>
            </li>
            <li class="main-li"><table>
              <tr><td class="o0">socials</td><td class="o1">&nbsp;links to my socials</td>
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
            break;
          case "clear":
            cmd = "clear";
            $(".display-area").html(``);
            break;
          default:
            cmd =
              "Command not found. Type 'help' for a list of available commands.";
            $(".display-area").append(
              `<p class="display-area-err"> Command not found. Type <span class="link">'help'</span> for a list of available commands.
                    </p>`
            );
        }

        console.log(cmd);
        window.scrollTo(0, document.body.scrollHeight);
      }
    },
    false
  );

  document.addEventListener("click", function () {
    $("input").focus();
    $("#cmd span").text("guest@andrewadamah.com:~$ ");
  });
});
