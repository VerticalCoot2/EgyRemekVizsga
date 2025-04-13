document.addEventListener("DOMContentLoaded", function()
{
    document.getElementById("insert_gomb").addEventListener("click", async function()
    {
        let inputs = document.getElementsByClassName("inputs");
        
        let check = 0;
        let approved = true
        console.log(inputs[0].value != "" && inputs[0].value != null);
        console.log(inputs[1].value != "" && inputs[1].value != null);
        console.log(inputs[2].value != "" && inputs[2].value != null);
        if((inputs[0].value != "" && inputs[0].value != null) && (inputs[1].value != "" && inputs[1].value != null) && (inputs[2].value != "" && inputs[2].value != null))
        {
            await insert_fetch();
            for(let i = 0; i < inputs.length; i++)
            {
                inputs[i].value = null;
            }
            alert("Upload request successfull! It will be supervised shortly.");
            for(let i = 3; i < inputs.length; i++)
            {
                if(inputs[i].value != "" && inputs[i].value != null)
                {
                    inputs[i].value = -1;
                }
            }
        }
        else
        {
            alert("You have not filled it out correctly!\n\nRequired: Name, Calories, 200 calorie/weight");
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