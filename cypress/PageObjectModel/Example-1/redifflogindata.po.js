class logingdata{

    logo(){

        return'Rediff.com'
    }

    username(){
        return'input[name^="name"]'
    }

    mailid(){

        return'input[name^="login"]'
    }

    password(){

        return'#newpasswd'
    }

    retypwpassword(){
        return'#newpasswd1'
    }

    altermail(){
        return'input[name^="altemail"]'
    }

    submit(){

        return'#Register'
    }

    
}

let data1= new logingdata()

export default data1;