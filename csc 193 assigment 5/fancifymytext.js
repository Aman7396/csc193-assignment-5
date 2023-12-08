document.getElementById("biggerBtn").onclick = function() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
};

function styleText() {
    var textArea = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

document.getElementById("mooBtn").onclick = function() {
    var text = document.getElementById("textInput").value;
    text = text.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-MOO";
        }
    }
    document.getElementById("textInput").value = sentences.join(". ");
};
