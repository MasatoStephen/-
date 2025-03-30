<template>
  <div class="pet-card">
    <img :src="pet.image" :alt="pet.name" class="pet-image" />
    <h3>{{ pet.name }}</h3>
    <p>{{ pet.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'PetCard',
  props: {
    pet: Object
  }
}
</script>

<style scoped>
.pet-card {
  width: 200px; /* 固定卡片宽度 */
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background: #fff;
  margin: 10px;
}

.pet-image {
  width: 100%; /* 让图片宽度适应容器 */
  height: 150px; /* 统一固定高度 */
  object-fit: cover; /* 保证图片填充但不会变形 */
  border-radius: 8px;
}
</style>
