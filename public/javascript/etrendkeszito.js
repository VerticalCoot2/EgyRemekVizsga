//let biscuits = document.cookie;
let savedItems = localStorage.getItem("saved");
let dailyCalories = 1500;
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
                cardGen(data[i], document.getElementById("Fede"));
            }
            //document.getElementById("Fede").innerHTML = String(savedItems);
        }        
    }

    document.getElementById("biscuitShowButton").addEventListener("click", function()
    {
    //    console.log(biscuits);
        console.log(savedItems);
    });
    listVisibilityCheck(document.getElementById("Fede"));
    listVisibilityCheck(document.getElementById("mindmegette"));
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
        cardGen(data, document.getElementById("Fede"));
        listVisibilityCheck(document.getElementById("Fede"));
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

    document.getElementById("calcDailyCalcs").addEventListener("click", function()
    {
        holder = document.getElementById("mindmegette");
        if(holder.innerHTML != null)
        {
            let caloiesSUM = 0;
            //console.log(holder.childElementCount)
            for(let i = 0; i < holder.childElementCount; i++)
            {
                caloiesSUM += JSON.parse(holder.children[i].dataset.adatk).foodDATA.Calories;
            }
            console.log(caloiesSUM);
            checkCaloriePlan(caloiesSUM);

        }
    });
});

function targetCalorie()
{
    return 1500;
}

function checkCaloriePlan(digestedCalories)
{
    let tC = targetCalorie();
    let beszolasok = [["You're so skinny, you could hula hoop with a Cheerio.","You turn sideways and disappear.","If you walked into a spider web, you’d get tied up.","You're the only person who can use floss as a belt.","You're not skinny – you're basically a line of code.",        "You have to run around in the shower to get wet.",        "Even your shadow looks underweight.",        "You're the reason hangers feel insecure.",        "You fall through cracks in the sidewalk.",        "You could dodge raindrops.",        "You wear spaghetti straps and they look like trench coats.",        "You're the only one who can tightrope walk on a phone cable.",        "If a breeze hits, you end up in the neighbor’s yard.",        "You hide behind lampposts... and vanish.",        "You're the first to get taken by a balloon.",        "You sneeze and fly across the room.",        "Your ribs have their own zip code.",        "You're the stick figure in every diagram.",        "You're the 'before' photo for protein powder.",        "You use a paperclip for a belt buckle.",        "A twig once tried to date you.",        "You're so thin, you could sword fight with a toothpick.",        "Your whole outfit fits in a sandwich bag.",        "You once wore a ring as a bracelet.",        "Your bones echo when you walk.",        "You get lost in your own clothes.",        "You once bench-pressed a cotton ball and pulled something.",        "You do pushups and float.",        "Even your jeans skip leg day.",        "Your profile picture is literally your profile.",        "You turn sideways and become invisible.",        "You're the reason 'low-fat' has a face.",        "You blend in with fence posts.",        "You're a strong gust away from Narnia.",        "You're built like a question mark without the dot.",        "Your shadow is jealous of your mass.",        "You sit on air – no chair needed.",        "You once got mistaken for a mic stand.",        "You skip meals and vanish.",        "You climb stairs and they say, 'Where’d you go?'",        "You're a scarecrow’s role model.",        "Your hugs feel like pipe cleaners.",        "You once hid behind a pencil.",        "You wear chapstick like foundation.",        "Your collarbones have collarbones.",        "You wear shoelaces as scarves.",        "Your blood type is 'transparent'.",        "You use a Q-tip for a walking stick.",        "You're too small for x-rays to detect.",        "A shirt button once outweighed you.",        "Your Halloween costume is always ‘skeleton’.",      ], [        "You're the reason the fridge has a panic button.",        "When you step on a scale, it says 'To be continued...'",        "NASA mistook you for a new moon.",        "You make elevators pray.",        "You're not just big-boned, you’re whole-skeletoned.",        "Your shadow has its own zip code.",        "When you jump, the ground apologizes.",        "You're the only person whose chair files a worker's comp claim.",        "You don't wear clothes, you wear tarps.",        "You sneeze and cause small earthquakes.",        "Even your mirror takes a deep breath before reflecting.",        "Your favorite workout is breathing heavy.",        "You bring a fork to a buffet like it's a weapon.",        "Your footsteps count as seismic activity.",        "Your idea of portion control is using one hand.",        "You sat on a coin and made it a pancake.",        "You enter a pool and it becomes a tsunami simulator.",        "Your bed has suspension – like a truck.",        "You’re on a seafood diet – you see food and eat it.",        "You're the reason they invented reinforced chairs.",        "If you were a superhero, your power would be gravitational pull.",        "You're not overweight, you're just gravitationally gifted.",        "You break a sweat thinking about salad.",        "When you run, the street gets tired.",        "You wear jeans stitched by ship sailmakers.",        "You leave crumbs wherever you go, like edible breadcrumbs.",        "Even your Fitbit gave up.",        "You walk into a bakery and they start baking faster.",        "Your grocery list reads like a restaurant menu.",        "Your clothes shop calls in extra staff when you enter.",        "Your reflection has a lag.",        "You don't walk – you orbit.",        "Your food pyramid is a rectangle... all carbs.",        "When you turn around, people think it's a time lapse.",        "Your napkin is a tablecloth.",        "You ask for a snack and get a pallet of chips.",        "You bite into a burger and it screams.",        "You consider breathing an exercise.",        "You need a GPS just to get around your belly.",        "Your pants size is just 'LOL'.",        "You're the reason the treadmill trembles.",        "You wear XL as a warm-up size.",        "You accidentally sit on your phone and call 911.",        "You don’t eat seconds. You eat fifths.",        "You make Santa look fit.",        "The fridge gets PTSD when it hears you coming.",        "You eat birthday cakes like they're muffins.",        "You're the boss fight in a food-themed video game.",        "You once tried to jog... the street filed a complaint.",        "You sweat gravy.",        "You're the only person who deep-fries cereal.",      ]];
    if(digestedCalories < tC*0.9)
    {
        alert(beszolasok[0][Math.floor(Math.random() * beszolasok[0].length)])
    }
    else if(digestedCalories > tC * 1.1)
    {
        alert(beszolasok[1][Math.floor(Math.random() * beszolasok[1].length) ])
    }
    else
    {
        alert("Splendid! You are capable enough to understand a simple task!");
    }
}
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

function cardGen(data, target)
{
    //let target = document.getElementById("Fede");
    let card = document.createElement("div");
        card.dataset.adatk = JSON.stringify(data);
        card.dataset.id = data.id;
        let top = document.createElement("div");
            top.classList.add("top");
            top.innerHTML = data.Name

        let middle = document.createElement("div");
            middle.classList.add("middle");
            // middle.innerHTML = + data.Calories + "kcal" + ", " + data.Fat_g_ + ", " + data.Protein_g_ + ", " + data.Carbohydrate_g_ + ", " + data.Sugars_g_ + ", " + data.Fiber_g_ + ", " + data._200_Calorie_Weight_g_
            let table = document.createElement("table");
                for(var key in data.foodDATA)
                {
                    if(key != "help")
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
                }
                let tr = document.createElement("tr");
                    let th = document.createElement("th");
                        th.innerHTML = "Volume(g)";

                    let td = document.createElement("td");
                        //console.log(data.foodDATA.Calories +"*"+ data.foodDATA.help + "/200=" + (data.foodDATA.Calories*data.foodDATA.help)/200);
                        //console.log(data.foodDATA);
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
                    listVisibilityCheck(document.getElementById("Fede"));
                    listVisibilityCheck(document.getElementById("mindmegette"));
                });
            deleteBTN.innerHTML = "DELETE";
        
            if(target.id == "Fede")
            {
                card.classList.add("card");
                let eatenBTN = document.createElement("button");
                eatenBTN.type = "button";
                eatenBTN.addEventListener("click", function()
                {
                    console.log("megette: " + this.parentElement.parentElement.dataset.id);
                    this.parentElement.parentElement.remove();
                    cardGen(data, document.getElementById("mindmegette"));
                    listVisibilityCheck(document.getElementById("mindmegette"));
                    listVisibilityCheck(document.getElementById("Fede"));
                    
                });
                eatenBTN.innerHTML = "I ate this";

            let fChoice = document.createElement("select");
                let reg = document.createElement("option");
                    reg.value ="breakfast";
                    reg.innerHTML = "breakfast";
                
                let tiz = document.createElement("option");
                    tiz.value = "elevenses";
                    tiz.innerHTML = "elevenses";
                
                
                let eb = document.createElement("option");
                    eb.value ="lunch";
                    eb.innerHTML = "lunch";
                

                let uzs = document.createElement("option");
                    uzs.value ="snack";
                    uzs.innerHTML = "snack";

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
                    case "elevenses":
                        tiz.selected = true;
                        break;
                    case "lunch":
                        eb.selected = true;
                        break;
                    case "snack":
                        uzs.selected = true;
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
                fChoice.appendChild(tiz);
                fChoice.appendChild(eb);
                fChoice.appendChild(uzs);
                fChoice.appendChild(vacs);
            fChoice.addEventListener("change", function()
            {
                card.dataset.dine = fChoice.value;
                data.dine = fChoice.value;
                //console.log(fChoice.value);
                card.dataset.adatk = JSON.stringify(data);
            });

            bottom.appendChild(eatenBTN);
            bottom.appendChild(fChoice);

            }
            else
            {
                card.classList.add("cardEaten");
                if(data.dine != null)
                {
                    let mire = document.createElement("div");
                        mire.innerHTML = "for " + data.dine;
                    bottom.appendChild(mire);
                }
            }
            
            
            bottom.appendChild(deleteBTN);

            
            card.appendChild(top);
            card.appendChild(middle);
            card.appendChild(bottom);
        target.appendChild(card);
}

function listVisibilityCheck(holder)
{
    if(holder.childElementCount == 0)
    {
        holder.style.display = "none";
    }
    else
    {
        holder.style.display = "flex";
    }
};