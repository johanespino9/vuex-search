<template>
    <div class="row">
        <contract :contracts="contract" v-for="contract in contracts" :key="contract.id" />
    </div>
</template>
<script>
import Contract from './ContractItem';
import {mapGetters} from 'vuex';
export default {
    components:{
        Contract
    },
    computed:{
        ...mapGetters({
            contracts: 'filteredContracts',
        })
    }
    
}
</script>
