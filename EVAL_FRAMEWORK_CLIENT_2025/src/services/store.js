import { DB } from './DB.js';
import { reactive} from "vue";

export const store = reactive({
    products: reactive([]),
    cartItems: reactive([]),
    async setup(url){
        DB.setapiURL(url);
        store.products = await store.findAll('products');
        store.cartItems = await store.findAll('cart-items');
    },
    async findAll(endpoint){
        return DB.findAll(endpoint);
    },
    async addOne(id){
        const product = store.products[store.findProductIndex(id)];
        const newItem = await DB.addOne(product);
        store.cartItems.push(newItem);
        
    },
    async deleteOneById(id){
        DB.deleteOneById(id);
        //const index = store.cartItems.findIndex((todo)=>todo.id == id);
        store.cartItems.splice(store.findProductIndex(id), 1);
    },
    async updateOneById(id){
        const product = store.cartItems[store.findProductIndex(id)];
        DB.updateOneById(product);
    },
    findProductIndex(id){
        const index = store.products.findIndex((product)=>product.id == id);
        return index;
    }
});