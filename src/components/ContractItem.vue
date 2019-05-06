<template>
    <div class="col-sm-6 mb-3">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">{{ contracts.contractOwnerName }}</h5>
                <h6 class="card-subtitle"> Available: {{ contracts.available}}</h6>
            </div>
            <div class="card-body">
                <p class="card-text"> {{ contracts.comission}} </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: { 
        contracts:{
            type: Object,
            required: true
        }
    }
}
</script>

