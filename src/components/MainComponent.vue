<template>
    <div class="main">
        <div class="main__banner">
            <div class="container main__news">
                Новости
            </div>
        </div>
        <div class="container">
            <CardList/>
        </div>
    </div>
</template>

<script>
    import CardList from './CardList.vue'
    export default {
        name: 'MainComponent',
        components: {
            CardList
        }
    }
</script>

<style>
    .main__banner {
        height: 320px;
        width: 100%;
        background: url('../assets/img/hero.webp') no-repeat;
        background-size: 100% 100%;
        display: flex;
    }
    .main__news {
        align-self: end;
        text-align: left;
        width: 100%;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        padding-bottom: 48px;
    }
</style>