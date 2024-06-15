<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnimationControls } from '~/composables/useAnimationControls'

const { createAnimation, playAnimation, pauseAnimation, restartAnimation, reverseAnimation } = useAnimationControls()

onMounted(() => {
  const domNodes = document.querySelectorAll('.dom-node-demo .el')
  createAnimation('dom-node', {
    targets: domNodes,
    translateX: 270,
    duration: 1000,
    direction: 'alternate',
  })
})
</script>

<template>
  <UCard>
    <h1>DOM Node</h1>
    <div class="dom-node-demo">
      <div class="el">
        DOM Node Element 1
      </div>
      <div class="el">
        DOM Node Element 2
      </div>
      <div class="el">
        DOM Node Element 3
      </div>
    </div>
    <UButton @click="playAnimation('dom-node')">
      Play
    </UButton>
    <UButton @click="pauseAnimation('dom-node')">
      Pause
    </UButton>
    <UButton @click="restartAnimation('dom-node')">
      Restart
    </UButton>
    <UButton @click="reverseAnimation('dom-node')">
      Reverse
    </UButton>
  </UCard>
</template>

<style scoped>
.dom-node-demo .el {
  background-color: lightcoral;
  padding: 10px;
  margin: 10px;
  display: inline-block;
}
</style>
