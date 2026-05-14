const darkBtn = document.querySelector("#darkMode");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
const viewBtn = document.querySelector("#viewBtn");

viewBtn.addEventListener("click", () => {

    document.querySelector("#projects")
    .scrollIntoView({
        behavior: "smooth"
    });

});


const projects = [

    {
        title: "Weather App",
        description: "HTML CSS JavaScript",
        details: "Application météo utilisant une API."
    },

    {
        title: "ToDo App",
        description: "Task management application",
        details: "Ajout et suppression des tâches."
    },

    {
        title: "Movie App",
        description: "Fetch API movie application",
        details: "Recherche de films avec API."
    }

];

const projectsSection =
document.querySelector("#projects");

projects.forEach((project) => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <button class="detailsBtn">
            Details
        </button>

        <p class="details" style="display:none;">
            ${project.details}
        </p>
    `;

    projectsSection.appendChild(card);

});
const buttons =
document.querySelectorAll(".detailsBtn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const details =
        button.nextElementSibling;

        if(details.style.display === "none"){

            details.style.display = "block";

        }

        else{

            details.style.display = "none";

        }

    });

});
const form =
document.querySelector("#contactForm");

const result =
document.querySelector("#result");

form.addEventListener("submit",
(event) => {

    event.preventDefault();

    const name =
    document.querySelector("#name").value;

    const email =
    document.querySelector("#email").value;

    const message =
    document.querySelector("#message").value;

    if(name === "" ||
       email === "" ||
       message === ""){

        result.innerHTML =
        "Please fill all fields";

        result.style.color = "red";
    }

    else{

        result.innerHTML =
        "Message sent successfully";

        result.style.color = "green";

        form.reset();
    }

});
async function getPosts(){

    try{

        const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=3"
        );

        const data = await response.json();

        const postsSection =
        document.querySelector("#posts");

        data.forEach((post) => {

            const div =
            document.createElement("div");

            div.classList.add("card");

           div.innerHTML = `
    <h3>${post.title.slice(0,40)}...</h3>

    <p>
        ${post.body.slice(0,80)}...
    </p>
`;
            postsSection.appendChild(div);

        });

    }

    catch(error){

        console.log(error);

    }

}

getPosts();