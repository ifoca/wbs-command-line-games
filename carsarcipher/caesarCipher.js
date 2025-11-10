const Process = Process.argv[2];
function caesarCipher( str, num){
const alphabet = ('abcdefghijklmnopqrstuvwxyz')
const alphabetLength =alphabet.length;
let encryptext = '';
let lowerCase = str.lowerCase();
}

 const goodShift = (num % alphabetLength +alphabet);
for (let i = 0; i<alphabetLength; i++){
    const currentLetter = lowerCase[i];
     if (currentLetter===''){
        encryptext +=currentLetter;
        continue;
     
    }

}

