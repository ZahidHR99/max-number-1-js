function maxNumber(numberOne, numberTwo, numberThree){
    if(numberOne > numberTwo && numberOne > numberThree){
        return numberOne+' is big';
    }else if(numberTwo > numberOne && numberTwo > numberThree){
        return numberTwo+' is big';
    }else{
        return numberThree+' is big';
    }
}

const numberOne  = 100;
const numberTwo  = 200;
const numberThree= 300;

const result = maxNumber(numberOne, numberTwo, numberThree);

console.log(result);