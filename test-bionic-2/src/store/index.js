import Vuex from 'vuex'
import { Vue } from 'vue'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({

    state: {
        employees: []
    },

    mutations: {
        SET_EMPLOYEE(state, dataEmployee) {
            state.employees = dataEmployee
        }
    },

    actions: {
        fetchEmployee(context, payload) {
            axios({
                method: "GET",
                url: `https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth`
            })
            .then(({data}) => {
                console.log(data);
                const cleanData = data.filter((item) => {
                    item !== null
                })
                context.commit('SET_EMPLOYEE', cleanData)
            })
            .catch(err => {
                console.log(err);
            })
        },

        appliedJobs(context, payload) {
            axios({
                method: "POST",
                url: `https://bti.id/services/btiportalcorems/api/pt-job-applies/no-auth`,
                data: {
                    displayName : payload.displayName,
                    subject: payload.subject,
                    email: payload.email,
                    phone: payload.phone,
                    message: payload.message,
                    ptJobApplyType: "APPLICATION",
                    isActive: false
                }
            })
            .then(({data}) => {
                context.dispatch('fetchEmployee')
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },

    modules: {

    }

})