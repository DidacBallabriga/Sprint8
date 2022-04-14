//Almacenamiento central
export const state = () => ({

})

//Getters, normalmente se llaman desde computed en los componentes
export const getters = {

}

//Acciones, para llamar a las mutaciones
export const actions = {
    //esta función se ejecuta al iniciar la app
    async nuxtServerInit({dispatch}, context){
        await dispatch('ships/loadShips')
    }
}

//Mutadores, para modificar el almacenamiento
export const mutations = {

}