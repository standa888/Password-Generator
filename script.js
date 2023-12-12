
const tlacitkoGenerate = document.querySelector(".generete");
const copyTlacitko = document.querySelector(".copy");

tlacitkoGenerate.addEventListener(`click`, () => {
    const seznam = [
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",],
        ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        ["#", "$", "(", "+", "-", "{"]
    ];

    let heslo = "";

    for(let a = 0; a <= 15; a++) {
        let randomSeznam = Math.floor(Math.random() * 4);
        let druhSeznamu = seznam[randomSeznam];
        let delka = druhSeznamu.length;

        let randomPoradiVSeznamu = Math.floor(Math.random() * delka);
        let poradiVSeznamu = druhSeznamu[randomPoradiVSeznamu];

        heslo = heslo + poradiVSeznamu;

    }

    let input = document.querySelector("#input");
    input.value = heslo;
});


copyTlacitko.addEventListener(`click`, () => {
    let input = document.querySelector("#input");
    navigator.clipboard.writeText(input.value);
    input.value = "Password has been copied";
});