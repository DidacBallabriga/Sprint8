//Almacenamiento central
export const state = () => ({
    _ships: [],
    _imgShips: [],
})

//Actions
export const actions = {
    async loadShips({commit}){
        //obtener lista naves
        let { data } = await this.$axios.get('https://swapi.dev/api/starships/?page=2')
        commit('setShips', data)
    }
}

//Getters
export const getters = {
    getShips(state){
        return state._ships
    }
}

//Mutaciones
export const mutations = {
    setShips(state, ships){
        state._ships = ships
    }
}