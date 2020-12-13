const githubURL = "https://api.github.com/users/sudo-sturbia/repos";
const projectsList = document.getElementById('projects-list');

fetch(githubURL).then(
    function (response) {
        response.json().then(
            function (data) {
                for (let i = 0, length = data.length; i < length; i++) {
                    let title = document.createElement("dt");
                    let titleText = document.createElement("p");
                    let titleLink = document.createElement("a");

                    let description = document.createElement("dd");

                    titleLink.title = "Project on github.";
                    titleLink.href = data[i]["html_url"];
                    titleLink.target="_blank";
                    titleLink.rel="noopener noreferrer";

                    titleText.appendChild(document.createTextNode(data[i]["name"]));
                    titleLink.appendChild(document.createTextNode("sudo-sturbia/" + data[i]["name"]));
                    title.appendChild(titleText);
                    title.appendChild(titleLink);

                    description.appendChild(document.createTextNode(data[i]["description"]));

                    projectsList.appendChild(title);
                    projectsList.appendChild(description);
                }
            }
        );
    }
);
