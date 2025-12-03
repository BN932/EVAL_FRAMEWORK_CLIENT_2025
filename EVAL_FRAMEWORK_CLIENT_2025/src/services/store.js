import { DB } from './DB.js';
import { ref, reactive, computed } from "vue";

export const store = reactive({
    products: reactive([]),
    cartItems: reactive([]),
    shippingCost: ref(0),
    subTotal: computed(()=>{return Number((store.cartItems.reduce((sum, item)=> sum + (Number(item.price)*item.quantity), 0)).toFixed(2))}),
    VATTotal: computed(()=>{return Number((store.subTotal*0.21).toFixed(2))}),
    total: computed(()=>{return Number((store.subTotal + store.VATTotal + store.shippingCost).toFixed(2))}),
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