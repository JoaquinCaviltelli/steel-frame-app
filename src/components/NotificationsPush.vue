<template>
    <div>
        <div class="notification">

            <div class="message">
                <p>Usuario creado</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NotificationsPush',
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

.notification{
    width: 200px;
    height: 60px;
    background-color: white;
    color: #666666;
    padding: 10px;
    border: 3px solid #00dc3e;
    box-shadow: 0px 0px 5px #000;
    top: 115px;
    right: 10px;
    z-index: 9999;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>