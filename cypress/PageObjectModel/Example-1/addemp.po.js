class employee{

    PIM(){
        return"PIM"
    }

    AddEmployee(){

        return'Add Employee'

    }
    firstname(){

        return'input[name="firstName"]'
    }
    lastname(){

        return'input[name="lastName"]'
    }

    //empid='input[fdprocessedid="ozpyc"]'

    submit(){
        return 'button[type="submit"]'
    }

}

const addemployee=new employee()

export default addemployee