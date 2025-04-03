document.addEventListener("DOMContentLoaded", function()
{
    build(document.getElementById("patya"));
    //buildSelect(document.getElementById("select2s"));

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

// async function buildSelect(target)
// {
//     target.innerHTML = null;
//     data = await szelektAll();
//     for(let i = 0; i < data.length; i++)
//     {
//         let opt = document.createElement("option");
//         opt.value = data[i].id;
//         opt.innerHTML = data[i].Name;
//         target.appendChild(opt);
//     }
// }

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
            
            // let Calories = document.createElement("option");
            //     Calories.classList.add("kajaText");
            //     Calories.innerHTML = 

            // let Fat_g = document.createElement("option");
            //     Fat_g.classList.add("kajaText");
            //     Fat_g.innerHTML = ;
            
            // let Protein = document.createElement("option");
            //     Protein.classList.add("kajaText");
            //     Protein.innerHTML = ;
            
            // let Carb_g = document.createElement("option");
            //     Carb_g.classList.add("kajaText");
            //     Carb_g.innerHTML = ;

            // let Sugars_g = document.createElement("option");
            //     Sugars_g.classList.add("kajaText");
            //     Sugars_g.innerHTML = ;
            
            // let Fiber_g = document.createElement("option");
            //     Fiber_g.classList.add("kajaText");
            //     Fiber_g.innerHTML = ;
            
            // let cal2 = document.createElement("option");
            //     cal2.classList.add("kajaText");
            //     cal2.innerHTML = ;
            
            
            
            target.appendChild(Name);
            // patya.appendChild(Calories);
            // patya.appendChild(Fat_g);
            // patya.appendChild(Protein);
            // patya.appendChild(Carb_g);
            // patya.appendChild(Sugars_g);
            // patya.appendChild(Fiber_g);
            // patya.appendChild(cal2);
            

                
        
        // target.appendChild(patya);
    }
}