document.addEventListener("DOMContentLoaded", function()
{
    build(document.getElementById("patya"))
    buildSelect(document.getElementById("select2s"));

    document.getElementById("menuButton").addEventListener("mousedown", function(event)
    {
        event.preventDefault();
        window.open("/", "_self");
    });
});

async function szelektAll()
{
    let response = (await fetch("/api/selectAll",
    {
        method : "GET"   
    }));
    return (await response).json();
}

async function buildSelect(target)
{
    target.innerHTML = null;
    data = await szelektAll();
    for(let i = 0; i < data.length; i++)
    {
        let opt = document.createElement("option");
        opt.value = data[i].id;
        opt.innerHTML = data[i].Name;
        target.appendChild(opt);
    }
}

$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});

async function build(target)
{
    target.innerHTML = null;
    data = await szelektAll();
    console.log(await data.length)
    for(let i = 0;i < data.length ;i++)
    {
        let patya = document.createElement("div");
            patya.classList.add("kaja");

            let Name = document.createElement("div");
                Name.classList.add("kajaText");
                Name.innerHTML = data[i].Name;
            
            let Calories = document.createElement("div");
                Calories.classList.add("kajaText");
                Calories.innerHTML = data[i].Calories + "kcal";

            let Fat_g = document.createElement("div");
                Fat_g.classList.add("kajaText");
                Fat_g.innerHTML = data[i].Fat_g_;
            
            let Protein = document.createElement("div");
                Protein.classList.add("kajaText");
                Protein.innerHTML = data[i].Protein_g_;
            
            let Carb_g = document.createElement("div");
                Carb_g.classList.add("kajaText");
                Carb_g.innerHTML = data[i].Carbohydrate_g_;

            let Sugars_g = document.createElement("div");
                Sugars_g.classList.add("kajaText");
                Sugars_g.innerHTML = data[i].Sugars_g_;
            
            let Fiber_g = document.createElement("div");
                Fiber_g.classList.add("kajaText");
                Fiber_g.innerHTML = data[i].Fiber_g_;
            
            let cal2 = document.createElement("div");
                cal2.classList.add("kajaText");
                cal2.innerHTML = data[i]._200_Calorie_Weight_g_;
            
            
            
            patya.appendChild(Name);
            patya.appendChild(Calories);
            patya.appendChild(Fat_g);
            patya.appendChild(Protein);
            patya.appendChild(Carb_g);
            patya.appendChild(Sugars_g);
            patya.appendChild(Fiber_g);
            patya.appendChild(cal2);
            

                
        
        target.appendChild(patya);
    }
}