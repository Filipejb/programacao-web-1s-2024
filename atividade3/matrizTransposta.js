function transporMatriz(A) {
    console.log("Matriz original:");
    imprimirMatriz(A);

    const transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < A.length; j++) {
            transposta[i].push(A[j][i]);
        }
    }

    console.log("Matriz transposta:");
    imprimirMatriz(transposta);
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let linha = '';
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j] + ' ';
        }
        console.log(linha);
    }
}

const matrizOriginal = [
    [1, 2],
    [4, 5],
    [7, 8]
];

transporMatriz(matrizOriginal);

