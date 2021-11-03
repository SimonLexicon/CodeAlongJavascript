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

//drawMap(tileMap01);



function listEmployees(){
    //String
    var json = {"name": "Simon"};

    // number
    json = {"age": 25};

    //Object 
    json = {
        "Employeee": {
            "name": "Simon",
            "age": 25,
            "city": "Skövde",
        }
    };

    //Array
    json = {
        "employees": ["Simon", "Tobias", "Jonathan"]
    };

    json = {
        "recording": true
    };

    var emp =
    {
        "employees": [
            {"Firstname":"Simon", "lastName": "Heinonen", "age": 25},
            {"Firstname":"Tobias", "lastName": "Andersson", "age": 33},
            {"Firstname":"Jonathan", "lastName": "Larson", "age": 44},
            {"Firstname":"Gustav", "lastName": "Bengtfors", "age": 41},
        ]
    }
    for(x in emp.employees)
    {
        document.getElementById("array").innerHTML += "First name:"
        + emp.employees[x].Firstname + "<br>" +
        "Last name:" + emp.employees[x].lastName + "<br>" + 
        "Age:" + emp.employees[x].age + "<hr>";
    }
}


