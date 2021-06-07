let students = [];

// console.log(nameInput)
function myFunction(){
    let text = "";
    let inputs = document.querySelectorAll("input[type=text]");
    console.log(inputs)
    for (let i = 0; i < inputs.length; i++) {
        text += inputs[i].value;
    }
    let li = document.createElement("li");
    li.classList.add("list-group-item")
    let node = document.createTextNode(text);
    li.appendChild(node);
    document.querySelector(".list-group").appendChild(li);
    students.push(text)
    
}
console.log(students)
let submit = document.querySelector(".btn2")
let divOl = document.getElementById("contain")

    submit.addEventListener("click", function(){
        let numInputs = document.getElementById("nums").value
        
        let numInput = parseInt(numInputs)
       
        
        for (let i=1; i<=numInput; i++){
            let h3 = document.createElement("h4")
            h3.innerText = `Team ${i}`
            let orderList = document.createElement("ul")
            for (let k=0; k<students.length; k++){
                let list = document.createElement("li")
                list.innerText = students[k]
                
                console.log(students)
                
                orderList.appendChild(list)
            }
        divOl.appendChild(h3)
        divOl.appendChild(orderList)

                
            }
            
        }
    
    )
    
    
    
    // function lists(){
    //     let list = document.createElement("li")

    // }
    
    