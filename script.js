function placeImage(x) {
    const div = document.querySelector(".stack-wrapper");
    div.innerHTML = ""; // clear images

    for (counter = 1; counter <= x; counter++) {
        const imagEL = document.createElement("img");
        imagEL.src = "img/img(" + counter + ").png";
        div.appendChild(imagEL);
    }
}
const deleteImg = () => {
    const div = document.querySelector(".stack-wrapper"); 
    div.appendChild(div.children[0]);
    
}

window.onload = function () {
    placeImage(6);
    const div = document.querySelector(".stack-wrapper");
    div.addEventListener('click', deleteImg);

};