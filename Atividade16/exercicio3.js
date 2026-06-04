let soma = 0
for (let i = 2; i< process.argv.lengh-1;i++){
    soma += Number(process.argv[i]);
}

console.log(`soma = ${soma}`)