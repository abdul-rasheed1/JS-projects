function computer(){
   let mach = Math.floor(Math.random()*3);
    let play;
    if(mach===0){play = `rock`}
    else if(mach===1){play =`paper`}
    else if(mach===2){play = `scissors`}
    return play
}

function gamer(){
  let user = prompt();
  user = user.toLowerCase();
  return user;
}


function playround(comp,player){

  let vict;
  if(comp===`rock`&&player===`rock`) {
    vict = `play again!!!`;
  }
  else if(comp===`scissors`&&player===`scissors`) {
    vict = `play again!!!`;
  }

  else if(comp===`paper`&&player===`paper`) 
  {
    vict = `play again!!!`;
  }

  else if(comp===`rock`&&player===`scissors`){
    vict = `computere`;
  }
    else if(comp===`scissors`&&player===`rock`){
     vict = `playere`;
  }
  else if(comp===`rock`&& player===`paper`){
     vict = `playere`;
  }
    else if(comp===`paper`&& player===`rock`){
     vict = `computere`;
  }

  else if(comp===`scissors`&& player===`paper`){
     vict = `computere`;
  }
   else if(comp===`paper`&& player===`scissors`){
     vict = `playere`;
  }

  return vict;
  
}

function game(){
let compcount=0;
let playcount=0;
let winn;
for(let i=0;i<5;i++){
let round=playround(computer(),gamer());
if(round===`computere`){
compcount++;
}
else if(round===`playere`){
  playcount++;
}
console.log(round)
console.log(compcount);
console.log(playcount);

}



if(compcount>playcount){
winn =`the computer wins`
}

else if(playcount>compcount){
  winn = `the player wins`
}

return winn;

}