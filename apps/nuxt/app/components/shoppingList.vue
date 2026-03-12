<script setup lang="ts">
    const list = ref<{name: string,number:number}[]>([])
    const newItem = ref<string>('')
    const handleAddItem = () => {
        if(list.value.some(item => item.name === newItem.value)){
            const existingItem = list.value.find(item => item.name === newItem.value)
            if(existingItem){
                existingItem.number += 1
            }
        } else {
            if (newItem.value.trim() !== '') {
                list.value.push({name: newItem.value, number: 1})
                newItem.value = ''
            }
        }
    }
    const handleRemoveItem = (index: number) => {
        if(
            list.value[index]
        ){
            if(list.value[index].number > 1){
                list.value[index].number -= 1
            } else {
                list.value.splice(index, 1)
            }
        }
    }
</script>



<template>
    <div class="shopping-list">
        <h1>Shopping List</h1>
        <div class="add-item">
            <input v-model="newItem" placeholder="Add an item" />
            <button @click="handleAddItem">Add</button>
        </div>
        <ul>
            <li v-for="(item, index) in list" :key="index" class="list-item">{{ item.name }} ({{ item.number }}) <button class="remove-button" @click="() => handleRemoveItem(index)">Remove</button></li>
        </ul>
    </div>
</template>

<style scoped lang="css">
    .shopping-list{
        display:flex;
        gap:2rem;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .add-item{
        display:flex;
        gap:1rem;
    }
    .list-item{
        display:flex;
        gap:1rem;
        align-items:center;
    }
    .remove-button{
        background-color:#dc3545;
        font-size:15px;
        padding:0.25rem 0.5rem;
    }
    h1{
        font-size:5rem;
        font-family: "Poppins", sans-serif;
        margin-bottom:1rem;
    }
    input{
        padding:0.5rem;
        font-size:1.5rem;
        border-radius:0.5rem;
        border:1px solid #ccc;
    }
    button{
        padding:0.5rem 1rem;
        font-size:1.5rem;
        border-radius:0.5rem;
        border:none;
        background-color:#007BFF;
        color:white;
        cursor:pointer;
    }
    ul{
        list-style:none;
        padding:0;
    }
</style>