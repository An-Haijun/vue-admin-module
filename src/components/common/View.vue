<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" ref="contentBox">
            <!-- <GeminiScrollbar class="my-scroll-bar"> -->
            <router-view></router-view>
            <!-- </GeminiScrollbar> -->
        </div>
    </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
export default {
    data () {
        return {
            tagsList: []
        };
    },
    components: {
        vHead,
        vSidebar
    },
    created () {}
};
</script>
<style scoped>
.my-scroll-bar {
    height: 100%;
}
</style>
