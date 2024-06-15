// useAnimationControls.ts
import { ref } from 'vue';
import type { AnimeInstance, AnimeParams } from 'animejs';

const animations = ref<{ [key: string]: AnimeInstance }>({});

function createAnimation(key: string, params: AnimeParams) {
  animations.value[key] = useAnime(params);
}

function playAnimation(target?: string) {
  if (target && animations.value[target]) {
    animations.value[target].play();
  } else {
    Object.values(animations.value).forEach(animation => animation.play());
  }
}

function pauseAnimation(target?: string) {
  if (target && animations.value[target]) {
    animations.value[target].pause();
  } else {
    Object.values(animations.value).forEach(animation => animation.pause());
  }
}

function restartAnimation(target?: string) {
  if (target && animations.value[target]) {
    animations.value[target].restart();
  } else {
    Object.values(animations.value).forEach(animation => animation.restart());
  }
}

function reverseAnimation(target?: string) {
  if (target && animations.value[target]) {
    animations.value[target].reverse();
  } else {
    Object.values(animations.value).forEach(animation => animation.reverse());
  }
}

export function useAnimationControls() {
  return {
    createAnimation,
    playAnimation,
    pauseAnimation,
    restartAnimation,
    reverseAnimation,
  };
}
