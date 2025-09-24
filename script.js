console.log("Ashwin");

let gameMap = document.getElementById('gameMap');
const c = gameMap.getContext('2d');
let rotateArc = [];
let buildings = [];
let keys = [];
let powerUps = [];
let powerUps2 = [];
let dataMinearr = [];
let teleportArr = [];
let safeZone = [];
let keyCount = 0;
const bullets = [];
let rifBullet = [];
let gunBullet = [];
let arcAlive = [];
let buildAlive = [];
let buildHits = [];
let dataShards = 0;
let isRunning = true;
let totKeys = 0;
let frameCount = 0;
let count = 0;
let progress = 0;
let progress2 = 0;
let isCb = false;
let isBs = false;
let sysHealth = 80;
let totResult = 0;
let powerDiamond = 0;
let powerStar = 0;
let playerName = 'Player';
let highScore = 0;
let isShield = false;
let playerDs = 0;

let isKeyTake = false;

let playHealth = 100;

let safZoncount;

let currShard;
let currSd;
let keyReq = 0;

console.log(totKeys);
let shardDec = [];

let lBotX = 580;
let lBotY = 100;
let lBotdy = 0.1;

let hBotX = 960;
let hBotY = 190;
let hBotdx = 0.08;

let snBotX = 90;
let snBotY = 90;
let snBotdx = 0.2;
let snBotdy = 0.2;

let playerDetected = false;
let originalLbotY = lBotY;

let isLBot = true;
let isSnBot = true;
let isHBot = true;

let isRifle = false;
let isGun = false;
let botBullet = [];

const keycoll = document.getElementById('keycolValue');
const keyvalue = document.getElementById('keyvalue');
const pausebt = document.getElementById('pause');
const resumebt = document.getElementById('resume');
const resetbt = document.getElementById('reset');
const statement = document.getElementById('stateline');
const statement2 = document.getElementById('stateline2');
const yesBt = document.getElementById('yeschoice');
const clickBt = document.getElementById('clickchoice');
const noBt = document.getElementById('noChoice');
const closeBt = document.getElementById('closeButt');
const closeBt2 = document.getElementById('closeButt2');
const closeBt3 = document.getElementById('closeButt3');
const closeBt4 = document.getElementById('closeButt4');
const closeBt5 = document.getElementById('closeButt5');
const closeBt6 = document.getElementById('closeButt6');

const cBoard = document.getElementById('cHub');
const pBar = document.getElementById('pBar');
const pBar2 = document.getElementById('pBar2');
const bStation = document.getElementById('baseStation');
const lbButt = document.getElementById('lBoardbutt');
const dhub = document.getElementById('dataHub');
const thub = document.getElementById('TeleHub');

const buy1 = document.getElementById('it1buy');
const buy2 = document.getElementById('it2buy');
const buy3 = document.getElementById('it3buy');
const buy4 = document.getElementById('it4buy');
const buy5 = document.getElementById('it5buy');
const buy6 = document.getElementById('it6buy');


const have1 = document.getElementById('it1Have');
const have2 = document.getElementById('it2Have');
const have3 = document.getElementById('it3Have');
const have4 = document.getElementById('it4Have');
const have5 = document.getElementById('it5Have');
const have6 = document.getElementById('it6Have');

const playerdshard = document.getElementById('shardcolValue');

let have1val = 0;
let have2val = 0;
let have3val = 0;
let have4val = 0;
let have5val = 0;
let have6val = 0;

let riflehit = false;
let gunHit = false;
let gunHitNo = 0;
let rifHitno = 0;

let isSafe = 0;

const powerSnd = new Audio('power.mp3');

const score = document.getElementById('scoreValue');

const shard1 = document.getElementById('shard1');
const shard2 = document.getElementById('shard2');
const shard3 = document.getElementById('shard3');
const shard4 = document.getElementById('shard4');
const shard5 = document.getElementById('shard5');
const shard6 = document.getElementById('shard6');

const sd1 = document.getElementById('sd1');
const sd2 = document.getElementById('sd2');
const sd3 = document.getElementById('sd3');
const sd4 = document.getElementById('sd4');
const sd5 = document.getElementById('sd5');
const sd6 = document.getElementById('sd6');

const marBoard = document.getElementById('market');
const lBoard = document.getElementById('lBoard');

const starShield = document.getElementById('starVal');
const heartHeal = document.getElementById('heartVal');

const healthButt = document.getElementById('heart');
const shieldButt = document.getElementById('Star');


const clickSound = new Audio('click.mp3');

const pHealth = document.getElementById('phealthvalue');
const systemHealth = document.getElementById('syshealthvalue');
const bsysHealth = document.getElementById('syshealthvalueBox');

pausebt.addEventListener('click', pause);
resumebt.addEventListener('click', resume);


resetbt.addEventListener('click', () => {
    location.reload();
})
closeBt.addEventListener('click', () => {
    clickSound.play();
    cBoard.style.display = 'none';
    player.y = player.y - 20;
    resume();
});
closeBt2.addEventListener('click', () => {
    clickSound.play();
    bStation.style.display = 'none';
    player.y = player.y - 20;
    resume();
});
closeBt3.addEventListener('click', () => {
    clickSound.play();
    marBoard.style.display = 'none';
    player.y = player.y - 20;
    resume();
});
closeBt4.addEventListener('click', () => {
    clickSound.play();
    lBoard.style.display = 'none';
    resume();
})
closeBt5.addEventListener('click', () => {
    clickSound.play();
    dhub.style.display = 'none';
    player.y = player.y - 20;
    resume();
});
closeBt6.addEventListener('click', () => {
    clickSound.play();
    thub.style.display = 'none';
    player.y = player.y - 20;
    resume();
});

noBt.addEventListener('click', () => {
    clickSound();
    cBoard.style.display = 'none';
    player.y = player.y - 20;
})
yesBt.addEventListener('click', () => {
    clickSound.play();
    if(keyReq > dataShards){
        alert("Keys not Sufficient");
    }
    else{
     const interval = setInterval(() => {
    if(progress >= 100){
        clearInterval(interval);
        statement.innerText = "Data Shard Decrypted Successfully."
        playerDs++;
        playerdshard.innerText = `${playerDs}`;
        keycoll.innerHTML = (dataShards - keyReq);
        dataShards = dataShards - keyReq;
        totResult = totResult + +keyReq;
        highScore = highScore + totResult*3;
        score.innerText = `${highScore}`;
        currShard.style.display = 'none';
        currSd.style.display = 'block';
        document.getElementById('noteInfo').innerText = "Deliver the decrypted Data Shard to the Base Station";
    }
    else {
        progress += 1;
        pBar.style.width = progress + "%";
        pBar.innerText = progress + "%";
        statement.innerText = "Decrypting Data Shard...";
    }
}, 80);}
})
clickBt.addEventListener('click', () => {
     clickSound.play();
     const interval = setInterval(() => {
    if(progress2 >= 100){
        clearInterval(interval);
        sd1.style.display = 'none';
        sd2.style.display = 'none';
        sd3.style.display = 'none';
        sd4.style.display = 'none';
        sd5.style.display = 'none';
        sd6.style.display = 'none';
        statement2.innerText = "Data Shard Transported Successfully."
        playerDs = 0;
        playerdshard.innerText = `${playerDs}`;
        sysHealth = sysHealth + (totResult * 0.7);
        systemHealth.innerHTML = sysHealth;
        highScore = highScore + totResult*5;
        score.innerText = `${highScore}`;
        bsysHealth.innerText = `${sysHealth} %`;
        document.getElementById('noteInfo2').innerText = "System Health Boosted!";
        totResult = 0;
    }
    else {
        progress2 += 1;
        pBar2.style.width = progress2 + "%";
        pBar2.innerText = progress2 + "%";
        statement2.innerText = "Transporting Data Shard...";
    }
}, 80);
})

lbButt.addEventListener('click', () => {
    pause();
   lBoard.style.display = 'flex';
})

healthButt.addEventListener('click', () => {
    while(powerDiamond > 0 && playHealth < 95){
        playHealth = playHealth + 5;
        powerDiamond--;
        heartHeal.innerText = `${powerDiamond}`;
        pHealth.innerText = `${playHealth.toFixed(1)} %`;
    }
})


const playerImage = new Image();
playerImage.src = 'spritesheet.png';


const spriteCols = 7;
const spriteRows = 2; 
const frameWidth = playerImage.width / spriteCols;
const frameHeight = playerImage.height / spriteRows;

let srcX = 0;
let srcY = 0;
let frameDrawn = 0;



const player = {
    x: gameMap.width / 2 + 1300,
    y: gameMap.height / 2 + 320,
    radius: 10,
    speed: 3,
    dx: 0,
    dy: 0,
    frameX: 0,
    frameY: 0,
    frameCount: spriteCols,
    frameInterval: 10,
    frameTimer: 0
};

gameMap.height = window.innerHeight;
gameMap.width = window.innerWidth;


const blockSize = gameMap.width/8;
const cols = Math.floor(gameMap.width/blockSize);
const rows = Math.floor(gameMap.height/blockSize);


document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp') {
        player.dy = -player.speed;
        player.frameY = 0;
        if(isSafe === 1 && !isShield){
            isSafe = 0;
            isKeyTake = false;
        }
        
     }
    if(e.key === 'ArrowDown') {
        player.dy = player.speed; 
        player.frameY = 1;
        if(isSafe === 1 && !isShield){
            isSafe = 0;
            isKeyTake = false;
        }
    }
    if(e.key === 'ArrowLeft') {
        player.dx = -player.speed; 
        player.frameY = 1;
        if(isSafe === 1 && !isShield){
            isSafe = 0;
            isKeyTake = false;
        }
    }
    if(e.key === 'ArrowRight') {
        player.dx = player.speed;
        player.frameY = 1; 
        if(isSafe === 1 && !isShield){
            isSafe = 0;
            isKeyTake = false;
        }
    }
})
document.addEventListener('keyup', (e) => {
    if(e.key === 'ArrowUp' || e.key === 'ArrowDown') player.dy = 0;
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') player.dx = 0;
})

const interval = setInterval(() => {
  if (sysHealth > 0) {
    sysHealth -= 1; 
    systemHealth.innerHTML = sysHealth;
    bsysHealth.innerText = `${sysHealth.toFixed()} %`;

    if (sysHealth <= 30) {
      systemHealth.style.backgroundColor = 'red';
    } else if (sysHealth <= 60) {
      systemHealth.style.backgroundColor = 'orange';
    }
  } else {
    clearInterval(interval);
  }
}, 10000);

for(let i = 0; i <= rows; i++){
    rotateArc[i] = [];
    arcAlive[i] = [];
    buildAlive[i] = []
    buildHits[i] = [];
    buildings[i] = [];
    keys[i] = [];
    powerUps[i] = [];
    powerUps2[i] = [];
    safeZone[i] = [];
    for(let j = 0; j <= cols; j++){
        rotateArc[i][j] = Math.random() * Math.PI * 2;
        arcAlive[i][j] = true;
        buildAlive[i][j] = [];
        buildings[i][j] = [];
        buildHits[i][j] = [];
        keys[i][j] = [];
        powerUps[i][j] = [];
        powerUps2[i][j] = [];
        safeZone[i][j] = [];
    
        for(let k = 0; k<5; k++){
            buildAlive[i][j][k] = true;
            buildHits[i][j][k] = 0;
            let buildSize = 50;
            let buildX = Math.random() * ((blockSize * 0.70) - buildSize);
            let buildY = Math.random() * ((blockSize * 0.70) - buildSize); 
            buildings[i][j].push({
                x: buildX,
                y: buildY, 
                size: buildSize
            });
        }
        if(Math.random() < 0.5) {
        keyCount = Math.floor(Math.random() * 6);
    
    for(let h = 0; h < keyCount; h++){
        let keyRadius = 8;
        let keyX = Math.random() * (blockSize - 2*keyRadius);
        let keyY = Math.random() * (blockSize - 2*keyRadius);
        keys[i][j].push({
            x: keyX,
            y: keyY,
            r: keyRadius
        });
        totKeys++; 
    }
   }
   if(Math.random() < 0.1){
    pUpcount = Math.floor(Math.random() * 3);

    for(let h = 0; h<pUpcount; h++){
        let powerSize = 20;
        let powerX = Math.random() * (blockSize - powerSize);
        let powerY = Math.random() * (blockSize - powerSize);
        powerUps[i][j].push({
            x: powerX,
            y: powerY,
            size: powerSize
        });
    }
   }

   if(Math.random() < 0.1){
    pUp2count = Math.floor(Math.random() * 3);

    for(let h = 0; h<pUp2count; h++){
        let powerSize = 20;
        let powerX = Math.random() * (blockSize - powerSize);
        let powerY = Math.random() * (blockSize - powerSize);
        powerUps2[i][j].push({
            x: powerX,
            y: powerY,
            size: powerSize
        });
    }
   }

   if(Math.random() < 0.7){
    safZoncount = Math.floor(Math.random() * 3);

    for(let h = 0; h<safZoncount; h++){
        let szRadius = 15;
        let szX = Math.random() * (blockSize - 2*szRadius);
        let szY = Math.random() * (blockSize - 2*szRadius);
        safeZone[i][j].push({
            x: szX,
            y: szY,
            r: szRadius
        });
    }
   }
   
    }
}

keyvalue.innerHTML = totKeys;

class bullet {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.speed = 5;
        this.dx = Math.cos(angle) * this.speed;
        this.dy = Math.sin(angle) * this.speed;
        this.life = 600;
    }
    update() {
        this.x += this.dx;
        this.y += this.dy;

        if(this.x - this.radius <= 0 || this.x + this.radius >= gameMap.width) {
            this.dx *= -1;
        }
        if(this.y - this.radius <= 0 || this.y + this.radius >= gameMap.height) {
            this.dy *= -1;
        }
        this.life--;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.strokeStyle = 'yellow';
        ctx.stroke();
    }
}

class bullBot {
    constructor(x, y, targetX, targetY){
        this.x = x;
        this.y = y;
        this.speed = 0.5;
        let dx = targetX - x;
        let dy = targetY - y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        this.vx = (dx / dist) * this.speed;
        this.vy = (dy / dist) * this.speed;
        this.radius = 5;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    draw(c){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = 'red';
        c.fill();
        c.stroke();
    }
}

class weapRifle {
       constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.speed = 5;
        this.dx = Math.cos(angle) * this.speed;
        this.dy = Math.sin(angle) * this.speed;
        this.life = 600;
    }
    update() {
        this.x += this.dx;
        this.y += this.dy;

        if(this.x - this.radius <= 0 || this.x + this.radius >= gameMap.width) {
            this.dx *= -1;
        }
        if(this.y - this.radius <= 0 || this.y + this.radius >= gameMap.height) {
            this.dy *= -1;
        }
        this.life--;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgb(244, 12, 12)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(236, 20, 20, 0.56)';
        ctx.stroke();
    }
}

class weapGun {
       constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.speed = 5;
        this.dx = Math.cos(angle) * this.speed;
        this.dy = Math.sin(angle) * this.speed;
        this.life = 600;
    }
    update() {
        this.x += this.dx;
        this.y += this.dy;

        if(this.x - this.radius <= 0 || this.x + this.radius >= gameMap.width) {
            this.dx *= -1;
        }
        if(this.y - this.radius <= 0 || this.y + this.radius >= gameMap.height) {
            this.dy *= -1;
        }
        this.life--;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgb(5, 27, 85)';
        ctx.fill();
        ctx.strokeStyle = 'rgb(5, 27, 85)';
        ctx.stroke();
    }
}

class dataMine {
       constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.radius = 50;
        
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgb(22, 204, 180)';
        ctx.fill();
        ctx.strokeStyle = 'rgb(32, 248, 226)';
        ctx.stroke();
    }

}

gameMap.addEventListener('click', (e) => {
    const rect = gameMap.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const angle = Math.atan2(mouseY - player.y, mouseX - player.x);

    if(isRifle){
         rifBullet.push(new weapRifle(player.x, player.y, angle));
         isRifle = false;
    }
    if(isGun){
        gunBullet.push(new weapGun(player.x, player.y, angle));
        isGun = false;
    }
    else {
       bullets.push(new bullet(player.x, player.y, angle));
       const bulletSnd = new Audio('bullet1.mp3');
       bulletSnd.play();
    }
    
});

playerImage.onload = () => {
     drawBlock();
};

function drawBlock() {
   c.clearRect(0, 0, gameMap.width, gameMap.height);

   

    c.lineWidth = 3;
   
    let nextX = player.x + player.dx;
    let nextY = player.y + player.dy;
    let pMove = true;

   

    for(let i = 0; i<=rows; i++){
        for(let j=0; j<=cols; j++){

           
           

            let x = j * blockSize;
            let y = i * blockSize;
            
            c.strokeStyle = 'green';
            c.strokeRect(x, y, blockSize, blockSize);


            let padding = blockSize * 0.142;
            let inSize =  blockSize * 0.70;
            let inX = x + padding;
            let inY = y + padding;

            if(i === rows - 3 && j === cols - 6){
               c.fillStyle = 'yellow';
                 c.fillRect(inX, inY, inSize, inSize);
                 let dx = player.x - inX;
                 let dy = player.y - inY;
                 let dist = Math.sqrt(dx * dx + dy * dy);
                 c.beginPath();
                 c.arc(inX, inY, 10, 0, Math.PI * 2, false);
                 c.fillStyle = 'red';
                 c.fill();
                 c.strokeStyle = 'black';
                 c.stroke();

                 c.fillStyle = 'cyan';        
                 c.font = "20px Arial";
                
                 c.fillText("Base Station", inX +10, inY - 5); 

                  if(dist < player.radius){
                    console.log("hi player arrived");
                     isBs = true;
                     bStation.style.display = 'block';
                     pause();
                 }

                 else {
                    isBs = false;
                    pBar2.style.width = 0;
                     pBar2.innerText = " ";
                    statement2.innerText = "  ";
                    document.getElementById('noteInfo2').innerText = "Transport more shards to save Aurex!";
                    progress2 = 0;
                     
                }

            }

           else if(i === rows - 1 && j === cols - 1){
                 c.fillStyle = 'cyan';
                 c.fillRect(inX, inY, inSize, inSize);
                 let dx = player.x - inX;
                 let dy = player.y - inY;
                 let dist = Math.sqrt(dx * dx + dy * dy);
                 c.beginPath();
                 c.arc(inX, inY, 10, 0, Math.PI * 2, false);
                 c.fillStyle = 'red';
                 c.fill();
                 c.strokeStyle = 'black';
                 c.stroke();

                 c.fillStyle = 'yellow';        
                 c.font = "20px Arial";
                
                 c.fillText("Central Hub", inX +10, inY - 5); 

                 

                 if(dist < player.radius){
                     isCb = true;
                     cBoard.style.display = 'block';
                     yesBt.click.disabled = true;
                     pause();
                 }

                 else{
                    isCb = false;
                    
                     pBar.style.width = 0;
                     pBar.innerText = " ";
                    statement.innerText = "  ";
                    cBoard.style.display = 'none';
                    progress = 0;
                    
                 }

                  let marX = inX + inSize; 

                 c.beginPath();
                 c.moveTo(marX, inY + inSize);
                 c.lineTo(marX - 20, inY + 160);
                 c.lineTo(marX + 20, inY +  160);
                 c.closePath();
                 c.fillStyle = 'yellow';
                 c.fill();
                 c.stroke();

                 c.fillStyle = 'rgb(243, 118, 118)';        
                 c.font = "20px Arial";
                
                 c.fillText("Market Place =>", marX - 155, inY + inSize + 20); 

                 let mardx = player.x - marX;
                 let mardy = player.y - (inY + inSize);
                 let mardist = Math.sqrt(mardx * mardx + mardy * mardy);

                 if(mardist < player.radius){
                        marBoard.style.display = 'flex';
                        pause();
                 }
            } else {
                 c.fillStyle = 'rgb(0, 255, 0)';
                 c.fillRect(inX, inY, inSize, inSize);
            }



            arcAlive[rows - 1][cols -1] = false;
            arcAlive[rows - 3][cols - 6] = false;
           
           
           if(arcAlive[i][j]) { 
            let arcX = inX + inSize / 2;
            let arcY = inY + inSize / 2;
            let arcRadius = blockSize * 0.5;

            let angle = rotateArc[i][j];
            let arcAngle = Math.PI / 3;
            let startArc = angle - arcAngle / 2;
            let endArc = angle + arcAngle / 2;

            c.beginPath();
            c.moveTo(arcX, arcY);
            c.arc(arcX, arcY, arcRadius, startArc, endArc, false);
            c.closePath();
            c.fillStyle = 'rgba(185, 32, 32, 0.4)';
            c.fill();
            c.strokeStyle = 'rgba(240, 65, 65, 0.4)';
            c.stroke();

            rotateArc[i][j] += 0.01

            let dx = player.x - arcX;
            let dy = player.y - arcY;
            let dist = Math.sqrt(dx * dx + dy * dy);

            let angletoPlayer = Math.atan2(dy, dx);
            let playerAngle = (angletoPlayer + 2 * Math.PI) % 2 * Math.PI;
            let start = (startArc + 2 * Math.PI) % (2 * Math.PI);
            let end = (endArc + 2 * Math.PI) % (2 * Math.PI);

            let angleRangecheck = false;

            if(start < end){
                angleRangecheck = playerAngle >= start && playerAngle <= end;
            }
            else{
                angleRangecheck = playerAngle >= start || playerAngle <= end;
            }

            let arcThickness = 20; 
            let arcInnerRadius = arcRadius - arcThickness;
            let arcOuterRadius = arcRadius;

            if (dist >= arcInnerRadius && dist <= arcOuterRadius && angleRangecheck) {
                if(isSafe === 0){
               playHealth = Math.max(0, playHealth - 0.1); 
            
            if(playHealth <= 0){
                alert("You lost the Game!");
                
                pause();
            }
               pHealth.innerText = `${playHealth.toFixed(1)} %`;}
            }

            for(let b = bullets.length - 1; b >=0; b--){
                const bullet = bullets[b];
                let dx = bullet.x - arcX;
                let dy = bullet.y - arcY;
                let distance = Math.sqrt(dx*dx + dy*dy);
                let angleTobullet = Math.atan2(dy, dx);
                
                let bulletAngle = (angleTobullet + 2 * Math.PI) % (2 * Math.PI);
                let start = (startArc + 2* Math.PI) % (2 * Math.PI);
                let end = (endArc + 2 * Math.PI) % (2 * Math.PI);

                 let inAngle = false;
        
                 if(start < end) {
                     inAngle = bulletAngle >=start && bulletAngle <= end;
                }
                 else {
                     inAngle = bulletAngle >= start || bulletAngle <= end;
                }

        if(distance <= arcRadius && inAngle) {
            bullets.splice(b, 1);
            const arcSnd = new Audio('Tower.wav')
            arcSnd.play();
            arcAlive[i][j] = false;
            break;
        }
    }
    
    
           } 

        
           for(let h = 0; h < safeZone[i][j].length; h++){
                let safe = safeZone[i][j][h];

                let safeX = inX + safe.x;
                let safeY = inY + safe.y;

                c.beginPath();
                c.arc(safeX, safeY, safe.r, 0, Math.PI * 2, false);
                c.fillStyle = 'rgb(231, 67, 17)';
                c.fill();
                c.stroke();

                let dx = player.x - safeX;
                let dy = player.y - safeY;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if(dist < player.radius + safe.r){
                    isSafe = 1;
                    console.log("Safe Zone!")
                    break;
                }   
                
            }
           
            
           if(isLBot){

           c.beginPath();
            c.arc(lBotX, lBotY, 15, 0, Math.PI * 2, false);
            c.fillStyle = 'rgb(6, 6, 173)';
            c.fill();
            c.stroke();

             c.beginPath();
             c.arc(lBotX, lBotY, 80, 0, Math.PI * 2, false);
             c.fillStyle = 'rgba(129, 98, 239, 0.1)'
             c.strokeStyle = 'rgba(75, 75, 227, 0.1)'
             c.fill();
             c.stroke();

             let ldx = player.x - lBotX;
             let ldy = player.y - lBotY;
             let ldist = Math.sqrt(ldx * ldx + ldy * ldy)

             if(ldist < 80 - player.radius || Math.abs(player.x - lBotX) <  20){
                if(isSafe === 0){
                
                playerDetected = true;
               
                console.log("Success")
             

             if(player.y < lBotY) {
                lBotY -= Math.abs(lBotdy);
             } else {
                lBotY += Math.abs(lBotdy)
             }

             if(frameCount % 30 === 0){
                botBullet.push(new bullBot(lBotX, lBotY, player.x, player.y));
                console.log("hi");
                playHealth = Math.max(0, playHealth - 0.005); 
                pHealth.innerText = `${playHealth.toFixed(1)} %`;
                if(playHealth <= 0){
                    alert("You lost the Game!");
                    pause();
                }

             }
            }
            
        }
            else{
                playerDetected = false;

                if(lBotY + 80 >= gameMap.height || lBotY - 80 < 0){
                    lBotdy *= -1;
                }
                lBotY += lBotdy;
            }
        
        


            botBullet.forEach((bullet, index) => {
                bullet.update();
                bullet.draw(c);

                if(bullet.x < 0 || bullet.x > gameMap.width || bullet.y < 0 || bullet.y > gameMap.height) {
                    botBullet.splice(index, 1);
                }
            })
           }

            for(let x = gunBullet.length - 1; x >=0; x--){
                const gun = gunBullet[x];
                let dx = gun.x - lBotX;
                let dy = gun.y - lBotY;
                let distance = Math.sqrt(dx*dx + dy*dy);
                let angleTobullet = Math.atan2(dy, dx);
                
                let bulletAngle = (angleTobullet + 2 * Math.PI) % (2 * Math.PI);

                 if(distance <= 80) {

                       gunBullet.splice(x, 1);
                       const arcSnd = new Audio('Tower.wav')
                       arcSnd.play();
                       isLBot = false;
                       lBotX = 0;
                       lBotY = 0;
                       break;
                    
                    

                 
                }
        }

        if(isHBot){
            c.beginPath();
             c.arc(hBotX, hBotY, 15, 0, Math.PI * 2, false);
             c.fillStyle = 'blue';
             c.fill();
             c.stroke();

             if(hBotX + 80 >= gameMap.width || hBotX - 80 < 0){
                hBotdx *= -1;
            }
             hBotX += hBotdx;

             c.beginPath();
             c.arc(hBotX, hBotY, 80, 0, Math.PI * 2, false);
             c.fillStyle = 'rgba(230, 170, 32, 0.1)'
             c.strokeStyle = 'rgba(105, 11, 11, 0.05)'
             c.fill();
             c.stroke();


            let hdx = player.x - hBotX;
             let hdy = player.y - hBotY;
             let hdist = Math.sqrt(hdx * hdx + hdy * hdy)

             if((hdist < 80 - player.radius || Math.abs(player.y - hBotY) <  20) || isKeyTake){
                playerDetected = true;
               
               if(isSafe === 0){ console.log("Success") 
             

             if(player.x < hBotX) {
                hBotX -= Math.abs(hBotdx);
             } else {
                hBotX += Math.abs(hBotdx)
             }

             if(frameCount % 30 === 0){
                botBullet.push(new bullBot(hBotX, hBotY, player.x, player.y));
                console.log("hi");
                playHealth = Math.max(0, playHealth - 0.1); 
                pHealth.innerText = `${playHealth.toFixed(1)} %`;
                if(playHealth <= 0){
                    alert("You Lost the Game!");
                    pause();
                }
             }
            }
            }
            else{
                playerDetected = false;

                if(hBotX + 80 >= gameMap.width || hBotX - 80 < 0){
                    hBotdx *= -1;
                }
                hBotX += hBotdx;
            }
            
        
            botBullet.forEach((bullet, index) => {
                bullet.update();
                bullet.draw(c);

                if(bullet.x < 0 || bullet.x > gameMap.width || bullet.y < 0 || bullet.y > gameMap.height) {
                    botBullet.splice(index, 1);
                }
            })
        
        }

        for(let x = rifBullet.length - 1; x >=0; x--){
                const rifle = rifBullet[x];
                let dx = rifle.x - hBotX;
                let dy = rifle.y - hBotY;
                let distance = Math.sqrt(dx*dx + dy*dy);
                let angleTobullet = Math.atan2(dy, dx);
                
                let bulletAngle = (angleTobullet + 2 * Math.PI) % (2 * Math.PI);

                 if(distance <= 80) {

                       rifBullet.splice(x, 1);
                       const arcSnd = new Audio('Tower.wav')
                       arcSnd.play();
                       isHBot = false;
                       hBotX = 0;
                       hBotY = 0;
                       break;
                    
                    

                 
                }
        }

            if((!riflehit || !gunHit) && ((rifHitno < 2) && (gunHitNo < 3))){
             c.beginPath();
             c.arc(snBotX, snBotY, 15, 0, Math.PI * 2, false);
             c.fillStyle = 'blue';
             c.fill();
             c.stroke();

            
             c.beginPath();
             c.arc(snBotX, snBotY, 90, 0, Math.PI * 2, false);
             c.fillStyle = 'rgba(208, 94, 37, 0.1)';
             c.fill();
             c.stroke();


             let sndx = player.x - hBotX;
             let sndy = player.y - hBotY;
             let sndist = Math.sqrt(sndx * sndx + sndy * sndy)

             if((sndist < 90 - player.radius || (Math.abs(player.y - snBotY) <  20 && Math.abs(player.x - snBotX) < 20))){
                if(isSafe === 0){
                playerDetected = true;
                console.log("Success")
             

             
             
             if(frameCount % 30 === 0){
                botBullet.push(new bullBot(snBotX, snBotY, player.x, player.y));
                console.log("hi");
                playHealth = Math.max(0, playHealth - 0.02); 
                pHealth.innerText = `${playHealth.toFixed(1)} %`;
                if(playHealth <= 0){
                    alert("You have lost the Game!");
                    pause();
                }
             }
            }
            else{
                playerDetected = false;

                 if(snBotY + 90 >= gameMap.height || snBotY - 90 < 0){
                snBotdy *= -1;
            }
            if(snBotX + 90 >= gameMap.width || snBotX - 90 < 0){
                snBotdx *= -1;
            }

             snBotY += snBotdy;
             snBotX += snBotdx;
            }
        }
            else{
                playerDetected = false;

                 if(snBotY + 90 >= gameMap.height || snBotY - 90 < 0){
                snBotdy *= -1;
            }
            if(snBotX + 90 >= gameMap.width || snBotX - 90 < 0){
                snBotdx *= -1;
            }

             snBotY += snBotdy;
             snBotX += snBotdx;
            }

            

            botBullet.forEach((bullet, index) => {
                bullet.update();
                bullet.draw(c);

                if(bullet.x < 0 || bullet.x > gameMap.width || bullet.y < 0 || bullet.y > gameMap.height) {
                    botBullet.splice(index, 1);
                }
            })
        
            }

            for(let x = rifBullet.length - 1; x >=0; x--){
                const rifle = rifBullet[x];
                let dx = rifle.x - snBotX;
                let dy = rifle.y - snBotY;
                let distance = Math.sqrt(dx*dx + dy*dy);
                let angleTobullet = Math.atan2(dy, dx);
                
                let bulletAngle = (angleTobullet + 2 * Math.PI) % (2 * Math.PI);

                 if(distance <= 80) {

                       rifBullet.splice(x, 1);
                       const arcSnd = new Audio('Tower.wav')
                       arcSnd.play();
                       rifHitno++;
                       riflehit = true;
                       break;
                 
                }
        }

        for(let x = gunBullet.length - 1; x >=0; x--){
                const gun = gunBullet[x];
                let dx = gun.x - snBotX;
                let dy = gun.y - snBotY;
                let distance = Math.sqrt(dx*dx + dy*dy);
                let angleTobullet = Math.atan2(dy, dx);
                
                let bulletAngle = (angleTobullet + 2 * Math.PI) % (2 * Math.PI);

                 if(distance <= 80) {

                       gunBullet.splice(x, 1);
                       const arcSnd = new Audio('Tower.wav')
                       arcSnd.play();
                       gunHitNo++;
                       gunHit = true;
                       break;
                }
        }

            c.beginPath();
            c.arc(inX + 5, inY + 5, 0, 2 * Math.PI, false);
            c.fillStyle = 'rgba(178, 66, 18, 0.1)';
            c.fill();
            c.strokeStyle = 'rgba(221, 92, 36, 0.1)';
            c.stroke();

        
            dataMinearr.forEach(pos => {
    c.beginPath();
    c.arc(pos.x, pos.y, 40, 0, Math.PI , false);
    c.fillStyle = 'rgb(37, 205, 243)';
    c.fill();
    c.strokeStyle = 'blue';
    c.stroke();
});




teleportArr.forEach(pos => {
    c.beginPath();
    c.fillStyle = 'rgb(235, 19, 69)'; 
    c.fillRect(pos.x, pos.y, 20, 50);
    c.strokeStyle = 'rgb(235, 19, 69)';
    c.stroke();

    c.fillStyle = 'white';        
    c.font = "16px Arial";
    c.textAlign = "center";
    c.fillText(`${pos.id}`, pos.x + 10, pos.y + 30); 
});

    for(let k = 0; k < dataMinearr.length; k++){
        let dmine = dataMinearr[k];

        let dx = player.x - dmine.x;
        let dy = player.y - dmine.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if(dist < player.radius){
            dhub.style.display = 'block';
            pause();
        }
    }

    for(let k = 0; k < teleportArr.length; k++){
        let tehub = teleportArr[k];

        let dx = player.x - tehub.x;
        let dy = player.y - tehub.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if(dist < player.radius){
            thub.style.display = 'block';
            pause();
        }
    }


            player.x = Math.max(player.radius, Math.min(gameMap.width - player.radius, player.x));
            player.y = Math.max(player.radius, Math.min(gameMap.height - player.radius, player.y));

            c.beginPath();
            c.arc(player.x, player.y, player.radius, 0, Math.PI * 2, false);
            c.fillStyle = 'white';
            c.fill();
            c.strokeStyle = 'white';
            c.stroke();


            for(let k = 0; k<5; k++){

                if(buildAlive[i][j][k]){
                let b = buildings[i][j][k];

                c.fillStyle = 'black';
                c.fillRect(inX + b.x, inY + b.y, b.size, b.size);

                let bX = inX + b.x;
                let bY = inY + b.y;


                let playerBuildingX = Math.max(bX, Math.min(nextX, bX + b.size));
                let playerBuildingY = Math.max(bY, Math.min(nextY, bY + b.size));

                let distX = nextX - playerBuildingX;
                let distY = nextY - playerBuildingY;
                let distXY = Math.sqrt(distX * distX + distY * distY);

                if(distXY < player.radius){
                    pMove = false;
                    break;
                }
                
                for(let x = bullets.length - 1; x >=0; x--){
                const bullet = bullets[x];
                let dx = bullet.x - bX;
                let dy = bullet.y - bY;
                let distance = Math.sqrt(dx*dx + dy*dy);
                let angleTobullet = Math.atan2(dy, dx);
                
                let bulletAngle = (angleTobullet + 2 * Math.PI) % (2 * Math.PI);

                 if(distance <= b.size) {
                   
                    buildHits[i][j][k]++;

                    if(buildHits[i][j][k] >= 5){
                       bullets.splice(b, 1);
                       const arcSnd = new Audio('Tower.wav')
                       arcSnd.play();
                       buildAlive[i][j][k] = false;
                       break;
                    }
                    else{
                        bullet.dx = -bullet.dx;
                        bullet.dy = -bullet.dy;
                    }

                 
                }
        }
            }              
            }

            if(!pMove){
                break;
            }

            for( let h = 0; h < keys[i][j].length; h++) {
                
                let k = keys[i][j][h];
                

                let keysX = inX + k.x;
                let keysY = inY + k.y;

                let dx = player.x - keysX;
                let dy = player.y - keysY;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if(distance < player.radius + k.r){
                    const keySound = new Audio('key.mp3');
                    keySound.play();
                    keys[i][j].splice(h, 1);
                    highScore = highScore + 5;
                    score.innerText = `${highScore}`;
                    dataShards++;
                    isKeyTake = true;
                    keycoll.innerHTML = dataShards;
                } else {
                    c.fillStyle = 'rgb(233, 33, 133)';
                    
                    c.beginPath();
                    c.arc(inX + k.x, inY + k.y, k.r, 0, Math.PI * 2);
                    c.fill();
                }
            }

           

            
            
            for(let h = 0; h < powerUps[i][j].length; h++) {
                let pUp = powerUps[i][j][h];

                let pUpX = inX + pUp.x;
                let pUpY = inY + pUp.y;
                let pUpSize = pUp.size;

                let dx = player.x - pUpX;
                let dy = player.y - pUpY;

                let dist = Math.sqrt(dx * dx + dy * dy);

                if(dist < player.radius){
                    powerSnd.play();
                    powerUps[i][j].splice(h, 1);
                    powerDiamond++;
                    heartHeal.innerText = `${powerDiamond}`;
                    
                } else {
                    c.fillStyle = 'red';
                    c.strokeStyle = 'orange';


                c.beginPath();
                c.moveTo(pUpX, pUpY - pUpSize/2);
                c.lineTo(pUpX + pUpSize / 2, pUpY);
                c.lineTo(pUpX, pUpY + pUpSize / 2);
                c.lineTo(pUpX - pUpSize / 2, pUpY);
                c.closePath();
                c.fill();
                c.stroke();
                }

            }
            
            for(let h = 0; h < powerUps2[i][j].length; h++) {
            let pUp = powerUps2[i][j][h];

                let pUpX = inX + pUp.x;
                let pUpY = inY + pUp.y;
                let pUpSize = pUp.size;

                let spikes = 5;
                let outRad = pUpSize / 2;
                let inRad = outRad * 0.5;

                let rot = Math.PI / 2 * 3;
                let step = Math.PI / spikes;

                let dx = player.x - pUpX;
                let dy = player.y - pUpY;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if(dist < player.radius){
                    powerSnd.play();
                    powerUps2[i][j].splice(h, 1);
                    powerStar++;
                    starShield.innerText = `${powerStar}`;

                }
                else {
                c.beginPath();
                c.moveTo(pUpX, pUpY - outRad); 

                for (let v = 0; v < spikes; v++) {
   
                 let x = pUpX + Math.cos(rot) * outRad;
                 let y = pUpY + Math.sin(rot) * outRad;
                 c.lineTo(x, y);
                 rot += step;

    
                 x = pUpX + Math.cos(rot) * inRad;
                 y = pUpY + Math.sin(rot) * inRad;
                 c.lineTo(x, y);
                 rot += step;
                }

                c.lineTo(pUpX, pUpY - outRad); 
                c.closePath();
                c.fillStyle = 'green';
                c.fill();
                c.strokeStyle = 'orange';
                c.stroke();
                }

                
            }
        }

        if(!pMove)break;
    }
    if (pMove) {
    player.x = nextX;
    player.y = nextY;
}


    for(let i = bullets.length - 1; i >=0; i--) {
        const bullet = bullets[i];
        bullet.update();
        bullet.draw(c);

        if(bullet.life <= 0){
            bullets.splice(i, 1);
        }

    }
    
    for(let i = rifBullet.length - 1; i >= 0; i--){
        let rifle = rifBullet[i];
        rifle.update();
        rifle.draw(c);

        if(rifle.life <= 0){
            rifBullet.splice(i, 1);
        }

    }

    for(let i = gunBullet.length - 1; i >= 0; i--){
        let gun = gunBullet[i];
        gun.update();
        gun.draw(c);

        if(gun.life <= 0){
            gunBullet.splice(i, 1);
        }

    }

      if(sysHealth == 100){
        alert("You Won! You have saved Aurex!");
        saveLeaderboard(playerName, highScore);
        pause();
      }
      if(sysHealth < 30){
        alert("You lost the game!");
        pause();
      }


    if(isRunning) {
    requestAnimationFrame(drawBlock);
    frameCount++;
    }
}

    let press = false;

    document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'd' && !press && have5val > 0) {
        press = true;
        dataMinearr.push({ x: player.x, y: player.y });
        console.log("d pressed");
        have5val--;
        
        have5.innerText = `You have: ${have5val}`;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() === 'd' && press) {
        console.log("data mine placed");
        press = false;
    }
});


function updatePlayer() {
    player.x += player.dx;
    player.y += player.dy;
}

function pause() {
    isRunning = false;
    pausebt.disabled = true;
    resumebt.disabled = false;
    gameMap.click.disabled = true;
}

function resume() {
    isRunning = true;
    pausebt.disabled = false;
    resumebt.disabled = true;
    gameMap.click.disabled = false;
    requestAnimationFrame(drawBlock);
}

function distributeKeys(x) {
    let remaining = x - 6;
    let divide = new Set();

    while (divide.size < 5) {
        divide.add(Math.floor(Math.random() * (remaining + 1)));
    }

    let position = Array.from(divide);
    position.push(0);
    position.push(remaining);
    position.sort((a, b) => a - b);
  
    let result = [];

    for(let i = 1; i < position.length; i++) {
        result.push(position[i] - position[i-1] + 1);
    }

    return result;
    
}

shardDec = distributeKeys(totKeys);
console.log(totKeys);

shard1.innerHTML = shardDec[0];
shard2.innerHTML = shardDec[1];
shard3.innerHTML = shardDec[2];
shard4.innerHTML = shardDec[3];
shard5.innerHTML = shardDec[4];
shard6.innerHTML = shardDec[5];


sd1.innerHTML = shardDec[0];
sd2.innerHTML = shardDec[1];
sd3.innerHTML = shardDec[2];
sd4.innerHTML = shardDec[3];
sd5.innerHTML = shardDec[4];
sd6.innerHTML = shardDec[5];

const dmshard1 = document.getElementById('deshard1');
const dmshard2 = document.getElementById('deshard2');
const dmshard3 = document.getElementById('deshard3');
const dmshard4 = document.getElementById('deshard4');
const dmshard5 = document.getElementById('deshard5');
const dmshard6 = document.getElementById('deshard6');

const dmshards = [
  document.getElementById('deshard1'),
  document.getElementById('deshard2'),
  document.getElementById('deshard3'),
  document.getElementById('deshard4'),
  document.getElementById('deshard5'),
  document.getElementById('deshard6')
];

const delayPerShard = 2 * 60 * 1000; 

dmshards.forEach((shard, index) => {
  setTimeout(() => {
    shard.style.display = 'flex';
  }, (index + 1) * delayPerShard); 
});



const telehubs = [
  document.getElementById('teshard1'),
  document.getElementById('teshard2'),
  document.getElementById('teshard3'),
  document.getElementById('teshard4'),
  document.getElementById('teshard5'),
  document.getElementById('teshard6')
];

telehubs[0].addEventListener('click', () => {
    let tele = teleportArr[0];
    player.x = tele.x;
    player.y = tele.y;
})
telehubs[1].addEventListener('click', () => {
     let tele = teleportArr[1];
    player.x = tele.x;
    player.y = tele.y;
})
telehubs[2].addEventListener('click', () => {
    let tele = teleportArr[2];
    player.x = tele.x;
    player.y = tele.y;
})
telehubs[3].addEventListener('click', () => {
    let tele = teleportArr[3];
    player.x = tele.x;
    player.y = tele.y;
})
telehubs[4].addEventListener('click', () => {
    let tele = teleportArr[4];
    player.x = tele.x;
    player.y = tele.y;
})
telehubs[5].addEventListener('click', () => {
    let tele = teleportArr[5];
    player.x = tele.x;
    player.y = tele.y;
})


shard1.addEventListener('click', () => {
    currShard = shard1;
    currSd = sd1;
    keyReq = shard1.innerHTML;
    yesBt.click.disabled = false;
});

shard2.addEventListener('click', () => {
    currShard = shard2;
    currSd = sd2;
    keyReq = shard2.innerHTML;
     yesBt.click.disabled = false;
});

shard3.addEventListener('click', () => {
    currShard = shard3;
    currSd = sd3;
    keyReq = shard3.innerHTML;
     yesBt.click.disabled = false;
});

shard4.addEventListener('click', () => {
    currShard = shard4;
    currSd = sd4;
    keyReq = shard4.innerHTML;
     yesBt.click.disabled = false;
});

shard5.addEventListener('click', () => {
    currShard = shard5;
    currSd = sd5;
    keyReq = shard5.innerHTML;
     yesBt.click.disabled = false;
});

shard6.addEventListener('click', () => {
    currShard = shard6;
    currSd = sd6;
    keyReq = shard6.innerHTML;
     yesBt.click.disabled = false;
});

if(sysHealth === 100){
    alert("You Won");
    saveLeaderboard(playerName, highScore);
}
if((pHealth === 0) || sysHealth <= 30){
    alert("You Lost!");
}

function saveLeaderboard(playerName, score){
    let leaderBoard = JSON.parse(localStorage.getItem("leaderBoard")) || [];

   leaderBoard.push({name: playerName, score: score});

   leaderBoard.sort((a,b) => b.score - a.score);
   leaderBoard = leaderBoard.slice(0, 10);

   localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard));
}

function loadLeaderBoard(){
    const leaderBoard = JSON.parse(localStorage.getItem("leaderBoard")) || [];
    const tbody = document.getElementById("lbBody");

    tbody.innerHTML = "";

    leaderBoard.forEach((entry, index) => {
        const row = document.createElement("tr");

        const rank = document.createElement("td");
        rank.innerText = index + 1;

        const pName = document.createElement("td");
        pName.innerText = entry.name;

        const pScore = document.createElement("td");
        pScore.innerText = entry.score;

        row.appendChild(rank);
        row.appendChild(pName);
        row.appendChild(pScore);

        tbody.appendChild(row);
    })
}

window.onload = function () {
    loadLeaderBoard();
};



function drawShield(){
    let shieldSize = 100;
    let shieldX = player.x - shieldSize/2;
    let shieldY = player.y - shieldSize/2;
    
    c.beginPath();
    c.fillStyle = 'rgba(240, 248, 31, 0.4)'
    c.fillRect(shieldX, shieldY, shieldSize, shieldSize);
    c.stroke();
    
    if(isShield)
    requestAnimationFrame(drawShield);
}

shieldButt.addEventListener('click', () => {
    if(powerStar > 0){
    isSafe = 1;
    isShield = true;
    drawShield();
    setTimeout(() => {
        c.clearRect(player.x - 50 - 1, player.y - 50 - 1, 102, 102);
        isShield = false;
        isSafe = 0;
    }, 15000);
}})


buy1.addEventListener('click', () => {
    if(playerDs > 3){
      have1val++;
      have1.innerText = `You have: ${have1val}`;
      alert("Rifle bought! Press R to activate...")
      playerDs = playerDs - 3;
      playerdshard.innerText = `${playerDs}`;
    }
    else{
        alert("Data Shards insufficient!");
    }
});
buy2.addEventListener('click', () => {
    if(playerDs > 2){
      have2val++;
      have2.innerText = `You have: ${have2val}`;
      alert("Gun bought! Press G to activate...")
      playerDs = playerDs - 2;
      playerdshard.innerText = `${playerDs}`;
    }
    else{
        alert("Data Shards insufficient!");
    }
})
buy3.addEventListener('click', () => {
    if(playerDs > 2){
      have3val++;
      have3.innerText = `You have: ${have3val}`;
      alert("Speed booster bought! Press S to activate...")
      playerDs = playerDs - 2;
      playerdshard.innerText = `${playerDs}`;
    }
    else{
        alert("Data Shards insufficient!");
    }
})
buy4.addEventListener('click', () => {
    if(playerDs > 1){
     have4val++;
     powerStar++;
     starShield.innerText = `${powerStar}`;
     have4.innerText = `You have: ${have4val}`;
     alert("Shield added!");
     playerDs--;
     playerdshard.innerText = `${playerDs}`;
    }
    else{
        alert("Data Shards insufficient!");
    }
})
buy5.addEventListener('click', () => {
    if(playerDs > 5){
    have5val++;
    have5.innerText = `You have: ${have5val}`;
    alert("Data mine purchased! Press D to place it!");
    playerDs = playerDs - 5;
    playerdshard.innerText = `${playerDs}`;
   }
   else{
        alert("Data Shards insufficient!");
    }

})
buy6.addEventListener('click', () => {
    if(playerDs > 5){
     have6val++;
     have6.innerText = `You have: ${have6val}`;
     alert("Teleport Hub purchased! Press T to place it!");
     playerDs = playerDs - 5;
     playerdshard.innerText = `${playerDs}`;
    }
    else{
        alert("Data Shards insufficient!");
    }
})


let telecount = 1;

document.addEventListener('keydown', (e) => {
    if(e.key.toLowerCase() === 'r' && have1val > 0) {
        console.log("R Pressed");
        
     }
     if(e.key.toLowerCase() === 'g' && have2val > 0){
        console.log("G pressed");
        have2val--;
        have2.innerText = `You have: ${have2val}`;
     }
     if(e.key.toLowerCase() === 's' && have3val > 0){
        console.log("s pressed");
        player.speed = 5;
        setTimeout(() => {
         player.speed = 3;
    }, 15000);
        have3val--;
        have3.innerText = `You have: ${have3val}`;
     }
     if(e.key.toLowerCase() === 't' && have6val > 0){
        console.log("t pressed");
        teleportArr.push({ 
            id: `TP${telecount}`,
            x: player.x, 
            y: player.y });
        have6val--;

        if (telecount < telehubs.length) {
        telehubs[telecount - 1].style.display = 'flex';
    }
        telecount++;
        have6.innerText = `You have: ${have6val}`;
    }
})


document.addEventListener('keyup', (e) => {
    if(e.key.toLowerCase() === 'r' && have1val > 0) {
        have1val--;
        have1.innerText = `You have: ${have1val}`;
        alert("Rifle Loaded!");
        isRifle = true;
    }
    if(e.key.toLowerCase() === 'g' && have2val >= 0){
        alert("Gun Loaded");
        isGun = true;
    }
    if(e.key.toLowerCase() === 's' && have3val >= 0){
        alert("Speed Upgraded for 15 secs");
     }
    if(e.key.toLowerCase() === 't' && have6val >= 0){
        alert("Teleport Hub Placed")
     }
    
    
})



