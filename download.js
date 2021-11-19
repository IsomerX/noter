let inputBar = document.getElementById("text-input");
let result = document.getElementById("result");
let text = document.getElementById("text");
let form = document.getElementById("form");
let downloadButton = document.getElementById("downloader");

const downloader = (div) => {
    html2canvas(div).then(function (canvas) {
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        document.getElementById("previewImg").appendChild(canvas);
        anchorTag.download = "filename.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = "_blank";
        anchorTag.click();
    });
};

const kk = () => {
    // setTimeout(2);
    console.log("asdds")
    downloader(result);
};

const clickHandler = (e) => {
    e.preventDefault();
    let font = document.getElementById("fonts").value;
    text.innerText = inputBar.value;
    console.log(font);
    console.log(text.classList);
    text.classList.remove(...text.classList);
    switch(font){
        case "indie":
            text.classList.add("indie");
            break;
        case "kalam":
            text.classList.add("kalam");
            break;
            break;
        default:
            break;
    }
    console.log(text.classList);
};

form.addEventListener("submit", clickHandler);

document.getElementById("fonts").addEventListener("change", clickHandler);
// document.getElementById("text").value.addEventListener("change", clickHandler);

downloadButton.addEventListener("click", kk);
