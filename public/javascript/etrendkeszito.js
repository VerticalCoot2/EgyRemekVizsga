document.addEventListener("DOMContentLoaded", function()
{
    build(document.getElementById("patya"))

    document.getElementById("menuButton").addEventListener("mousedown", function(event)
    {
        event.preventDefault();
        window.open("/", "_self");
    });
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

    for(let i = 0;i < 100 ;i++)
    {
        let patya = document.createElement("div");
            patya.classList.add("kaja");
            let nev = document.createElement("div");
                nev.classList.add("kajaText");
                nev.innerHTML = data.food[0].nev;
            
            let kaloria = document.createElement("div");
                kaloria.classList.add("kajaText");
                kaloria.innerHTML = data.food[0].kaloria + "kcal";

            let tipus = document.createElement("div");
                tipus.classList.add("kajaText");
                tipus.innerHTML = data.food[0].etkezes_típus;
            
            let linyk = document.createElement("div");//link
                let linykH = document.createElement("a");
                    linykH.classList.add("kajaText");
                    linykH.href = data.food[1].recept_link;
                    linykH.innerHTML = "Recept";
                    linykH.target = "_blank";
                linyk.appendChild(linykH);
            
            patya.appendChild(nev);
            patya.appendChild(kaloria);
            patya.appendChild(tipus);
            patya.appendChild(linyk);

                
        
        target.appendChild(patya);
    }
}