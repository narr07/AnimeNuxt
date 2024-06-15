<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnimationControls } from '~/composables/useAnimationControls'

const { createAnimation, playAnimation, pauseAnimation, restartAnimation, reverseAnimation } = useAnimationControls()

onMounted(() => {
  const mixedArrayTargets = [
    document.querySelector('.mixed-array-demo .el-01'),
    '.mixed-array-demo .el-02',
    '.mixed-array-demo .el-03',
  ]
  createAnimation('array', {
    targets: mixedArrayTargets,
    translateX: 250,
    duration: 1000,
    direction: 'alternate',
  })
})
</script>

<template>
  <UCard>
    <h1>Array</h1>
    <div class="mixed-array-demo">
      <div class="el-01">
        Array Element 1
      </div>
      <div class="el-02">
        Array Element 2
      </div>
      <div class="el-03">
        Array Element 3
      </div>
    </div>
    <UButton @click="playAnimation('array')">
      Play
    </UButton>
    <UButton @click="pauseAnimation('array')">
      Pause
    </UButton>
    <UButton @click="restartAnimation('array')">
      Restart
    </UButton>
    <UButton @click="reverseAnimation('array')">
      Reverse
    </UButton>
  </UCard>
</template>

<style scoped>
.mixed-array-demo .el-01,
.mixed-array-demo .el-02,
.mixed-array-demo .el-03 {
  background-color: lightyellow;
  padding: 10px;
  margin: 10px;
  display: inline-block;
}
</style>
