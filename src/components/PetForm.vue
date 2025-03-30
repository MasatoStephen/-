<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">宠物名称</label>
      <input type="text" id="name" v-model="form.name" required />
    </div>
    <div class="form-group">
      <label for="description">描述</label>
      <textarea id="description" v-model="form.description" required></textarea>
    </div>
    <div class="form-group">
      <label for="image">图片上传</label>
      <input type="file" id="image" @change="handleFileUpload" accept="image/*" />
    </div>
    <div v-if="form.imagePreview" class="image-preview">
      <img :src="form.imagePreview" alt="宠物图片预览" />
    </div>
    <button type="submit">提交</button>
  </form>
</template>

<script>
export default {
  name: 'PetForm',
  data() {
    return {
      form: {
        name: '',
        description: '',
        image: '',
        imagePreview: '' // 预览图片的 URL
      }
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        this.form.image = file
        this.form.imagePreview = URL.createObjectURL(file) // 生成本地预览 URL
      }
    },
    handleSubmit() {
      if (!this.form.image) {
        alert('请上传宠物图片')
        return
      }

      // 触发提交事件，将文件对象传递给父组件
      this.$emit('submit', { ...this.form })

      // 清空表单
      this.form.name = ''
      this.form.description = ''
      this.form.image = ''
      this.form.imagePreview = ''
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.image-preview {
  margin-top: 10px;
  text-align: center;
}
.image-preview img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
