/*
essa função serviu para construir o caça palavras,
por algum motivo ela estava travando o script de executar outras funçoes
mas, mesmo assim ela ajudou a automatizar a contrução da palavra cruzadas
function builder() {

    var a = 0;
    var eixoX = document.querySelectorAll(".line");
    for (var x = 0; x <= 17; x++) {
        for (var y = 1; y <= 17; y++) {
            eixoX[x].innerHTML += `<input type='text' class="celulas" maxlength="1" id='eixoY${y}'></input>`;
        }
        a++
    }
}

builder();
*/
var x1 = document.querySelector("#x1");
var x2 = document.querySelector("#x2");
var x3 = document.querySelector("#x3");
var x4 = document.querySelector("#x4");
var x5 = document.querySelector("#x5");
var x6 = document.querySelector("#x6");
var x7 = document.querySelector("#x7");
var x8 = document.querySelector("#x8");
var x9 = document.querySelector("#x9");
var x10 = document.querySelector("#x10");
var x11 = document.querySelector("#x11");
var x12 = document.querySelector("#x12");
var x13 = document.querySelector("#x13");
var x14 = document.querySelector("#x14");
var x15 = document.querySelector("#x15");
var x16 = document.querySelector("#x16");
var x17 = document.querySelector("#x17");
var x1L = x1.querySelectorAll(".celulas");
var x2L = x2.querySelectorAll(".celulas");
var x3L = x3.querySelectorAll(".celulas");
var x4L = x4.querySelectorAll(".celulas");
var x5L = x5.querySelectorAll(".celulas");
var x6L = x6.querySelectorAll(".celulas");
var x7L = x7.querySelectorAll(".celulas");
var x8L = x8.querySelectorAll(".celulas");
var x9L = x9.querySelectorAll(".celulas");
var x10L = x10.querySelectorAll(".celulas");
var x11L = x11.querySelectorAll(".celulas");
var x12L = x12.querySelectorAll(".celulas");
var x13L = x13.querySelectorAll(".celulas");
var x14L = x14.querySelectorAll(".celulas");
var x15L = x15.querySelectorAll(".celulas");
var x16L = x16.querySelectorAll(".celulas");
x8L[4].value = "A";
x8L[5].value = "D";
x8L[6].value = "R";
x8L[7].value = "E";
x8L[8].value = "S";
x8L[9].value = "S";
x8L[10].value = "-";
x8L[11].value = "B";
x8L[12].value = "U";
x8L[13].value = "S";
x8L[10].value = '-'
x11L[10].value = '-'
x13L[12].value = '-'
x11L[4].value = '-'

function check() {
    function palavra1() {
        if (
            x8L[4].value == "A" &&
            x8L[5].value == "D" &&
            x8L[6].value == "R" &&
            x8L[7].value == "E" &&
            x8L[8].value == "S" &&
            x8L[9].value == "S" &&
            x8L[10].value == "-" &&
            x8L[11].value == "B" &&
            x8L[12].value == "U" &&
            x8L[13].value == "S"

        ) {

            dica1.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
            console.log("Adress-Bus");
        } else {
            console.log("Erro");
        }
    }
    function palavra2() {
        if (
            x3L[0].value == "R" &&
            x4L[0].value == "E" &&
            x5L[0].value == "G" &&
            x6L[0].value == "I" &&
            x7L[0].value == "S" &&
            x8L[0].value == "T" &&
            x9L[0].value == "R" &&
            x10L[0].value == "A" &&
            x11L[0].value == "D" &&
            x12L[0].value == "O" &&
            x13L[0].value == "R" &&
            x14L[0].value == "E" &&
            x15L[0].value == "S"

        ) {


            console.log("Registradores");
            dica18.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }
    } function palavra3() {
        if (
            x1L[10].value == 'M' &&
            x2L[10].value == 'E' &&
            x3L[10].value == 'M' &&
            x4L[10].value == 'O' &&
            x5L[10].value == 'R' &&
            x6L[10].value == 'I' &&
            x7L[10].value == 'A' &&
            x8L[10].value == '-' &&
            x9L[10].value == 'D' &&
            x11L[10].value == '-' &&
            x12L[10].value == 'M' &&
            x13L[10].value == 'A' &&
            x14L[10].value == 'S' &&
            x15L[10].value == 'S' &&
            x16L[10].value == 'A'

        ) {

            console.log("MEMORIA-DE-MASSA");
            dica8.style = "text-decoration: line-through;";
        } else {
            console.log("Erro");
        }
    } function palavra4() {
        if (
            x4L[0].value == 'E' &&
            x4L[1].value == 'P' &&
            x4L[2].value == 'R' &&
            x4L[3].value == 'O' &&
            x4L[4].value == 'M'

        ) {

            console.log("EPROM");
            dica6.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }
    }
    function palavra5() {
        if (
            x2L[2].value == 'T' &&
            x2L[3].value == 'H' &&
            x2L[4].value == 'R' &&
            x2L[5].value == 'E' &&
            x2L[6].value == 'A' &&
            x2L[7].value == 'D' &&
            x2L[8].value == 'S'

        ) {

            console.log("THEREADS");
            dica8.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }
    } function palavra6() {
        if (
            x5L[13].value == 'F' &&
            x6L[13].value == 'L' &&
            x7L[13].value == 'A' &&
            x8L[13].value == 'S' &&
            x9L[13].value == 'H'
        ) {

            console.log("FLASH");
            dica7.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }
    }
    function palavra7() {
        if (
            x6L[0].value == 'I' &&
            x6L[1].value == '7'
        ) {

            console.log("I7");
            dica13.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }
    }
    function palavra8() {
        if (
            x2L[4].value == 'R' &&
            x3L[4].value == 'O' &&
            x4L[4].value == 'M'
        ) {

            console.log("ROM");
            dica5.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }
    }
    function palavra9() {
        if (
            x1L[6].value == 'R' &&
            x2L[6].value == 'A' &&
            x3L[6].value == 'M'
        ) {

            console.log("RAM");
            dica4.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }
    }
    function palavra10() {
        if (
            x4L[7].value == 'C' &&
            x5L[7].value == 'A' &&
            x6L[7].value == 'C' &&
            x7L[7].value == 'H' &&
            x8L[7].value == 'E'
        ) {

            console.log("CACHE");
            dica17.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }
    }
    function palavra11() {
        if (
            x7L[4].value == 'D' &&
            x8L[4].value == 'A' &&
            x9L[4].value == 'T' &&
            x10L[4].value == 'A' &&
            x11L[4].value == '-' &&
            x12L[4].value == 'B' &&
            x13L[4].value == 'U' &&
            x14L[4].value == 'S'
        ) {

            console.log("DATA-BUS");
            dica11.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }
    }
    function palavra12() {
        if (
            x13L[2].value == 'C' &&
            x13L[3].value == 'P' &&
            x13L[4].value == 'U'

        ) {

            console.log("CPU");
            dica2.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }
    }
    function palavra13() {
        if (
            x11L[0].value == 'D' &&
            x11L[1].value == 'U' &&
            x11L[2].value == 'A' &&
            x11L[3].value == 'L' &&
            x11L[4].value == '-' &&
            x11L[5].value == 'C' &&
            x11L[6].value == 'O' &&
            x11L[7].value == 'R' &&
            x11L[8].value == 'E'

        ) {

            console.log("DUAL-CORE");
            dica14.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }
    }
    function palavra14() {
        if (
            x9L[2].value == 'U' &&
            x10L[2].value == 'L' &&
            x11L[2].value == 'A'
        ) {

            ("ULA");
            dica3.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }
    }
    function palavra15() {
        if (
            x13L[8].value == 'Q' &&
            x13L[9].value == 'U' &&
            x13L[10].value == 'A' &&
            x13L[11].value == 'D' &&
            x13L[12].value == '-' &&
            x13L[13].value == 'C' &&
            x13L[14].value == 'O' &&
            x13L[15].value == 'R' &&
            x13L[16].value == 'E'

        ) {

            console.log("QUAD-CORE");
            dica15.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }

    }
    function palavra16() {
        if (
            x6L[10].value == 'I' &&
            x6L[11].value == '5'

        ) {

            console.log("I5");
            dica12.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }

    }
    function palavra17() {
        if (
            x16L[8].value == 'D' &&
            x16L[9].value == 'M' &&
            x16L[10].value == 'A'


        ) {

            console.log("DMA");
            dica9.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }

    }
    function palavra18() {
        if (
            x13L[13].value == 'C' &&
            x14L[13].value == 'S'

        ) {

            console.log("CS");
            dica10.style = `  font-size: 5px;
    text-decoration: line-through;
    color: green;`
        } else {
            console.log("Erro");
        }

    }

    palavra1();
    palavra2();
    palavra3();
    palavra4();
    palavra5();
    palavra6();
    palavra7();
    palavra8();
    palavra9();
    palavra10();
    palavra11();
    palavra12();
    palavra13();
    palavra14();
    palavra15();
    palavra16();
    palavra17();
    palavra18();

}

