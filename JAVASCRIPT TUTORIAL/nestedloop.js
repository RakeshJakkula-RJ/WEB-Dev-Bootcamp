
// Nested loop : A loop is present inside the another loop then we call it as a Nestedloop.

// day1- sub1 sub 2 sub3

for(let day=1; day<=3; day++){

    console.log("day", day);

    for(let sub=1; sub<=3; sub++){
        console.log("sub", sub);
    }
}


// 4 hours ---->mins-----> 1 hr - 6 mins


for(let hour=1; hour<=6; hour++){

    for(let min=1; min<=6; min++){
        console.log("min", min);
    }
    console.log(hour, " hour completed");
}