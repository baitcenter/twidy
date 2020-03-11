<template>
    <f7-block style="padding-left: 10%; padding-right: 10%; margin-bottom: 0;">
        <f7-row>
            <f7-col v-for="i in 9" width="33" :key="i" style=" display: flex; flex-direction: column; align-items: center;">
                <f7-button large round class="text-center number-pad-button" @click="InputNumber(i)" > {{ i }} </f7-button>
            </f7-col>
            <f7-col width="33"></f7-col>
            <f7-col width="33" style=" display: flex; flex-direction: column; align-items: center;">
                <f7-button large round class="text-center number-pad-button" @click="InputNumber(0)" > 0 </f7-button>
            </f7-col>
            <f7-col width="33">
                 <f7-button large round class="text-center number-pad-button" @click="deleteSymbol()" icon-f7="delete_left" >  </f7-button>
            </f7-col>
        </f7-row>
    </f7-block>
</template>

<script>

    export default {
        name: 'keypad',
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            deleteSymbol() {
                
            },
            InputNumber(number) {
                
            },
        },
        watch: {

        },
        mounted() {

        }
    }

</script>
