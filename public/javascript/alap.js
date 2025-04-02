document.addEventListener("DOMContentLoaded", function()
{
    document.getElementById("foodButton").addEventListener("mousedown", function(event)
    {
        event.preventDefault();
        window.open("/etrendkeszito", "_self");
    });
    let titel = document.getElementById("tojgli");
    titel.innerHTML = "DietInator"
    tojgli.addEventListener("mouseenter", function()
    {
       this.innerHTML = "Patya"; 
    });
    tojgli.addEventListener("mouseleave", function()
    {
       this.innerHTML = "DietInator";
    });

});