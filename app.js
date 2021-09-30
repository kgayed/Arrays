var yay=document.body.querySelector(".wrapper");
var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
];
for(var i=0; i<warriors.length; i++) {

   // var ele = document.createElement("div");
    var nameyay = document.createElement("h1");
    var healthyay = document.createElement("h2");
    var damageyay = document.createElement("h3");
    //str.includes('a'||'A')
    //var health=document.getElementsByTagName(yay);
    healthyay.innerHTML = "Health: " + warriors[i].health
    damageyay.innerHTML = "Damage: " + warriors[i].damage
    nameyay.innerHTML = "Name:" + warriors[i].name;


    if (warriors[i].health >= 10 && warriors[i].damage >= 2 && warriors[i].warrior ===true) {
        yay.appendChild(nameyay);
        yay.appendChild(healthyay);
        yay.appendChild(damageyay);
    }
     else if (warriors[i].name.includes('A') || warriors[i].name.includes('a')) {
        //warriors[i].nameyay.fontcolor("red")
        nameyay.style.color = "red";
    };
}


