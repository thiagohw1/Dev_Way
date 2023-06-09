var idade = 60
console.log(`vc tem ${idade} anos.`)
if (idade < 16){
    console.log('você não pode votar')
}else if(idade < 18 ||  idade > 65){
    console.log('seu voto é opcional')
}else{
    console.log('seu voto é obrigatorio')
}