document.addEventListener("DOMContentLoaded", function()
{
    build(document.getElementById("patya"));

    document.getElementById("menuButton").addEventListener("mousedown", function(event)
    {
        event.preventDefault();
        window.open("/", "_self");
    });
    $('.js-example-basic-single').select2();
});
async function szelektAll()
{
    let response = (await fetch("/api/selectAll",
    {
        method : "GET"   
    }));
    return (await response).json();
}


async function build(target)
{let patya = document.getElementById("patya");
            patya.classList.add("kaja");
    target.innerHTML = null;
    let data = await szelektAll();
    console.log(await data.length)
    for(let i = 0;i < data.length ;i++)
    {
        

            let Name = document.createElement("option");
                Name.classList.add("kajaText");
                Name.innerHTML = data[i].Name+" "+ data[i].Calories + "kcal" + " " + data[i].Fat_g_ + " " + data[i].Protein_g_ + " " + data[i].Carbohydrate_g_ + " " + data[i].Sugars_g_ + " " + data[i].Fiber_g_ + " " + data[i]._200_Calorie_Weight_g_;

            target.appendChild(Name);
    }
}