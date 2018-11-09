<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" ref="contentBox">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vTags from './Tags.vue';
    export default {
        data(){
            return {
                tagsList: [],
            }
        },
        components:{
            vHead, vSidebar, vTags
        },
        created(){
            
        }
    }
</script>
