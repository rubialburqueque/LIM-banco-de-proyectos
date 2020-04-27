<template>
  <div class="home">
    <NavUser/>
    <CardMovie/>
    <div>
    </div>
  </div>
</template>

<script>
import NavUser from '@/components/users/NavUser.vue';
import CardMovie from '@/components/users/CardMovie.vue';

export default {
  name: 'Home',
  components: {
    NavUser,
    CardMovie,
  }
}
</script>

<style>

</style>
