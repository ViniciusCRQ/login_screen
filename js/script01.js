let loginbutton = document.getElementById('login-btn');


function clickar(){


    let textlogin = document.getElementById('login-i');
    let textpasswd = document.getElementById('login-p');

    if ( textlogin.value == 'Syniila' && textpasswd.value == '123' ){
        window.open( "../index/index_adm.html" , "_top")
    } else if ( textlogin.value == 'Vinicius' && textpasswd.value == '456'){   
        window.open( "../index/index_cliente.html" , "_top")
    } else if ( textlogin.value != 'Syniila' && textlogin.value.length != 0 || textpasswd.value != '123' && textpasswd.value.length != 0 ){
        window.alert('Este usuário não está cadastrado! Verifique o login e a senha e tente novamente') 
    } else{
        window.alert('Os campos estão vazios! Preencha-os para poder prosseguir')
    }
}

document.addEventListener("keydown", function(event){
    
    if (event.key === 'Enter'){
        let textlogin = document.getElementById('login-i');
        let textpasswd = document.getElementById('login-p');
        if ( textlogin.value == 'Syniila' && textpasswd.value == '123' ){
            window.open( "../index/index_adm.html" , "_top")
        } else if ( textlogin.value == 'Vinicius' && textpasswd.value == '456'){   
            window.open( "../index/index_cliente.html" , "_top")
        } else if ( textlogin.value != 'Syniila' && textlogin.value.length != 0 || textpasswd.value != '123' && textpasswd.value.length != 0 ){
            window.alert('Este usuário não está cadastrado! Verifique o login e a senha e tente novamente') 
        } else {
            window.alert('Os campos estão vazios! Preencha-os para poder prosseguir')
        }
}
 
});





