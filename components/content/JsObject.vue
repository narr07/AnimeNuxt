<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnimationControls } from '~/composables/useAnimationControls'

const { createAnimation, playAnimation, pauseAnimation, restartAnimation, reverseAnimation } = useAnimationControls()

onMounted(() => {
  const battery = {
    charged: '0%',
    cycles: 120,
  }
  createAnimation('js-object', {
    targets: battery,
    charged: '100%',
    cycles: 130,
    round: 1,
    easing: 'linear',
    update: () => {
      const logEl = document.querySelector('.js-object-demo .battery-log')
      if (logEl) {
        logEl.innerHTML = JSON.stringify(battery)
      }
    },
  })
})
</script>

<template>
  <UCard>
    <h1>JavaScript Object</h1>
    <div class="js-object-demo">
      <div class="battery-log">
        Battery Log
      </div>
    </div>
    <UButton @click="playAnimation('js-object')">
      Play
    </UButton>
    <UButton @click="pauseAnimation('js-object')">
      Pause
    </UButton>
    <UButton @click="restartAnimation('js-object')">
      Restart
    </UButton>
    <UButton @click="reverseAnimation('js-object')">
      Reverse
    </UButton>
  </UCard>
</template>

<style scoped>
.js-object-demo .battery-log {
  background-color: lightgreen;
  padding: 10px;
  margin: 10px;
}
</style>
