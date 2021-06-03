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
// console.log(students)
let submit = document.querySelector(".btn2")
let divOl = document.getElementById("contain")
// console.log(submit)
    submit.addEventListener("click", function(){
        let numInputs = document.getElementById("nums").value
        console.log(numInputs)
    if (numInputs == 1){
        for (let i=0; i<numInputs; i++){
            let ol1 = document.createElement("ol")
            // let li1 = document.createElement("li")
            if (students.length = 2){
                for (let i=0; i<students.length; i++){
            let li1 = document.createElement("li")
                    li1.innerText = students[i]
                ol1.appendChild(li1)

                }
            }
            divOl.appendChild(ol1)
        }
    }
    
    })
// function myTeam(){
//     let numInputs = document.querySelector("#quantity").value;
//     if (numInputs === 1){
//         // for (let i=0; i<numInputs; i++){
//         //     let ol = 
//         // }
//         console.log("this is one")
//     } else if (numInputs === 2){
//         console.log("this is 2")
//     }
    
// }
// console.log

    