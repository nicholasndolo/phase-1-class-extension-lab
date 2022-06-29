// Your code here
class Polygon{
    constructor(array){
        this.array = array;
    }

    get countSides(){
        return this.array.length;
    }

    get perimeter(){
        let sum = 0;
        for(let side of this.array){
            sum += side
        }
        return sum
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.countSides !== 3) return;
        let side1 = this.array[0];
        let side2 = this.array[1];
        let side3 = this.array[2];
         return((side1 +side2 > side3) && (side1 +side3 > side2) && (side2 +side3 > side1))
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.countSides !== 4) return;
        let side1 = this.array[0];
        let side2 = this.array[1];
        let side3 = this.array[2];
        let side4 = this.array[3];
        return((side1 ===side2) && (side1 === side3) && (side1 == side4))
    }
    get area(){
        return this.array[1] * this.array[1];
    }
}