//Almacenamiento central
export const state = () => ({
    arrayShips: [],
    page: 2
})

//Actions
export const actions = {
    //obtener lista naves
    async loadShips({commit}){
        let { data } = await this.$axios.get('https://swapi.dev/api/starships/?page=1')
        commit('setShips', data.results)
    },
    async loadMoreShips({commit, getters}){
        let pagina = getters.getNumber
        if(pagina <5){
            let baseurl = `https://swapi.dev/api/starships/?page=`+pagina
            let { data } = await this.$axios.get(baseurl)
            commit('addShips', data.results)
            commit('incrementPage')
        }
    }  
}

//Getters
export const getters = {
    getShips(state){
        return state.arrayShips
    },
    getNumber(state){
        return state.page
    }
}

//Mutaciones
export const mutations = {
    setShips(state, ships){
        state.arrayShips = ships
    },
    addShips(state, ships){ 
        for ( var index=0; index<ships.length; index++ ) {
            state.arrayShips.push(ships[index]);
        }
    },
    incrementPage (state) {
        state.page++
      },
}