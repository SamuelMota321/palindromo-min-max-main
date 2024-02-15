function isPalindrome(string) {
    let stringMinuscula = string.toLowerCase();
    let stringSemEspacos = stringMinuscula.replace(/\s/g, '');

    let stringInverse = '';
    for (let i = stringSemEspacos.length - 1; i >= 0; i--) {
        stringInverse += stringSemEspacos[i];
    }

    let stringInverseMinuscula = stringInverse.toLowerCase();

    return stringSemEspacos === stringInverseMinuscula;
}

function arrayMaxMin(arr) {
    if (arr.length === 0) {
        return [];
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max];
}

