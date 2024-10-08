var ij = function (num) {
  let j = 0;
  let inp = [];
  let e = 0;
  let cont = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"],
  ];

  let t = 0;
  for (let i = 10; i <= num * 10; i = i * 10) {
    j = num % i;
    let currentchange = j - t;
    t = j;
    let ch = currentchange * 10;

    inp.push(cont[e][ch / i]);
    e++;
  }
  return console.log(inp.reverse().join(""));
};
ij(1543);
/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function (num) {
//     const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
//     const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
//     let res = "";
//     for (let i = 0; i< values.length; i ++){
//         while (num >= values[i]){
//             res += symbols[i];
//             num -= values[i];
//         }
//     }
//     return res;
// };
