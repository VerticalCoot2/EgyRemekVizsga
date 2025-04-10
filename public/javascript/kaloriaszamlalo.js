document .addEventListener("DOMContentLoaded", function()
{
    document.getElementById("terv").addEventListener("change", async function()
    {
        console.log("/api/select"+ this.value);
        build("/api/select"+ this.value, document.getElementById("patya"));
        $('.js-example-basic-single').select2();
        document.getElementById("hiddenAtStart").style.display = "flex";
    });
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
    let response = (await fetch(url , 
    {
       method: "GET" 
    }));
    return (await response).json();
}