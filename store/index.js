//Almacenamiento central
export const state = () => ({
    users: [{email:"admin@nuxtjs.com", password:"password"}]
})

//Getters para consultas a las BBDD, normalmente se llaman desde computed en los componentes
export const getters = {
    getUsers(state){
        return state.users
    },
    getNumberOfUsers(state){
        return state.users.length
    }
}

//Acciones, para llamar a las mutaciones
export const actions = {
    //esta función se ejecuta al iniciar la app
    async nuxtServerInit({dispatch}, context){
        await dispatch('ships/loadShips')
    },
    loginUser({getters}, loginInfo){
        console.log("REGISTERED USERS:");
        console.log(getters.getUsers);
        let userExist = false
        for(let i=0; i<getters.getNumberOfUsers; i++){
            if(loginInfo.email===getters.getUsers[i].email&&loginInfo.password===getters.getUsers[i].password){
                userExist = true
            } 
        }
        if(userExist===true){
            console.log("You are sign in " + loginInfo.email)
            alert("You are sign in " + loginInfo.email)
        } else {
            alert("Email/Password combination was incorrect. Please try again.")
            console.log("Email/Password combination was incorrect. Please try again.");
        }


    },
    registrerUser({commit, getters}, registrerInfo){
        let userRegistred = false
        for(let i=0; i<getters.getUsers.length; i++){
            if(getters.getUsers[i].email===registrerInfo.email){
                userRegistred = true
            }
        }
        if(userRegistred===false){
            commit('addUser', registrerInfo)
            alert("You are registred as " + registrerInfo.email);
            console.log("You are registred as " + registrerInfo.email);
        } else {
            console.log("You are allready registred " + registrerInfo.email)
            alert("You are allready registred  " + registrerInfo.email)
        }

        console.log("REGISTERED USERS:");
        console.log(getters.getUsers);
    }
}

//Mutadores, para modificar el almacenamiento
export const mutations = {
    setUsers(state, users){
        state.users = users
    },
    addUser(state, registrerInfo){ 
        for (let i=0; i<1; i++ ) {
            state.users.push(registrerInfo)
        }
    }
}