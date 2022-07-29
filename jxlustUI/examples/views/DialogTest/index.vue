<template>
  <section>
    <header> openDialog </header>
    <button @click="openDialog">Open Dialog</button>
  </section>
</template>

<script setup lang="ts">
  import MyDialog from '@pk/MyDialog/useMyDialog';
  let myDialog = new MyDialog({
    msg: 'hhh',
    type: 1,
    sure: (data: any) => {
      console.log('sure data:', data);
    },
  });
  const openDialog = () => {
    myDialog.open();
  };
</script>

<style></style>
