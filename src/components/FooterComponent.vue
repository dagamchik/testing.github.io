<template>
    <footer>
        <div class="container footer__container">
            <img alt="logo" src="../assets/img/logo.svg">
            <p>© alpha, 2023</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterComponent'
    }
</script>

<style>
    footer {
        background: #F0F6FE;
        height: 202px;
        display: flex !important;
        align-items: center !important;
    }

    .footer__container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .footer__container img {
        width: 114.25px;
        height: 36px;
    }
    .footer__container p {
        font-weight: 400;
        font-size: 16px;
        line-height: 22.4px;
        color: #81899D;
    }
</style>