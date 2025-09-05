const alphabet = {
    A: 16,
    B: 16,
    C: 13,
    D: 14,
    E: 15,
    F: 11,
    G: 17,
    H: 13,
    I: 13,
    J: 12,
    K: 11,
    L: 9,
    M: 13,
    N: 13,
    O: 16,
    P: 12,
    Q: 16,
    R: 15,
    S: 17,
    T: 9,
    U: 11,
    V: 9,
    W: 13,
    X: 9,
    Y: 9,
    Z: 15
}

const punctuation = {
    comma: 13,
    exclamation: 4,
    question: 8
}

let character = document.getElementsByClassName("character");
character.innerHTML = "";

function setBlocks() {
    let characterAmount = character.length;
    console.log("The amount of characters to be made is: " + characterAmount)
    let blockAmount = 0;
    for (let i = 0; i < characterAmount; i++){
        /* console.log(letter[i].classList); */
        if (character[i].classList.contains("letterA")) {
            blockAmount = alphabet.A;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockA"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"A\"");
        } else if (character[i].classList.contains("letterB")) {
            blockAmount = alphabet.B;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockB"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"B\"");
        } else if (character[i].classList.contains("letterC")) {
            blockAmount = alphabet.C;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockC"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"C\"");
        } else if (character[i].classList.contains("letterD")) {
            blockAmount = alphabet.D;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockD"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"D\"");
        } else if (character[i].classList.contains("letterE")) {
            blockAmount = alphabet.E;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockE"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"E\"");
        } else if (character[i].classList.contains("letterF")) {
            blockAmount = alphabet.F;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockF"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"F\"");
        } else if (character[i].classList.contains("letterG")) {
            blockAmount = alphabet.G;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockG"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"G\"");
        } else if (character[i].classList.contains("letterH")) {
            blockAmount = alphabet.H;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockH"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"H\"");
        } else if (character[i].classList.contains("letterI")) {
            blockAmount = alphabet.I;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockI"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"I\"");
        } else if (character[i].classList.contains("letterJ")) {
            blockAmount = alphabet.J;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockJ"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"J\"");
        } else if (character[i].classList.contains("letterK")) {
            blockAmount = alphabet.K;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockK"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"K\"");
        } else if (character[i].classList.contains("letterL")) {
            blockAmount = alphabet.L;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockL"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"L\"");
        } else if (character[i].classList.contains("letterM")) {
            blockAmount = alphabet.M;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockM"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"M\"");
        } else if (character[i].classList.contains("letterN")) {
            blockAmount = alphabet.N;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockN"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"N\"");
        } else if (character[i].classList.contains("letterO")) {
            blockAmount = alphabet.O;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockO"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"O\"");
        } else if (character[i].classList.contains("letterP")) {
            blockAmount = alphabet.P;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockP"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"P\"");
        } else if (character[i].classList.contains("letterQ")) {
            blockAmount = alphabet.Q;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockQ"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"Q\"");
        } else if (character[i].classList.contains("letterR")) {
            blockAmount = alphabet.R;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockR"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"R\"");
        } else if (character[i].classList.contains("letterS")) {
            blockAmount = alphabet.S;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockS"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"S\"");
        } else if (character[i].classList.contains("letterT")) {
            blockAmount = alphabet.T;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockT"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"T\"");
        } else if (character[i].classList.contains("letterU")) {
            blockAmount = alphabet.U;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockU"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"U\"");
        } else if (character[i].classList.contains("letterV")) {
            blockAmount = alphabet.V;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockV"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"V\"");
        } else if (character[i].classList.contains("letterW")) {
            blockAmount = alphabet.W;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockW"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"W\"");
        } else if (character[i].classList.contains("letterX")) {
            blockAmount = alphabet.X;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockX"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"X\"");
        } else if (character[i].classList.contains("letterY")) {
            blockAmount = alphabet.Y;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockY"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"Y\"");
        } else if (character[i].classList.contains("letterZ")) {
            blockAmount = alphabet.Z;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block blockZ"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to letter \"Z\"");
        } else if (character[i].classList.contains("comma")) {
            blockAmount = punctuation.comma;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block commaBlock"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to character \"comma\"");
        } else if (character[i].classList.contains("exclamation")) {
            blockAmount = punctuation.exclamation;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block exclamationBlock"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to character \"exclamation\"");
        } else if (character[i].classList.contains("question")) {
            blockAmount = punctuation.question;
            for (let j = 0; j < blockAmount; j++) {
            character[i].innerHTML += "<div class=\"block questionBlock"+ (j + 1) + "\"></div>";
            }
            console.log("Blocks added to character \"question\"");
        }  else {
            console.log("This character is not in the alphabet created in this program.")
        }
    }

    
}

setBlocks();

let blocks = document.getElementsByClassName("block");
let numOfBlocks = blocks.length;

function setSides() {
    let sides = ["front", "back", "right", "left", "top", "bottom"];
    for (let i = 0; i < blocks.length; i++){
        blocks[i].innerHTML = "";
        for (let j = 0; j < sides.length; j++) {
            blocks[i].innerHTML += "<div class=\"side "+ sides[j] + "\"></div>";
        }
    } 
}

setSides();