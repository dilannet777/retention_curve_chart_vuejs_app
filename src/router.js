import Vue from 'vue'
import Router from 'vue-router'
import VueChartJS from './views/VueChart.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'VueChartJS',
			component: VueChartJS
		},


	]
})