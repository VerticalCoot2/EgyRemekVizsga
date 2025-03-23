document.addEventListener("DOMContentLoaded", function()
{
    build(document.getElementById("patya"))
});

function build(target)
{
    let data =
    {
        "food" : 
        [
            {
                "nev": "Zöldséges csirkeragu",
                "kaloria": "450",
                "etkezes_típus": "Ebéd",
                "recept_link": "https://www.nosalty.hu/recept/zoldseges-csirkeragu"
            },
            {
                "nev": "Zöldséges csirkeragu",
                "kaloria": "450",
                "etkezes_típus": "Ebéd",
                "recept_link": "https://www.nosalty.hu/recept/zoldseges-csirkeragu"
            }
        ]
    };

    for(let i = 0;i < data.food.length ;i++)
    {
        let patya = document.createElement("div");
            patya.classList.add("kaja");
            let nev = document.createElement("div");
                nev.classList.add("kajaText");
                nev.innerHTML = data.food[i].nev;
            
            let kaloria = document.createElement("div");
                kaloria.classList.add("kajaText");
                kaloria.innerHTML = data.food[i].kaloria + "kcal";

            let tipus = document.createElement("div");
                tipus.classList.add("kajaText");
                tipus.innerHTML = data.food[i].etkezes_típus;
            
            let linyk = document.createElement("div");
                let linykH = document.createElement("a");
                    linykH.classList.add("kajaText");
                    linykH.href = data.food[i].recept_link;
                    linykH.innerHTML = "recept";
                    linykH.target = "_blank";
                linyk.appendChild(linykH);
            
            patya.appendChild(nev);
            patya.appendChild(kaloria);
            patya.appendChild(tipus);
            patya.appendChild(linyk);

                
        
        target.appendChild(patya);
    }
}