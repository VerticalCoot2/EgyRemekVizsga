document.addEventListener("DOMContentLoaded", function()
{
    document.getElementById("insert_gomb").addEventListener("click", async function()
    {
        let inputs = document.getElementsByClassName("inputs");
        
        let check = 0;
        let approved = true
        if((inputs[0].value != "" && inputs[0].value != null) && (inputs[1].value != "" && inputs[1].value != null))
        {
            await insert_fetch();
            for(let i = 0; i < inputs.length; i++)
            {
                inputs[i].value = null;
            }
            alert("Upload request successfull! It will be supervised shortly.");
        }
        else
        {
            alert("You have no filled it out correctly!");
        }
    });
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