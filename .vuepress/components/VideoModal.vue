<template>
    <div class="container-video">
        <script src="https://kit.fontawesome.com/2c36e9b7b1.js"></script>
        <button :onclick="`lightbox_video('${src}')`"><img src="/file-video-regular.svg"></button>
    </div>
</template>

<style scoped>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
    .container-video > button {
        cursor: pointer;
        padding: 20px 30px;
        background-color: #FF3366;
        position: fixed;
        border: 0px;
        border-radius: 15px;
        bottom: 50px;
        right: 50px;
    }
    .container-video > button > img {
        width: 20px;
        border: 0px;
    }
</style>

<script>
export default {
    name: 'VideoModal',
    props: ['src']
}
</script>
