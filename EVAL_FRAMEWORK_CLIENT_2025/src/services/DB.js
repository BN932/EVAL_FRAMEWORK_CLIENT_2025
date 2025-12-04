import { ref, reactive} from "vue";

export const DB = reactive({
        async setapiURL (data){
        DB.url = data;
    },

    async findAll() {
        const response = await fetch(DB.url + 'products');
        return response.json();
    },
});