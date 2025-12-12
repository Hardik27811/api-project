

// async function () {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await res.json()
//     // console.log(data);
//     const box = document.querySelector("#posts")
//     data.forEach((post)=>{
//         const div = document.createElement("div")
//         div.style.border = "1px solid black";
//         div.style.margin = "10px";
//         div.style.padding = "10px";
//         div.innerHTML = `
//         <h1>${post.id}</h1>
//         <h3>${post.title}</h3>

//         <p>${post.body}</p>
//         `
//         box.appendChild(div)
//     })
    
// }
// ()
async function loadosts() {
    try {
        const res = await fetch("/api/posts");
        const data = await res.json();

        const container = document.getElementById("posts");
        container.innerHTML = "";

        data.forEach(post => {
            const div = document.createElement("div");
        div.style.border = "1px solid black";
            div.style.margin = "10px";
            div.style.padding = "10px";

            div.innerHTML = `
                <h3>${post.title}</h3>
                    <p>${post.body}</p>
                <button onclick="loadPostDetails(${post.id})">View Details</button>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        console.error("Error fetching posts:", error);
        document.getElementById("posts").innerText = "error loading";
    }
}

async function loadPostDetails(id) {
    const res = await fetch(`/api/posts/${id}`);
    const post = await res.json();

    alert(`
        id: ${post.id}
        title: ${post.title}
        author: ${post.username}
        body: ${post.body}
    `);
}

loadosts();
