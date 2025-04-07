//let biscuits = document.cookie;
let savedItems = localStorage.getItem("saved");
document.addEventListener("DOMContentLoaded", function()
{
    if(savedItems!=null)
    {
        
        let data = JSON.parse(savedItems);
        if(data != [])
        {
            for(let i = 0; i < data.length; i++)
            {
                console.log(i)
                cardGen(data[i]);
            }
            //document.getElementById("Fede").innerHTML = String(savedItems);
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


    async function SelectID(id)
    {
        let response = fetch("/api/selectID?id=" + id,
        {
            method : "GET"
        });
        return (await response).json();
    }
    document.getElementById("addBTN").addEventListener("click", async function()
    {
        let selectedID = document.getElementById("patya").value;
        console.log(selectedID);
        let selectData = (await SelectID(selectedID))[0];

        console.log(selectData);

        let data =
        {
            Name: selectData.Name,
            foodDATA:
            {
                "Calories": selectData.Calories,
                "Fat_g": selectData.Fat_g_,
                "Protein_g": selectData.Protein_g_,
                "Carbohydrate_g": selectData.Carbohydrate_g_,
                "Sugars_g": selectData.Sugars_g_,
                "Fiber_g": selectData.Fiber_g_,
                "200_Calorie_Weight_g": selectData._200_Calorie_Weight_g_,
                "help": selectData._200_Calorie_Weight_g_
            },
            id: selectData.id,
            dine: selectData.dine
        };
        console.log(data);
        //console.log(datya);
        cardGen(data);
        listVisibilityCheck();
    });

    document.getElementById("biscuitButton").addEventListener("click", function()//save
    {
        let biscuitBASE = [];
        let cardHolder = document.getElementById("Fede");
        //localStorage.setItem("saved", cardHolder.innerHTML);
        for(let i = 0; i < cardHolder.childElementCount; i++)
        {
            biscuitBASE.push(JSON.parse(cardHolder.children[i].dataset.adatk))
        }
        // console.log(biscuit);
        //biscuits = biscuitBASE;
        localStorage.setItem("saved", JSON.stringify(biscuitBASE));
        console.log(localStorage.getItem("saved"));

        //console.log(biscuits);
    });

    document.getElementById("biscuitDelete").addEventListener("click", function()
    {
        console.log("fasz");
        localStorage.setItem("saved", "[]");
        console.log(savedItems);
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

        target.appendChild(Name);
    }
}

function cardGen(data)
{
    let target = document.getElementById("Fede");
    let card = document.createElement("div");
        card.dataset.adatk = JSON.stringify(data);
        card.dataset.id = data.id;
        card.classList.add("card");
        let top = document.createElement("div");
            top.classList.add("top");
            top.innerHTML = data.Name

        let middle = document.createElement("div");
            middle.classList.add("middle");
            // middle.innerHTML = + data.Calories + "kcal" + ", " + data.Fat_g_ + ", " + data.Protein_g_ + ", " + data.Carbohydrate_g_ + ", " + data.Sugars_g_ + ", " + data.Fiber_g_ + ", " + data._200_Calorie_Weight_g_
            let table = document.createElement("table");
                for(var key in data.foodDATA)
                {
                    let tr = document.createElement("tr");
                    let th = document.createElement("th");
                        th.innerHTML = key

                    let td = document.createElement("td");
                        td.innerHTML = data.foodDATA[key];
                    
                    tr.appendChild(th);
                    tr.appendChild(td);
                table.appendChild(tr);
                }
                let tr = document.createElement("tr");
                    let th = document.createElement("th");
                        th.innerHTML = "Volume(g)";

                    let td = document.createElement("td");
                        console.log(data.foodDATA.Calories +"*"+ data.foodDATA.help + "/200=" + (data.foodDATA.Calories*data.foodDATA.help)/200);

                        td.innerHTML = Math.round(((data.foodDATA.Calories*data.foodDATA.help)/200) *100)/100
                    
                    tr.appendChild(th);
                    tr.appendChild(td);
                table.appendChild(tr);
                
            middle.appendChild(table);
            
        let bottom = document.createElement("div");
            bottom.classList.add("bottom");
            let deleteBTN = document.createElement("button");
                deleteBTN.type = "button";
                deleteBTN.addEventListener("click", function()
                {
                console.log("Deleting ID:" + this.parentElement.parentElement.dataset.id);
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
                
                let choose = document.createElement("option");
                    choose.hidden = true;
                    choose.innerHTML = "Choose...";
                
                switch(data.dine)
                {
                    case "breakfast":
                        reg.selected = true;
                        break;
                    case "lunch":
                        eb.selected = true;
                        break;
                    case "dinner":
                        vacs.selected = true;
                        break;
                    default:
                        choose.selected = true;
                        break;
                }

                fChoice.appendChild(choose);
                fChoice.appendChild(reg);
                fChoice.appendChild(eb);
                fChoice.appendChild(vacs);
            fChoice.addEventListener("change", function()
            {
                card.dataset.dine = fChoice.value;
                data.dine = fChoice.value;
                console.log(fChoice.value);
                card.dataset.adatk = JSON.stringify(data);
            });
            

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
