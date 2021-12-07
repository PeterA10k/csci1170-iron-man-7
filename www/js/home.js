document.getElementById("SUBMIT_BUTTON").onClick = submit()

function submit(){
    let content = {
        AttributeOne: document.getElementById("FORM_SEC_ONE").value,
        AttributeTwo: document.getElementById("FORM_SEC_TWO").value,
        AttributeThree: document.getElementById("FORM_SEC_THREE").value,
        AttributeFour: document.getElementById("FORM_SEC_FOUR").value,
        AttributeFive: document.getElementById("FORM_SEC_FIVE").value
    }
    console.log(JSON.stringify(content))

    let newSection = document.createElement("section")
    let newUl = document.createElement("ul")
    for(key in content){
       let newLi = document.createElement("li")
       newLi.innerHTML = content[key]
       newUl.appendChild(newLi)
    }
    newSection.appendChild(newUl)

    document.getElementById("MAIN_CONTENT_ID").appendChild(newSection);

}
