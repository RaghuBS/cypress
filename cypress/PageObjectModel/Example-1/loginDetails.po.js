class loginPage{

    logo(){

        return'img[alt="company-branding"]'
    }

    username(){
        return'input[name="username"]'
    }

    password(){

        return'input[name="password"]'
    }



    submitbutton='[type="submit"]'
    

    // loginerrormsg(){

    //     return'Invalid credentials'
    // }

    // loginScript(username,password){    // repetaive script re usablitiy 

    //     cy.get(this.username()).type(username);
    //     cy.get(this.password()).type(password);
    //     cy.get(this.submitbutton).click();

    // }

    // or we can use this to pass login usernmae and password locater 
    

    //logindata(logincrds){
       // return'input[name="'+logincrds+'"]'
    //}

    // cy.get(login.logindata('username')).type(username);
    // cy.get(login.logindata('password'))).type(password);
    //     cy.get(this.submitbutton).click();

}

const login= new loginPage()

export default login;

