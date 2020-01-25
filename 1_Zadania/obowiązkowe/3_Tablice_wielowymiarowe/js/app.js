//Zadanie 0

function checkArray(array) {
    var tab=[];
    var value =[];
    var j;
    for(var i = 0; i<array.length;i++){
        value =[];
        for(j=0;j<array[i].length;j++){
            if(array[i][j]%2==0){
                value.push(true);
            }
            else{
                value.push(false);
            }
        }
        tab.push(value);
    }
    console.log(tab);
    return tab;
}
checkArray([ [11, 12], [42, 2], [-4, -120], [0, 0], [1, 34] ])

// Zadanie 3.1

console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

// Zadanie 3.2

for(var i=0; i<task2Array[0].length;i++){
    console.log(task2Array[0][i]);
    console.log("wielkość tablicy w 2 wymiarze: " + task2Array[0][i].length);
    for(var j=0;j<task2Array[0][i].length;j++){
        console.log(task2Array[i][j]);
    }
}

// Zadanie 3.3

function print2DArray(array) {
    var value =[];
    var j;
    for(var i = 0; i<array.length;i++){
        value =[];
        for(j=0;j<array[i].length;j++){
            console.log(array[i][j]);
        }
    }
}

print2DArray([ [11, 12], [42, 2], [-4, -120], [0, 0], [1, 34] ]);

// Zadanie 3.4

print2DArray([[1,2,3],["ala","ala2"],[true,false,true]]);

//Zadanie 3.5

function create2DArray (rows,columns){
    var number=0;
    var tab = new Array(rows);
    for(var i = 0; i<tab.length;i++){
        tab[i] = new Array(columns);
        for(j=0;j<tab[i].length;j++){
            tab[i][j]=number;
            number +=1;
        }
    }
    console.log(tab);
    return tab;
}

create2DArray(6,5);