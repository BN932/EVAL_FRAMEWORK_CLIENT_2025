import { ref, reactive} from "vue";

export const DB = reactive({
        async setapiURL (data){
        DB.url = data;
    },

    async findAll(endpoint) {
        const response = await fetch(DB.url + endpoint);
        return response.json();
    },
    async addOne(product) {
        const response = await fetch(DB.url + "cart-items", {method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({name: product.name, price: product.price, quantity: 1 }),})
        const newItem = await response.json();
        return newItem;
    },
    async deleteOneById(id){
        const response = await fetch(DB.url + "cart-items/" + id, {method: 'DELETE'});
    },
    async updateOneById(data){
        const response = await fetch(DB.url + "cart-items/" + data.id, {method: 'PUT', headers: { "Content-Type": "application/json" }, body: JSON.stringify({name: product.name, price: product.price, quantity: data.quantity})});
    },
});