var inp:string | null = prompt("Enter any character");

var userinput:string= parseInt(inp);

if(userinput >= "a" && userinput <= "z" ){
    console.log(character is an alphabet)
}
else if(userinput >= "1" && userinput <= "9"){
    console.log(character is an digit)
}