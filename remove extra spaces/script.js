function removeSpaces() {
            let originalText = document.getElementById("originalText").value;
            let newText = originalText.replaceAll(" ", "");
            document.getElementById("output").innerHTML = newText;
}