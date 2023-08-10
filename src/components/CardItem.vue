<template>
    <li class="card">
        <img :src="item.image" alt="img" v-if="item.image" class="card__img">
        <div class="card__block" :style="item.image === '' ? 'height: 100%' : ''">
            <div class="card__block-main">
                <div class="card__text">
                    <span>{{moment.unix(item.date).format('DD')}}</span>
                    <div class="card__text_date">
                        <p>{{moment.unix(item.date).format('MMMM')}}</p>
                        <p>{{moment.unix(item.date).format('YYYY')}}</p>
                    </div>
                </div>
                <div class="card__title">
                    <span>{{item.name}}</span>
                </div>
                <div class="card__description">
                    <span>{{item.previewText}}</span>
                </div>
            </div>
            <a :href="item.link" class="card__link">
                Новости
            </a>
        </div>
    </li>
</template>

<script>
    import { inject } from 'vue';
    export default {
        name: 'CardItem',
        props: ['item'],
        setup() {
            const moment = inject('moment');
            return { moment };
        },
        mounted() {
        }
    }
</script>

<style>
    .card {
        border: 1px solid #0F62FE;
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card__img {
        height: 250px;
        width: 100%;
        margin-bottom: 32px;
    }

    .card__block {
        padding-left: 32px;
        padding-right: 32px;
        padding-bottom: 32px;
        padding-top: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card__text span {
        font-size: 36px;  
        line-height: 36px;
        font-weight: 400;
    }
    .card__text {
        display: flex;
        align-items: center;
        color: #A1A7B5;
        margin-bottom: 16px;
    }
    .card__text_date {
        display: flex;
        flex-direction: column;
        font-weight: 700;
        font-size: 15px;
        line-height: 16.5px;
        color: #A1A7B5;
        margin-left: 4px;
    }

    .card__title {
        color: #0C5BEF;
        font-weight: 400;
        font-size: 22px;
        line-height: 26.4px;
        margin-bottom: 16px;
    }

    .card__description {
        color: #222327;
        font-weight: 400;
        line-height: 26px;
        font-size: 20px;
        margin-bottom: 40px;
    }

    .card__link {
        color: #00133A;
        font-weight: 400;
        font-size: 14px;
        line-height: 19.6px;
    }
</style>