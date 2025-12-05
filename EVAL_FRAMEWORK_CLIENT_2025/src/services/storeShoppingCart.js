import { ref, reactive, computed, watch } from "vue";
import { storeProducts } from "./storeProducts";
export const storeShoppingCart = reactive({
    cartItems: reactive([]),
    //--------Area for the calculation of the costs
    deliveryCost: ref(0),
    //Calculation of the subtotal
    subTotal: computed(()=>{return Number((storeShoppingCart.cartItems.reduce
        ((sum, item)=> sum + (Number(item.price)*item.quantity), 0)).toFixed(2))}),
    //Calculation of the vat based on the subTotal value
    VATTotal: computed(()=>{return Number((storeShoppingCart.subTotal*0.21).toFixed(2))}),
    //Calculation of the grand total, based on Subtotal, VAT & shippingCost values
    total: computed(()=>{return Number((storeShoppingCart.subTotal + storeShoppingCart.VATTotal + storeShoppingCart.deliveryCost).toFixed(2))}),
    //------------Methods
    setup(){
        localStorage.cartItems ? JSON.parse(localStorage.cartItems).forEach((item) => storeShoppingCart.cartItems.push(item)):null;
        },
    //-----------CRUD methods
    async addOneById(id){
        if (storeShoppingCart.cartItems.find((item) => item.id==id)){       
            storeShoppingCart.cartItems[storeShoppingCart.findProductIndex(id, storeShoppingCart.cartItems)].quantity +=1;
        }
        else {
            const item = storeProducts.products[storeShoppingCart.findProductIndex(id, storeProducts.products)];
            storeShoppingCart.cartItems.push({id: item.id, name: item.name, price: item.price, quantity: 1});
        }
        
    },
    async deleteOneById(id){
        storeShoppingCart.cartItems.splice(storeShoppingCart.findProductIndex(id, storeShoppingCart.cartItems), 1);
    },
    //--------------Utility
    findProductIndex(id, table){
        const index = table.findIndex((product)=>product.id == id);
        return index;
    },  
})
//----------------Watcher for the localStorage
watch(storeShoppingCart.cartItems, (newValue) => {
            localStorage.cartItems = JSON.stringify(newValue);
        });

