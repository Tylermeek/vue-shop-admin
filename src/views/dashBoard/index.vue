<template>
    <Scale>
        <div class="common-layout">
            <el-container>
                <el-header>
                    <Header></Header>
                </el-header>
                <el-container>
                    <el-aside width="200px">
                        <Aside></Aside>
                    </el-aside>
                    <el-main>Main</el-main>
                </el-container>
            </el-container>
        </div>
    </Scale>
</template>

<script>
import Header from '../../components/Header/index.vue';
import Aside from '../../components/Aside/index.vue';
import Scale from '../../components/scale.vue';

export default {
    // 组件名称
    name: "dashBoard",
    components: { Header, Aside, Scale }
}
</script> 

<style scoped lang='scss'>
.common-layout {
    min-height: 1030px;
    width: 1440px;
}
</style>
