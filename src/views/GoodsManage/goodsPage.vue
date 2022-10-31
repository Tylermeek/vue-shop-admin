<template>
    <el-skeleton style="width: 100%" :loading="domLoading" animated>
        <template #template>
            <el-progress :percentage="percentage" :indeterminate="true" />
            <el-skeleton-item variant="text" style="width: 30%" />
            <el-skeleton-item variant="text" style="width: 50%" />
            <el-skeleton-item variant="text" style="width: 70%" />
            <el-skeleton-item variant="text" style="width: 100%" />
            <el-skeleton-item variant="text" style="width: 70%" />
        </template>
        <template #default>
            <div class="mainContainer">
                <div class="selectBox flex justify-space-between  flex-wrap gap-1">
                    <el-button v-for="button in buttons" :key="button.text" plain>{{ button.text }}
                    </el-button>
                </div>
                <el-divider />
                <el-card class="box-card" shadow="never">
                    <el-table :data="goodsList" style="width: 100%;" v-loading="dataLoading">
                        <el-table-column type="selection" width="55" />
                        <el-table-column label="商品" width="300">
                            <template #default="scope">
                                <div style="display: flex; align-items: center; justify-content: space-evenly;">
                                    <el-image style="width: 50px; height: 50px; border-radius: .0625rem;"
                                        :src="scope.row.cover" :preview-src-list="[scope.row.cover]" :initial-index="4"
                                        fit="cover" />
                                    <div class="description">
                                        <span class="title block">{{ scope.row.title }}</span>
                                        <span class="price block text-red-600">￥{{ scope.row.min_price }}
                                            <span class="text-gray-600">|
                                                ￥{{ scope.row.min_oprice }}</span>
                                        </span>
                                        <span class="category block text-gray-400">分类:{{ scope.row.category.name
                                        }}</span>
                                        <span class="createTime block text-gray-400">创建时间:{{ scope.row.create_time
                                        }}</span>
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="实际销量" width="100">
                            <template #default="scope">
                                <div style="display: flex; align-items: center; justify-content: space-evenly;">
                                    <div class="description">
                                        <span class="title block">{{ scope.row.sale_count }}</span>
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="商品状态" width="100">
                            <template #default="scope">
                                <div style="display: flex; align-items: center; justify-content: space-evenly;">
                                    <div class="description">
                                        <el-tag :type="scope.row.ischeck === 0 ? 'success' : 'danger'">
                                            {{ scope.row.ischeck === 0 ? '上架' : '仓库' }}
                                        </el-tag>
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="审核状态" width="100">
                            <template #default="scope">
                                <div style="display: flex; align-items: center; justify-content: space-evenly;">
                                    <div class="description">
                                        <div class="checkBox" v-show="scope.row.ischeck === 0">
                                            <el-button type="success" plain>审核通过</el-button>
                                            <el-button style="margin: 0;" type="danger" plain>审核拒绝</el-button>
                                        </div>
                                        <div class="checkBox" v-show="scope.row.ischeck === 1">
                                            通过
                                        </div>
                                        <div class="checkBox" v-show="scope.row.ischeck === 2">
                                            拒绝
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="总库存" width="100">
                            <template #default="scope">
                                <div style="display: flex; align-items: center; justify-content: space-evenly;">
                                    <div class="description">
                                        {{ scope.row.stock }}
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <!-- 设置minwidth 会将剩下的所有宽度都给它，以满足要求 -->
                        <el-table-column label="操作" min-width="300">
                            <template #default="scope">
                                <div class="description"
                                    style="display: flex; align-items: center; justify-content: space-evenly; width: 30%; float: right;">
                                    <el-link type="primary">修改</el-link>
                                    <el-link type="primary">商品规格</el-link>
                                    <el-link type="primary">设置轮播图</el-link>
                                    <el-link type="primary">商品详情</el-link>
                                    <el-link type="danger">删除</el-link>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
                <el-pagination small background layout="prev, pager, next" :total="50" class="mt-1 mb-1 pageControler"
                    :current-page="curPage" @update:current-page="handleChange" />
            </div>
        </template>
    </el-skeleton>
</template>

<script setup>
import '@/utils/flexible.js'
import { goodsData } from '@/axios/api/goodsManage.js'


import { onMounted, ref } from 'vue';

let domLoading = ref(false)
let dataLoading = ref(true)

const buttons = [
    { text: '全部' },
    { text: '审核中' },
    { text: '出售中' },
    { text: '已下架' },
    { text: '库存预警' },
    { text: '回收站' },
]

let goodsList = ref([])
let curPage = ref(1)

const getGoodsList = () => {
    goodsData(curPage.value, 'all')
        .then((res) => {
            goodsList.value = res.list
            if (dataLoading.value){
                dataLoading.value = !dataLoading.value
            }
        })
}

const handleChange = (item) => {
    curPage.value = item
    dataLoading.value = !dataLoading.value
    getGoodsList()
}

onMounted(() => {
    getGoodsList()
})
</script> 

<style scoped lang='less'>
.mainContainer {

    .selectBox {
        width: 30%;
        margin-top: .25rem;
        margin-left: .25rem;
    }

    .box-card {
        margin: 0 .25rem;

        // 让数据左对齐表头，原本是居中显示
        :deep(.el-scrollbar__view) {
            display: inherit !important;
        }

        :deep(.el-table__header .cell) {
            text-align: center;
        }

        .checkBox {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-content: space-between;
            flex-direction: column;
        }
    }

    .pageControler {
        justify-content: center;
    }

}
</style>
