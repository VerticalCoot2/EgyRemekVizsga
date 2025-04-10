document .addEventListener("DOMContentLoaded", function()
{
    document.getElementById("terv").addEventListener("change", async function()
    {
        console.log("/api/select"+ this.value);
        build("/api/select"+ this.value, document.getElementById("patya"));
        document.getElementById("hiddenAtStart").style.display = "flex";
    });
    document.getElementById("selectSex").addEventListener("change", function()
    {
        console.log(TargetCalorie(80, 176, 20));
    })
    document.getElementById("CalcCalorie").addEventListener("click", function()
    {
        FinalCalorie(document.getElementById("terv").value, TargetCalorie(80,176,20));
        const targetCalorie = FinalCalorie(document.getElementById("terv").value, TargetCalorie(80,176,20));
        localStorage.setItem('targetCalorie', targetCalorie);
    })
});


async function build(url, target)
{
    let patya = document.getElementById("patya");
    patya.classList.add("kaja");
    target.innerHTML = null;
    let data = await fetchGET(url)
    //console.log(await data.length)
    for(let i = 0;i < data.length ;i++)
    {
    
        let Name = document.createElement("option");
            Name.classList.add("kajaText");
            Name.innerHTML = data[i].Name+", "+ data[i].Calories + "kcal" + ", " + data[i].Fat_g_ + ", " + data[i].Protein_g_ + ", " + data[i].Carbohydrate_g_ + ", " + data[i].Sugars_g_ + ", " + data[i].Fiber_g_ + ", " + data[i]._200_Calorie_Weight_g_;
            Name.value = data[i].id;
            Name.dataset.id = data[i].id;

        target.appendChild(Name);
    }
}
async function fetchGET(url)
{
    let response = fetch(url , 
    {
       method: "GET" 
    });
    return (await response).json();
}

function TargetCalorie(weight, height, age)
{
    let sex = document.getElementById("selectSex").value;
    if(sex == "Male")
    {
        return ((10*weight) + (6.25 * height) - (5 * age)) + 5;
    }
    else if(sex == "Female")
    {
        return ((10*weight) + (6.25 * height) - (5 * age)) - 161;
    }
    else
    {
        return "Choose an option!";
    }
}
//lmg = Lose, Maintain or Gain :)
function FinalCalorie(lmg,data)
{
    let activity =parseFloat(document.getElementById("dailyActivity").value);
    if(lmg == "Fogyas")
    {
        return (data * activity) -400;
    }
    else if(lmg == "TomegMegtart")
    {
        return (data * activity);
    }
    else if(lmg == "TomegNovel")
    {
        return (data * activity) + 400;
    }
    else
    {
        return "Something went wrong! :(";
    }
}