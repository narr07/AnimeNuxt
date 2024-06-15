<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnimationControls } from '~/composables/useAnimationControls'

const { createAnimation, playAnimation, pauseAnimation, restartAnimation, reverseAnimation } = useAnimationControls()

onMounted(() => {
  const myObject = {
    prop1: 0,
    prop2: '0%',
  }

  createAnimation('js-object-properties', {
    targets: myObject,
    prop1: 50,
    prop2: '100%',
    easing: 'linear',
    round: 1,
    update: () => {
      const logEl = document.querySelector('.js-object-prop-demo .js-object-log')
      if (logEl) {
        logEl.innerHTML = JSON.stringify(myObject)
      }
    },
  })
})
</script>

<template>
  <UCard>
    <h1>JavaScript Object Properties Animation</h1>
    <div class="js-object-prop-demo">
      <div class="js-object-log">
        Object Log
      </div>
    </div>
    <UButton @click="playAnimation('js-object-properties')">
      Play
    </UButton>
    <UButton @click="pauseAnimation('js-object-properties')">
      Pause
    </UButton>
    <UButton @click="restartAnimation('js-object-properties')">
      Restart
    </UButton>
    <UButton @click="reverseAnimation('js-object-properties')">
      Reverse
    </UButton>
  </UCard>
</template>

<style scoped>
.js-object-prop-demo .js-object-log {
  background-color: lightcoral;
  padding: 10px;
  margin: 10px;
  display: block;
  white-space: pre-wrap;
}
</style>
