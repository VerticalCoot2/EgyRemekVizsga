let biscuits = document.cookie;
let savedItems = localStorage.getItem("saved");
document.addEventListener("DOMContentLoaded", function()
{
if(savedItems!=null)
{
    let data = JSON.parse(savedItems)
if(data != [])
{
    for(let i = 0; i < data.length; i++)
    {
        cardGen(data[i], "");
    }
}
}

    document.getElementById("biscuitShowButton").addEventListener("click", function()
    {
    //    console.log(biscuits);
        console.log(savedItems);
    });
    listVisibilityCheck();
    build(document.getElementById("patya"));

    $('.js-example-basic-single').select2();

    document.getElementById("patya").addEventListener("change", function()
    {
       console.log("pöcs") ;
    });
    document.getElementById("faszomkivan").addEventListener("click", function()
    {
        let shat = document.getElementById("select2-patya-container");
        //console.log(shat);

        let datya =
        {
            Name: shat.innerHTML.split(', ')[0],
            foodSHIT:
            {
                Calories: shat.innerHTML.split(', ')[1],
                Fat_g_: shat.innerHTML.split(', ')[2],
                Protein_g_: shat.innerHTML.split(', ')[3],
                Carbohydrate_g_: shat.innerHTML.split(', ')[4],
                Sugars_g_: shat.innerHTML.split(', ')[5],
                Fiber_g_: shat.innerHTML.split(', ')[6],
                _200_Calorie_Weight_g_: shat.innerHTML.split(', ')[7],
            },
            id: shat.dataset.id,
            dine: shat.dataset.dine
        };
        //console.log(datya);
        cardGen(datya, "");
        listVisibilityCheck();
    });

    document.getElementById("biscuitButton").addEventListener("click", function()
    {
        let biscuitBASE = [];
        let cardHolder = document.getElementById("Fede");
        for(let i = 0; i < cardHolder.childElementCount; i++)
        {
            biscuitBASE.push(JSON.parse(cardHolder.children[i].dataset.adatk))
        }
        // console.log(biscuit);
        biscuits = biscuitBASE;
        localStorage.setItem("saved", JSON.stringify(biscuitBASE));
        console.log(localStorage.getItem("saved"));

        console.log(biscuits);
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

async function build(target)
{
    let patya = document.getElementById("patya");
    patya.classList.add("kaja");
    target.innerHTML = null;
    let data = await szelektAll();
    //console.log(await data.length)
    for(let i = 0;i < data.length ;i++)
    {
    
        let Name = document.createElement("option");
            Name.classList.add("kajaText");
            Name.innerHTML = data[i].Name+", "+ data[i].Calories + "kcal" + ", " + data[i].Fat_g_ + ", " + data[i].Protein_g_ + ", " + data[i].Carbohydrate_g_ + ", " + data[i].Sugars_g_ + ", " + data[i].Fiber_g_ + ", " + data[i]._200_Calorie_Weight_g_;
            Name.value = data[i].id;
            Name.dataset.id = data[i].id;
            Name.dataset.dine = 
            Name.title = data[i].id

        target.appendChild(Name);
    }
}

function cardGen(data, whichIsSelected)
{
    let target = document.getElementById("Fede");
    let card = document.createElement("div");
        card.dataset.adatk = JSON.stringify(data);
        card.dataset.id = data.id;
        card.dataset.dine = whichIsSelected;
        card.classList.add("card");
        let top = document.createElement("div");
            top.classList.add("top");
            top.innerHTML = data.Name

        let middle = document.createElement("div");
            middle.classList.add("middle");
            // middle.innerHTML = + data.Calories + "kcal" + ", " + data.Fat_g_ + ", " + data.Protein_g_ + ", " + data.Carbohydrate_g_ + ", " + data.Sugars_g_ + ", " + data.Fiber_g_ + ", " + data._200_Calorie_Weight_g_
            let table = document.createElement("table");
                for(var key in data.foodSHIT)
                {
                    let tr = document.createElement("tr");
                    let th = document.createElement("th");
                        th.innerHTML = key

                    let td = document.createElement("td");
                        td.innerHTML = data.foodSHIT[key];
                    
                    tr.appendChild(th);
                    tr.appendChild(td);
                table.appendChild(tr);
                }
            middle.appendChild(table);
            
        let bottom = document.createElement("div");
            bottom.classList.add("bottom");
            let deleteBTN = document.createElement("button");
                deleteBTN.type = "button";
                deleteBTN.addEventListener("click", function()
                {
                //console.log("Deleting ID:" + this.parentElement.parentElement.dataset.id);
                this.parentElement.parentElement.remove();
                listVisibilityCheck();
                });
            deleteBTN.innerHTML = "DELETE";

            let fChoice = document.createElement("select");
                let reg = document.createElement("option");
                    reg.value ="breakfast";
                    reg.innerHTML = "breakfast";
                
                let eb = document.createElement("option");
                    eb.value ="lunch";
                    eb.innerHTML = "lunch";
                
                let vacs = document.createElement("option");
                    vacs.value ="dinner";
                    vacs.innerHTML = "dinner";
                switch(whichIsSelected)
                {
                    case "breakfast":
                        reg.selected;
                        break;
                    case "lunch":
                        eb.selected;
                        break;
                    case "dinner":
                        vacs.selected;
                        break;
                    default:
                        let choose = document.createElement("option");
                            choose.selected;
                            choose.hidden;
                            choose.innerHTML = "Choose...";
                        fChoice.append(choose);
                }

                fChoice.appendChild(reg);
                fChoice.appendChild(eb);
                fChoice.appendChild(vacs);
            

            bottom.appendChild((fChoice));
            bottom.appendChild(deleteBTN);

            
            card.appendChild(top);
            card.appendChild(middle);
            card.appendChild(bottom);
        target.appendChild(card);
}

function listVisibilityCheck()
{
    let holder = document.getElementById("Fede");
    if(holder.childElementCount == 0)
    {
        holder.style.display = "none";
    }
    else
    {
        holder.style.display = "flex";
    }
};