function* fibs(){
    let a=0;
    let b=1;
    while(true){
        yield b;
        [a,b]=[b,a+b];//0,1:1:1:1:2:2:3:3:5:5:8
    }
}
let [first,second,third,fourth,fifth,sixth,seven]=fibs();
console.log(seven);
