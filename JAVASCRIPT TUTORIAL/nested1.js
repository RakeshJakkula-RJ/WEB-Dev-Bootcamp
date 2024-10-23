
// three nested loops 

// 1 - 2 hr
// 1 - 3 mins
// 1 - 6 sec 


for(let hour=1; hour<=2; hour++){

    for(let min=1; min<=3; min++){

        for(let sec=1; sec<=6; sec++){
         
            console.log("sec", sec);
        }
        console.log(min, "min completed");
    }
     console.log(hour, "hour completed");
}

// Farm 1,2,3 ---->3 seeds ----> 1,2,3

for(let farm=1; farm<=3; farm++){

    console.log("farm", farm);
     
    for(let seed=1; seed<=3; seed++){
        // console.log("seed", seed);
        console.log("*");
    }
}