<template>
    <ul class="cards__list">
        <CardItem v-for="(item, index) in items" :key="index" :item="item"/>
    </ul>
    <button class="loadMore" @click="checkMore()" v-if="this.page < this.total">
        Загрузить еще
    </button>
</template>

<script>
    import CardItem from './CardItem.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'CardList',
        components: {
            CardItem
        },
        watch: {
            items: function(val) {
                console.log(val)
            }
        },
        methods: {
            checkMore() {
                console.log(this.page, this.total)
                if (this.page < this.total) this.$store.dispatch('getCards', this.page += 1)
                else return
            }
        },
        mounted() {
            this.$store.dispatch('getCards', this.$store.state.page)
        },
        computed: mapState([
                'items',
                'page',
                'total'
            ])
    }
</script>

<style>
    .cards__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 48px;
        margin-top: 64px;
    }
    .loadMore {
        margin: 0 auto;
        margin-top: 72px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #002DBF;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        border: 1px solid #002DBF;
        padding: 16px 32px;
        border-radius: 8px;
        cursor: pointer;
    }
</style>