var ourDiv = document.querySelector("div");
var changeBigSize=document.querySelector(".bigSize");
var changeSmalliSize=document.querySelector(".smallSize");
console.log(ourDiv);
console.log(changeBigSize);
console.log(changeSmalliSize);

function bigMode(){
    ourDiv.classList.add("bigSize");
    console.log("hi");
}
function smallSize(){
    ourDiv.classList.add("smallSize");
}
changeBigSize.onclick=bigMode;
changeSmalliSize.onclick=smallSize;