const microtime = require("microtime");

let start = microtime.now();

for(let i=0; i<100; i++){
    console.info("test");
}

console.info("Rap:  " + (microtime.now() - start) + " micro sec");  
