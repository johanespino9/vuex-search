<template>
    <div>
        <h1>Buscador de Contratos</h1>
        <search-form></search-form>
        <hr>
        <contract-list></contract-list>
    </div>
</template>
<script>
import SearchForm from './SearchForm';
import ContractList from './ContractList';

export default {
    components: {
        SearchForm,
        ContractList
    }    
}
</script>

