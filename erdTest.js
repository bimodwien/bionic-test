'use strict'

const harga = [10, 7, 5, 8, 11, 9, 1]

function selisih(angka) {
    let result = 0
    for (let i = 0 ; i < angka.length ; i++) {
        // console.log(angka[i+2]);
        if(angka[i]-angka[i+1] < angka[i+1]-angka[i+2]){
            result = angka[i+1] - angka[i+2]
            return result
        }
        
    }
}

selisih(harga)