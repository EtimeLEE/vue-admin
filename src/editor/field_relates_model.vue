<template>
    <field_model
        v-model="model"
        :candidate="finalOptions"
        :valuefield="valuefield"
        :labelfield="labelfield"
        :placeholder="placeholder"
    ></field_model>
</template>

<script>
import _field_relates_mixin from "./_field_relates_mixin.js"
import _computed_model_mixin from "./_computed_model_mixin.js"
import field_model from "./field_model.vue"
import _props_placeholder_mixin from "./_props_placeholder_mixin.js"
import _props_value_mixin from "./_props_value_mixin"
export default{
    name:'field_relates_model',
    mixins:[
        _field_relates_mixin,
        _computed_model_mixin,
        _props_placeholder_mixin,
        _props_value_mixin,
    ],
    components:{
        field_model
    },
    props:{

    },
}
</script>