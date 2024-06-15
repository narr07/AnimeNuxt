<template>
  <div class="overflow-hidden">
    <Card>
      <CardContent>
        <div class="css-selector-demo pt-6">
          <div class="el">
            <p class="bg-primary p-5 rounded-lg text-black inline-block">
              CSS Selector Element
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div class="w-full pt-10 space-x-4 flex justify-center items-center">
          <Button @click="playAnimation('css-selector')">
            <Icon name="ph:play-circle-duotone" class="w-6 h-6" />
          </Button>
          <Button variant="ghost" @click="pauseAnimation('css-selector')">
            <Icon name="ph:pause-circle-duotone" class="w-6 h-6" />
          </Button>
          <Button variant="ghost" @click="restartAnimation('css-selector')">
            <Icon name="ph:arrow-counter-clockwise-duotone" class="w-6 h-6" />
          </Button>
          <Button variant="ghost" @click="reverseAnimation('css-selector')">
            <Icon name="ph:arrows-left-right-duotone" class="w-6 h-6" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAnimationControls } from '~/composables/useAnimationControls';

const { createAnimation, playAnimation, pauseAnimation, restartAnimation, reverseAnimation } = useAnimationControls();

onMounted(() => {
  createAnimation('css-selector', {
    targets: '.css-selector-demo .el',
    translateX: 500,
    duration: 3500,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
  });
});
</script>
