<template>
  <div class="menu-container">
    <div class="menu-trigger" style="height: 66px; width: 66px"></div>

    <NCard class="menu">
      <NList>
        <NListItem>Item 1</NListItem>
      </NList>
    </NCard>
  </div>
</template>

<script setup lang="tsx">
const trigger = ref<HTMLElement>()

// const { x, y, showBtn } = useMouseInElement(trigger)
</script>

<style>
.menu-container {
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-trigger {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.menu {
  position: absolute;
  bottom: 50px;
  right: 0;
  width: 200px;
  /* border-radius: 100px; */
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: scale(0);
  transition: transform 0.2s ease;
}

.menu-trigger:hover + .menu,
.menu:hover {
  transform: scale(1);
}

.menu ul {
  list-style: none;
  margin: 0;
  padding: 20px;
}

.menu li {
  padding: 10px 0;
}
</style>
