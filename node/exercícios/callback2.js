function exibeMensagensNaOrdem(mensagem, callback){
    console.log(mensagem);
    callback();
}

exibeMensagensNaOrdem('essa é a primeira mensagem', function(){
    console.log('essa e a segunda');
})