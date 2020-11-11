<template>
    <!-- <div class="breadcrumb"> -->
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb p-0 bg-transparent border-0 mb-2 mb-md-3">
            <li class="breadcrumb-item"
            v-for="(breadcrumb, idx) in breadcrumbList"
            :key="idx"
            @click="routeTo(idx)"
            :class="{'active': !breadcrumb.link}">
            <!-- :class="{'linked': !!breadcrumb.link}"> -->

            {{ breadcrumb.name }}

            </li>
        </ol>
    </nav>
    <!-- </div> -->
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () { this.updateList() },
  watch: { '$route' () { this.updateList() } },
  methods: {
    routeTo (pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
  }
}
</script>

<style scoped>
    /* .breadcrumb {
        margin-bottom: line(3);
    } */
    /* ul {
        display: flex;
        list-style: none;
        padding: 0;
        font-size: font(1);
    } */
    li {
        cursor: pointer;
        /* color: #42b983; */
    }
    li:last-child {
        cursor: default;
    }
    /* li:not(:last-child):after {
        content: ">";
        margin: 5px;
    } */
</style>
