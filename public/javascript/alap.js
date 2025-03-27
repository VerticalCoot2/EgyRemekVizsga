document.addEventListener("DOMContentLoaded", function()
{
    document.getElementById("foodButton").addEventListener("mousedown", function(event)
    {
        event.preventDefault();
        window.open("/etrendkeszito", "_self");
    });
});