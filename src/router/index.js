import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import NoFind from "@/components/NoFind";
import NoAuthor from "@/components/NoAuthor";
import Home from "@/components/Home";
import View from "@/components/common/View";
import BaseTable from "@/components/BaseTable";
import Tabs from "@/components/Tabs";
import BaseForm from "@/components/BaseForm";
import Upload from "@/components/Upload";
import DragList from "@/components/DragList";
import Markdown from "@/components/Markdown";

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        redirect: '/Home'
    },
    {
        path: "/",
        name: "View",
        component: View,
        meta: {
            title: "主视图"
        },
        children: [{
            path: "/home",
            name: "Home",
            component: Home,
            meta: {
                title: '系统首页'
            }
        },
        {
            path: "/table",
            name: "BaseTable",
            component: BaseTable,
            meta: {
                title: '基础表格'
            }
        },
        {
            path: "/tabs",
            name: "Tabs",
            component: Tabs,
            meta: {
                title: 'tab选项卡'
            }
        },
        {
            path: "/form",
            name: "BaseForm",
            component: BaseForm,
            meta: {
                title: '基本表单'
            }
        },
        {
            path: "/upload",
            name: "Upload",
            component: Upload,
            meta: {
                title: '上传文件'
            }
        },
        {
            path: "/drag",
            name: "DragList",
            component: DragList,
            meta: {
                title: '拖拽列表'
            }
        },
        {
            path: "/markdown",
            name: "Markdown",
            component: Markdown,
            meta: {
                title: 'markdown'
            }
        }]
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/noFind",
        name: "NoFind",
        component: NoFind
    },
    {
        path: "/noAuthor",
        name: "NoAuthor",
        component: NoAuthor
    },
    {
        path: "*",
        redirect: "/NoFind"
    }]
});
