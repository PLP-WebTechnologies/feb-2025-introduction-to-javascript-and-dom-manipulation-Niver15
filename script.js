function changeText(){
    const textElement=document.getElementById("dynamicText");
    textElement.textContent="The text has been changed!";
    textElement.style.color="green";
    textElement.style.fontWeight="bold";
}

function toggleElement(){
    const existingElement=document.getElementById("new element");

    if (existingElement){
        existingElement.remove();
    } 
    else {
        const newElement=document.createElement("p");
        newElement.id="newElement";
        newElement.textContent="A new element was added!";
        newElement.style.color="purple";
        document.body.appendChild(newElement);
    }
    
}