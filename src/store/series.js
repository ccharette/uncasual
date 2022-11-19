import { defineStore } from 'pinia'
import axios from "axios";

export const useSeries = defineStore('series', {
    state: () => {
        return {
            series: [],
        }
    },
    actions: {
        async getSeries () {
            axios.get(`${this.gamer_api_url}/series`)
                .then(response => {
                    return this.series = response.data.data;
                }).catch(errors => {
                    console.log(errors);
                })
        }
    }
})