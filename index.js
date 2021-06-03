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
    let node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
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
            
        
            for (let i=0; i<numInput; i++){
                let list = document.createElement("li")
                for (let i=0; i<students.length; i++){
                list.innerText = students[i]
                orderList.appendChild(list)

                }
        divOl.appendChild(h3)
        divOl.appendChild(orderList)

                
            }
            
        }
        console.log(divOl)
    
    })
    
    
    
    // function lists(){
    //     let list = document.createElement("li")

    // }
    
    