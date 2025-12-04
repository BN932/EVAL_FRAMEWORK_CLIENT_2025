import { DB } from './DB.js';
import { reactive } from "vue";
export const storeProducts = reactive({
    products: reactive([]),
    async setup(url){
            DB.setapiURL(url);
            storeProducts.products = await storeProducts.findAll();
        },
    async findAll(){
            return DB.findAll();
        },
})
    