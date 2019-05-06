import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const contracts = () => {
  return [{ IATAOwner: 'USA',
                  contractOwnerName: 'American Airlines',
                 
                      origin: 'LIM',
                      destination: 'MAD',
                      className: 'Economy',
                      class: 'F',
                      commission: '5%',
                      available: true,
                      startDate: '20180502', 
                      expirationDate: '20220802',
                  
                },
                { IATAOwner: 'PERU',
                contractOwnerName: 'Avianca',
                
                startDate: '201900102', 
                expirationDate: '20220802',
                
                    origin: 'LIM',
                    destination: 'MAD',
                    className: 'Economy',
                    class: 'F',
                    commission: '5%',
                    available: true
                  
              }]
};
export default new Vuex.Store({
  state: {
    contracts: contracts(),
    filter:{
      query: '',

    } 
  },
  mutations: {
    SET_QUERY(state, query){
      state.filter.query = query;
    },
    SET_AVAILABLE(state){
      state.filter.available = !state.filter.available;
    }
  },
  getters: {
    filteredContracts (state){
      let contracts = state.contracts;
      if (state.filter.query.length >0){

        return contracts.filter(contracts => contracts.contractOwnerName.toLowerCase().includes(state.filter.query));
      }
      return contracts;
    }
  }
})
