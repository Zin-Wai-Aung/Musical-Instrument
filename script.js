let cord=document.getElementById('cord');
let pianoMemory=[];
let list=document.querySelector('.list');

        function play(x){
            const a=new Audio(`sounds/${x}.mp3`);
            a.play();
            cord.value+=x+',';
            console.log(`${x} key`);
        }

        function saveCord(x){
            let input=cord.value;
            pianoMemory.push(input);
            console.log(`${input} save in memory`);
            cord.value='';
            list.innerHTML='';
            pianoMemory.map(function(el,index){
                // list.innerHTML += `<li class="animate__animated animate__fadeInDown">${el} <button onclick='rePlay(${index})'> Replay </button> </li>`;
            let li=document.createElement('li');//<li></li>   
            li.innerHTML = 
            `${el} <button onclick='rePlay(${index})' class='replayBtn'> Replay </button> ` ;
           list.appendChild(li);
            });
           list.lastElementChild.classList='animate__animated animate__fadeInDown';//<li class="">
        }

        let memory=['C4','D4','E4'];
        function playMemory(arr,delay=400){
            let x=delay;
            arr.map(function(el){
                setTimeout(play,x,el);
                x+=delay;
            })
        }

        function rePlay(x){
            let current=pianoMemory[x].split(',');
            current.pop();
            playMemory(current);    
        }
        //C
        const C4Key = document.querySelector(".C4-key");
        const C4Active = () => {
          C4Key.classList.add("active");
          setTimeout(() => C4Key.classList.remove("active"), 200);
        };
        C4Key.addEventListener("click", C4Active);
         
        
        // Db4
    const Db4Key = document.querySelector(".Db4-key");
    const Db4Active = () => {
      Db4Key.classList.add("active");
      setTimeout(() => Db4Key.classList.remove("active"), 200);
    };
    Db4Key.addEventListener("click", Db4Active);

    // D4
    const D4Key = document.querySelector(".D4-key");
    const D4Active = () => {
      D4Key.classList.add("active");
      setTimeout(() => D4Key.classList.remove("active"), 200);
    };
    D4Key.addEventListener("click", D4Active);

// Eb4
const Eb4Key = document.querySelector(".Eb4-key");
const Eb4Active = () => {
  Eb4Key.classList.add("active");
  setTimeout(() => Eb4Key.classList.remove("active"), 200);
};
Eb4Key.addEventListener("click", Eb4Active);

// E4
const E4Key = document.querySelector(".E4-key");
const E4Active = () => {
  E4Key.classList.add("active");
  setTimeout(() => E4Key.classList.remove("active"), 200);
};
E4Key.addEventListener("click", E4Active);

// F4
const F4Key = document.querySelector(".F4-key");
const F4Active = () => {
  F4Key.classList.add("active");
  setTimeout(() => F4Key.classList.remove("active"), 200);
};
F4Key.addEventListener("click", F4Active);

// Gb4
const Gb4Key = document.querySelector(".Gb4-key");
const Gb4Active = () => {
  Gb4Key.classList.add("active");
  setTimeout(() => Gb4Key.classList.remove("active"), 200);
};
Gb4Key.addEventListener("click", Gb4Active);

// G4
const G4Key = document.querySelector(".G4-key");
const G4Active = () => {
  G4Key.classList.add("active");
  setTimeout(() => G4Key.classList.remove("active"), 200);
};
G4Key.addEventListener("click", G4Active);

// Ab4
const Ab4Key = document.querySelector(".Ab4-key");
const Ab4Active = () => {
  Ab4Key.classList.add("active");
  setTimeout(() => Ab4Key.classList.remove("active"), 200);
};
Ab4Key.addEventListener("click", Ab4Active);

// A4
const A4Key = document.querySelector(".A4-key");
const A4Active = () => {
  A4Key.classList.add("active");
  setTimeout(() => A4Key.classList.remove("active"), 200);
};
A4Key.addEventListener("click", A4Active);

// Bb4
const Bb4Key = document.querySelector(".Bb4-key");
const Bb4Active = () => {
  Bb4Key.classList.add("active");
  setTimeout(() => Bb4Key.classList.remove("active"), 200);
};
Bb4Key.addEventListener("click", Bb4Active);

// B4
const B4Key = document.querySelector(".B4-key");
const B4Active = () => {
  B4Key.classList.add("active");
  setTimeout(() => B4Key.classList.remove("active"), 200);
};
B4Key.addEventListener("click", B4Active);

// C5
const C5Key = document.querySelector(".C5-key");
const C5Active = () => {
  C5Key.classList.add("active");
  setTimeout(() => C5Key.classList.remove("active"), 200);
};
C5Key.addEventListener("click", C5Active);

// Db5
const Db5Key = document.querySelector(".Db5-key");
const Db5Active = () => {
  Db5Key.classList.add("active");
  setTimeout(() => Db5Key.classList.remove("active"), 200);
};
Db5Key.addEventListener("click", Db5Active);

// D5
const D5Key = document.querySelector(".D5-key");
const D5Active = () => {
  D5Key.classList.add("active");
  setTimeout(() => D5Key.classList.remove("active"), 200);
};
D5Key.addEventListener("click", D5Active);

// Eb5
const Eb5Key = document.querySelector(".Eb5-key");
const Eb5Active = () => {
  Eb5Key.classList.add("active");
  setTimeout(() => Eb5Key.classList.remove("active"), 200);
};
Eb5Key.addEventListener("click", Eb5Active);

// E5
const E5Key = document.querySelector(".E5-key");
const E5Active = () => {
  E5Key.classList.add("active");
  setTimeout(() => E5Key.classList.remove("active"), 200);
};
E5Key.addEventListener("click", E5Active);

//Drum Key

  //Crash
  const crashKey = document.querySelector(".crash");
  const crashActive = () => {
    crashKey.classList.add("active");
    setTimeout(() => crashKey.classList.remove("active"), 200);
  };
  crashKey.addEventListener("click", crashActive);

  //Small
  const smallKey = document.querySelector(".small");
  const smallActive = () => {
    smallKey.classList.add("active");
    setTimeout(() => smallKey.classList.remove("active"), 200);
  };
  smallKey.addEventListener("click", smallActive);

  //Medium
  const mediumKey = document.querySelector(".medium");
  const mediumActive = () => {
    mediumKey.classList.add("active");
    setTimeout(() => mediumKey.classList.remove("active"), 200);
  };
  mediumKey.addEventListener("click", mediumActive);

  //Ride
  const rideKey = document.querySelector(".ride");
  const rideActive = () => {
    rideKey.classList.add("active");
    setTimeout(() => rideKey.classList.remove("active"), 200);
  };
  rideKey.addEventListener("click", rideActive);

  //Hi Hat
  const hatKey = document.querySelector(".hihat");
  const hatActive = () => {
    hatKey.classList.add("active");
    setTimeout(() => hatKey.classList.remove("active"), 200);
  };
  hatKey.addEventListener("click", hatActive);

//Snare
const snareKey = document.querySelector(".snare");
const snareActive = () => {
  snareKey.classList.add("active");
  setTimeout(() => snareKey.classList.remove("active"), 200);
};
snareKey.addEventListener("click", snareActive);

//Bass
const bassKey = document.querySelector(".bass");
const bassActive = () => {
  bassKey.classList.add("active");
  setTimeout(() => bassKey.classList.remove("active"), 200);
};
bassKey.addEventListener("click", bassActive);

//Floor
const floorKey = document.querySelector(".floor");
const floorActive = () => {
  floorKey.classList.add("active");
  setTimeout(() => floorKey.classList.remove("active"), 200);
};
floorKey.addEventListener("click", floorActive);

  //Splash
  const splashKey = document.querySelector(".splash");
  const splashActive = () => {
    splashKey.classList.add("active");
    setTimeout(() => splashKey.classList.remove("active"), 200);
  };
  splashKey.addEventListener("click", splashActive);


      window.addEventListener("keydown", ({ keyCode }) => {
          // Press Q
          if (keyCode === 81){
            play('C4');
            return C4Active();
          } 
        
          // Press 2
          if (keyCode === 50){
            play('Db4');
            return Db4Active();
          }
        
          // Press W
          if (keyCode === 87){
            play('D4');
            return D4Active();
          }
        
          // Press 3
          if (keyCode === 51){
            play('Eb4');
            return Eb4Active();
          }
        
          // Press E
          if (keyCode === 69){
            play('E4');
            return E4Active();
          } 
        
          // Press R
          if (keyCode === 82){
            play('F4');
            return F4Active();
          }  
        
          // Press 5
          if (keyCode === 53){
            play('Gb4');
            return Gb4Active();
          }  
        
          // Press T
          if (keyCode === 84){
            play('G4');
            return G4Active();
          }  
        
          // Press 6
          if (keyCode === 54){
            play('Ab4');
            return Ab4Active();
          } 
        
          // Press Y
          if (keyCode === 89){
            play('A4');
            return A4Active();
          }  
        
          // Press 7
          if (keyCode === 55){
            play('Bb4');
            return Bb4Active();
          }  
        
          // Press U
          if (keyCode === 85){
            play('B4');
            return B4Active();
          }  
        
          // Press I
          if (keyCode === 73){
            play('C5');
            return C5Active();
          }  
        
          // Press 9
          if (keyCode === 57){
            play('Db5');
            return Db5Active();
          }  
        
          // Press O
          if (keyCode === 79){
            play('D5');
            return D5Active();
          }  
        
          // Press 0 
          if (keyCode === 48){
            play('Eb5');
            return Eb5Active();
          }  
        
          // Press P
          if (keyCode === 80){
            play('E5');
            return E5Active();
          } 

          //Press A
          if (keyCode === 65){
            play('crash');
            return crashActive();
          } 
     
          //Press S
          if (keyCode === 83){
            play('small');
            return smallActive();
          } 

          //Press D
          if (keyCode === 68){
            play('medium');
            return mediumActive();
          } 

          //Press F
          if (keyCode === 70){
            play('ride');
            return rideActive();
          } 

          //Press H
          if (keyCode === 72){
            play('hihat');
            return hatActive();
          } 

          //Press J
          if (keyCode === 74){
            play('snare');
            return snareActive();
          } 

          //Press K
          if (keyCode === 75){
            play('bass');
            return bassActive();
          } 

          //Press L
          if (keyCode === 76){
            play('floor');
            return floorActive();
          } 

          //Press ;
          if (keyCode === 186){
            play('splash');
            return splashActive();
          } 

          // Press Enter
          if (keyCode === 13){
            saveCord();
          }

        }); 