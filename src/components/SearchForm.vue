<template>
<div>
    <input type="text" v-model="search" />
</div>
    
</template>
<script>
export default {
    computed: {
        search: {
            get(){
                return this.$store.state.filter.query;
            },
            set(val){
                this.$store.commit('SET_QUERY', val);
            }
        },
        available: {
            get(){
                return this.$store.state.filter.available;

            },
            set(){
                this.$store.commit('SET_AVAILABLE');
            }
        }
    }
}
</script>
