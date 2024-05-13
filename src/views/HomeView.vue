<template>
  <div class="">
    <el-container>

        <el-aside >
        <el-menu
          active-text-color="#ffd04b"
          background-color="#304156"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :collapse="isCollapse"
          router
        >
          <el-menu-item index="/one">
            <el-icon><icon-menu /></el-icon>
            <span>Dashboard</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Example</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/About">item one</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-menu-item index="3">
            <el-icon><icon-menu /></el-icon>
            <span>Form</span>
          </el-menu-item>

          <el-sub-menu index="4">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Nested</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-menu-item index="5">
            <el-icon ><icon-menu /></el-icon>
            <span>Extemal Link</span>
          </el-menu-item>

          <el-menu-item index="6">
            <el-icon><icon-menu /></el-icon>
            <span>Donate</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <div>
            <el-icon @click="colpen" style="width: 20px; height: 20px" v-model="isCollapse">
            <Fold style="width: 100%; height: 100%"></Fold>
          </el-icon>
          </div>
          <div class="right">
            <el-dropdown>
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";

let isCollapse = ref(false)

const colpen = () => {
  isCollapse.value = !isCollapse.value
}

</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.el-aside {
  height: 100vh;
  background-color: #304156;
}
.el-header {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right{
    display: flex;
    align-items: center;
  }
}


.el-main {
  height: calc(100vh - 60px);
  background-color: #fff;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
