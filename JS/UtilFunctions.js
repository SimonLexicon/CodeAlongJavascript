function keyPress()
    {
        let el = document.getElementsByName("inputfield2")[0];
        el.classList.add("MyCssClass");
        alert("you added a class to inputfield2");
    }

function validateInput()
{
    
    let formValue = document.forms["myForm"]["myFormTextInput"].value;
    if(formValue === "")
    {
        document.getElementById("errorMessage").innerHTML = "Error: input needs a value";
    }
    else{
        document.getElementById("errorMessage").innerHTML = "";

        // Post data to backend..
    }
}

function drawMap(tileMap)
{
    
    for(let x = 0; x < tileMap.width; x++)
    {
        for(let y = 0; y < tileMap.height; y ++)
        {
            console.log("x:" + x + " y:" + y);
        }
    }
}

document.addEventListener('keyup', logKey)
function logKey(e)
{
    console.log(e.key);
};

drawMap(tileMap01);