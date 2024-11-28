let i = 0;
while(i < 6) {
    i++;
    if(i===2){
        continue;
    }
    console.log(i);
}
/*
    1
    2
    3
    4
    5
    6
*/

i=0;
while(i < 10) {
    i++;
    if(i===4){
        break;
    }
    console.log(i);
}
/*
    1
    2
    3
*/