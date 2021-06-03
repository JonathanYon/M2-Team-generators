let students = [];

// console.log(nameInput)
function myFunction(){
    let text = "";
    let inputs = document.querySelectorAll("input[type=text]");
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