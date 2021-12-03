/*toggle for primary nav*/
document.getElementById("nav-opener").onclick = function() {
    var pNav = document.getElementById("dropdown");
    if (pNav.style.display == "none") {
        pNav.style.display = "flex";
    }else {
        pNav.style.display = "none";
    }
}
