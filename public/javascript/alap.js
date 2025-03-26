document.addEventListener("DOMContentLoaded", function()
{
    document.getElementById("foodButton").addEventListener("mousedown", async function(event)
    {
        event.preventDefault();
        window.open("/etrendkeszito", "_self");
        // let response = fetch("/etrendkeszito",
        //     {
        //         method : "GET"
        //     }
        // )
        // return (await response).text();
    });
});