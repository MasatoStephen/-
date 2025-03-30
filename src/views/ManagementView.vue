<template>
    <div class="management">
      <h1>宠物管理</h1>
      <PetForm @submit="addPet" />
      <div class="pet-list">
        <PetCard
          v-for="pet in pets"
          :key="pet.id"
          :pet="pet"
        />
      </div>
    </div>
  </template>
  
  <script>
  import PetForm from '../components/PetForm.vue'
  import PetCard from '../components/PetCard.vue'
  
  export default {
    name: 'ManagementView',
    components: {
      PetForm,
      PetCard
    },
    data() {
      return {
        pets: [
          {
            id: 1,
            name: '狗狗',
            description: '一只可爱的狗狗',
            image: '/dog.jpg'
          },
          {
            id: 2,
            name: '猫咪',
            description: '一只迷人的猫咪',
            image: '/cat.jpg'
          }
        ]
      }
    },
    methods: {
      addPet(newPet) {
        newPet.id = this.pets.length + 1
        this.pets.push(newPet)
      }
    }
  }
  </script>
  
  <style scoped>
  .management {
    padding: 20px;
  }
  .pet-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  </style>
  