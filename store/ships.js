//Almacenamiento central
export const state = () => ({
    arrayShips: [],
    arrayUrlPilots: [],
    arrayPilots: [],
    page: 2,
    contador: 0
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
    },
    //obtener lista pilotos
    async loadPilots({commit, getters}){
        let pagina = getters.getNumber
        if(pagina <5){
        let urlPilots = getters.getUrlPilots
        for (var i=0; i<10; i++ ) {
            if(urlPilots[i].length===0){
                commit('addPilot', 0) 
            } else {
                var arrayPilotsToPush = []
                let urlaxios = urlPilots[i]
                for(var z=0; z<urlPilots[i].length; z++ ){
                var { data } = await this.$axios.get(urlaxios[z])
                arrayPilotsToPush.push(data)
                } 
                commit('addPilot', arrayPilotsToPush)
            }
          }
        }
        },
        async loadMorePilots({commit, getters}){
            let pagina = getters.getNumber
        if(pagina ===3){
        let urlPilots = getters.getUrlPilots
        for (var i=10; i<20; i++ ) {
            if(urlPilots[i].length===0){
                commit('addPilot', 0) 
            } else {
                var arrayPilotsToPush = []
                let urlaxios = urlPilots[i]
                for(var z=0; z<urlPilots[i].length; z++ ){
                var { data } = await this.$axios.get(urlaxios[z])
                arrayPilotsToPush.push(data)
                } 
                commit('addPilot', arrayPilotsToPush)
            }
          }
        }
        if(pagina ===4){
            let urlPilots = getters.getUrlPilots
            for (var i=20; i<30; i++ ) {
                if(urlPilots[i].length===0){
                    commit('addPilot', 0) 
                } else {
                    var arrayPilotsToPush = []
                    let urlaxios = urlPilots[i]
                    for(var z=0; z<urlPilots[i].length; z++ ){
                    var { data } = await this.$axios.get(urlaxios[z])
                    arrayPilotsToPush.push(data)
                    } 
                    commit('addPilot', arrayPilotsToPush)
                }
              }
            }
            if(pagina ===5){
                let urlPilots = getters.getUrlPilots
                for (var i=30; i<36; i++ ) {
                    if(urlPilots[i].length===0){
                        commit('addPilot', 0) 
                    } else {
                        var arrayPilotsToPush = []
                        let urlaxios = urlPilots[i]
                        for(var z=0; z<urlPilots[i].length; z++ ){
                        var { data } = await this.$axios.get(urlaxios[z])
                        arrayPilotsToPush.push(data)
                        } 
                        commit('addPilot', arrayPilotsToPush)
                    }
                  }
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
    },
    getUrlPilots(state){
        return state.arrayUrlPilots
    },
    getPilots(state){
        return state.arrayPilots
    },
    getContador(state){
        return state.contador
    }
}

//Mutaciones
export const mutations = {
    setShips(state, ships){
        state.arrayShips = ships
        for ( var index=0; index<ships.length; index++ ){
            var pilots = state.arrayShips[index].pilots
            state.arrayUrlPilots.push(pilots)
        }
    },
    addShips(state, ships){ 
        for ( var index=0; index<ships.length; index++ ) {
            state.arrayShips.push(ships[index])
            var pilots = ships[index].pilots
            state.arrayUrlPilots.push(pilots)
        }
    },
    addPilot(state, pilot){
        state.arrayPilots.push(pilot)
    },
    incrementPage (state) {
        state.page++
      },
    incrementContador (state){
        state.contador = contador++
    }
}