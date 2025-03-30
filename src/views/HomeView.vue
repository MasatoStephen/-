<template>
  <div class="home">
    <h1>欢迎来到宠物寄养系统</h1>
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
import PetCard from '../components/PetCard.vue'

export default {
  name: 'HomeView',
  components: {
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
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}
.pet-list {
  display: flex;
  flex-wrap: wrap;
}

/* 使用 ::v-deep 覆盖 PetCard 组件中 .pet-image 样式 */
::v-deep .pet-image {
  width: 200px;     /* 固定宽度 */
  height: 200px;    /* 固定高度 */
  object-fit: cover;/* 保持图片比例并裁剪 */
}
</style>
