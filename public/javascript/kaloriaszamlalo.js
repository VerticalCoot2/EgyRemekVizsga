document.addEventListener("DOMContentLoaded", function()
{
    document.getElementById("insert_gomb").addEventListener("click", async function()
{
    await insert_fetch();
})
});

async function insert_fetch()
{
    let formData = new FormData(document.getElementById("insert"));
    let response = fetch("/api/insertAdmin",
        {
            method : "POST",
            body : formData
        }
    )
    return (await response).json();
}