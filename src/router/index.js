import { createRouter, createWebHistory } from 'vue-router'

// View
import GamesView from '@/views/games/GamesView.vue'
import GameView from '@/views/games/GameView.vue'
import GameCreateView from '@/views/games/GameCreateView.vue'
import HomeView from "@/views/HomeView.vue";
import SeriesView from "@/views/series/SeriesView.vue";
import SerieView from "@/views/series/SerieView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => HomeView
        },
        {
            path: '/games',
            name: 'games',
            component: () => GamesView
        },
        {
            path: '/games/create',
            name: 'game-create',
            component: () => GameCreateView
        },
        {
            path: '/games/:id',
            name: 'game',
            component: () => GameView
        },
        {
            path: '/series',
            name: 'series',
            component: () => SeriesView
        },
        {
            path: '/serie/:id',
            name: 'serie',
            component: () => SerieView
        },
    ]
})

export default router