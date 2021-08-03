const map = new Map();

map.set("a", ".-")
map.set("b", "-...")
map.set("c", "-.-.")
map.set("d", "-..")
map.set("e", ".")
map.set("f", "..-.")
map.set("g", "--.")
map.set("h", "....")
map.set("i", "..")
map.set("j", ".---")
map.set("k", "-.-")
map.set("l", ".-..")
map.set("m", "--")
map.set("n", "-.")
map.set("o", "---")
map.set("p", ".--.")
map.set("q", "--.-")
map.set("r", ".-.")
map.set("s", "...")
map.set("t", "-")
map.set("u", "..-")
map.set("v", "...-")
map.set("w", ".--")
map.set("x", "-..-")
map.set("y", "-.--")
map.set("z", "--..")
map.set(" ", "/")

function convertTextToMorse(text) {
    console.log(text)
    let output = ""
    console.log(output)
    for (let i = 0; i < text.length; i++) {
        output += map.get(text.charAt(i)) + " "
    }
    return output.trim();
}

function convertMorseToText(morseCode) {
    let morseArray = morseCode.split(" ")
    let output = ""
    for (let i = 0; i < morseArray.length; i++) {

        for (var [key, value] of map) {
            if (morseArray[i] === value) {
                output += key
            }
        }
    }
    return output
}

module.exports = { convertTextToMorse, convertMorseToText };


