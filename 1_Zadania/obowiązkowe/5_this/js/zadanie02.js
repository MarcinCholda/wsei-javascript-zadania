//zadanie 5.02

var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum : function(){
        return this.a + this.b;
    },
    multiply: function(){
        return this.a * this.b;
    }
};

calculator.save(2, 3);
console.log("Suma: " +calculator.sum());
console.log("Iloczyn: "+calculator.multiply());