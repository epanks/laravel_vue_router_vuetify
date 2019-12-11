import Vue from 'vue';
import VueRouter from 'vue-router';
const foo = {
    template: "<v-alert type='error'>I'am foo </v-alert>"
}
const bar = {
    template: "<v-alert type='error'>I'am bar </v-alert>"
}
const user = {
    template: "<v-alert type='primary'>I'am {{ $route.params.name }} </v-alert>"
}

Vue.use(VueRouter)

const routes = [{
        path: '/foo',
        component: foo
    },
    {
        path: '/bar',
        component: bar
    },
    {
        path: '/user/:name',
        component: user
    }
]

export default new VueRouter({
    routes
})
