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
