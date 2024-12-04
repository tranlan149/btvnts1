let h:string = "hello world";
let a = new Set();
let re:string = "";

for (let i = 0; i < h.length; i++) { 
    if (!a.has(h[i])) { 
        a.add(h[i]); 
        re += h[i]; 
    }
}

console.log(re); 

for (let i = 1; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(""); 
}