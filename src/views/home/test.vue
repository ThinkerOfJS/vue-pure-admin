<script setup>
import { onMounted, onUnmounted, ref, reactive } from "vue";
let floatDom = reactive({
  x: 0,
  y: 0,
  isDelX: 1,
  isDelY: 1
});
let timeout = ref(null);
let box = ref(null);
let parent = ref(null);

function moveDom() {
  if (
    floatDom.x > parent.value.clientHeight - box.value.clientWidth ||
    floatDom.x < 0
  ) {
    floatDom.isDelX *= -1;
  }
  if (
    floatDom.y > parent.value.clientWidth - box.value.clientHeight ||
    floatDom.y < 0
  ) {
    floatDom.isDelY *= -1;
  }

  floatDom.x += floatDom.isDelX;
  floatDom.y += floatDom.isDelY;
  box.value.style.top = `${floatDom.x}px`;
  box.value.style.left = `${floatDom.y}px`;

  timeout.value = setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    moveDom();
  }, 5);
}

onMounted(() => {
  console.log(box.value);
  moveDom();
});

onUnmounted(() => {
  clearTimeout(timeout.value);
});
</script>
<template>
  <div id="test" ref="parent">
    <div class="float-dom" ref="box"></div>
  </div>
</template>
<style scoped lang="scss">
#test {
  position: relative;
  background: #cde2f8;
  height: 500px;

  .float-dom {
    width: 100px;
    height: 100px;
    background: #0bdcb7;
    position: absolute;
  }
}
</style>
