const githubURL = "https://api.github.com/users/sudo-sturbia/repos";
const projectsList = document.getElementById('projects-list');

// Fetch a list of projects from github.
fetch(githubURL).then(
    function (response) {
        response.json().then(
            function (data) {
                for (let i = 0, length = data.length; i < length; i++) {
                    let dt = document.createElement('dt');
                    let dd = document.createElement('dd');

                    dt.appendChild(document.createTextNode(data[i]["name"]));
                    dd.appendChild(document.createTextNode(data[i]["description"]));

                    projectsList.appendChild(dt);
                    projectsList.appendChild(dd);
                }
            }
        );
    }
);
