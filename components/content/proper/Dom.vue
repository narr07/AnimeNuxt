<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnimationControls } from '~/composables/useAnimationControls'

const { createAnimation, playAnimation, pauseAnimation, restartAnimation, reverseAnimation } = useAnimationControls()

onMounted(() => {
  createAnimation('dom-attributes', {
    targets: '.dom-attribute-demo input',
    value: [0, 1000],
    round: 1,
    easing: 'easeInOutExpo',
    duration: 2000,
  })
})
</script>

<template>
  <UCard>
    <h1>DOM Attributes Animation</h1>
    <div class="dom-attribute-demo">
      <input type="text" value="0" readonly>
    </div>
    <UButton @click="playAnimation('dom-attributes')">
      Play
    </UButton>
    <UButton @click="pauseAnimation('dom-attributes')">
      Pause
    </UButton>
    <UButton @click="restartAnimation('dom-attributes')">
      Restart
    </UButton>
    <UButton @click="reverseAnimation('dom-attributes')">
      Reverse
    </UButton>
  </UCard>
</template>

<style scoped>
.dom-attribute-demo input {
  width: 200px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2em;
  text-align: center;
}
</style>
