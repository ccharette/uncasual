import { defineStore } from 'pinia'
import axios from "axios";

const NOT_STARTED = 'not_started';
const IN_PROGRESS = 'in_progress';
const FINISHED = 'finished';
const UNFINISHED = 'unfinished';

export const gameStatus = {
    not_started: NOT_STARTED,
    in_progress: IN_PROGRESS,
    finished: FINISHED,
    unfinished: UNFINISHED,
};

export const useGames = defineStore('games', {
    state: () => {
        return {
            games: [],
            game_status: gameStatus
        }
    },
    actions: {
        getGames () {
            axios.get(`${this.gamer_api_url}/games`)
                .then(response => {
                    return this.games = response.data.data;
                }).catch(errors => {
                    console.log(errors);
                })
        }
    }
})