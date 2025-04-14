document.addEventListener("DOMContentLoaded", function()
{
    document.getElementById("insert_gomb").addEventListener("click", async function()
    {
        let inputs = document.getElementsByClassName("inputs");
        
        let check = 0;
        let approved = true;
        if((inputs[0].value != "" && inputs[0].value != null) && (inputs[1].value != "" && inputs[1].value != null) && (inputs[2].value != "" && inputs[2].value != null))
        {
            await insert_fetch();
            for(let i = 0; i < inputs.length; i++)
            {
                inputs[i].value = null;
            }
            Swal.fire({
                title: "Upload Successful!",
                text: "Your request has been received and will be supervised shortly.",
                icon: "info",
                confirmButtonText: "Got it!",
                buttonsStyling: false, // Disable default button styling
                customClass: {
                  popup: "upload-alert-popup", // Custom popup styling
                  title: "upload-alert-title", // Custom title styling
                  confirmButton: "upload-alert-button" // Custom button styling
                }
              });
              
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
            Swal.fire({
                title: "Upload Unsuccessful!",
                text: "You have not filled it out correctly!\n\nRequired: Name, Calories, 200 calorie/weight",
                icon: "warning",
                confirmButtonText: "Try Again!",
                buttonsStyling: false, // Disable default button styling
                customClass: {
                  popup: "upload-alert-popup", // Custom popup styling
                  title: "upload-alert-title", // Custom title styling
                  confirmButton: "upload-alert-button" // Custom button styling
                }
              });
              
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