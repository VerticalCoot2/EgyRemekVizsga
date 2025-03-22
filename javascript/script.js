document.addEventListener("DOMContentLoaded", function()
{
    build(document.getElementById("patya"))
});

function build(target)
{
    for(let i = 0;i < 100;i++)
    {
        let patya = document.createElement("p");
            patya.innerHTML = "Patya."
        
        target.appendChild(patya);
    }
}