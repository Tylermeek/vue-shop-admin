<template>
    <el-skeleton style="width: 100%" :loading="isReady" animated>
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
                <div class="firstLine">
                    <div class="box" v-for="item in firstLineData" :key="item.title" :index="item.title">
                        <el-card class="box-card" shadow="hover">
                            <template #header>
                                <div class="card-header">
                                    <span>{{ item.title }}</span>
                                    <el-tag class="ml-2" :type="item.unitType">{{ item.unit }}</el-tag>
                                </div>
                            </template>
                            <div class="value font-sans text-gray-500 font-bold">{{ item.value }}</div>
                            <el-divider />
                            <div class="sub text-gray-500">
                                <span>{{ item.subTitle }}</span>
                                <span>{{ item.subValue }}</span>
                            </div>
                        </el-card>
                    </div>
                </div>
                <div class="secondLine">
                    <div class="box" v-for="item in secondLineData" :key="item.title" :index="item.title">
                        <el-card class="box-card" shadow="hover">
                            <div class="main text-gray-500">
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-log--"></use>
                                    </svg>
                                </span>
                                <span>{{ item.title }}</span>
                            </div>
                        </el-card>
                    </div>
                </div>
                <div class="thirdLine">
                    <div class="chart">
                        <el-card class="box-card" shadow="never">
                            <template #header>
                                <div class="card-header">
                                    <span>订单详情</span>
                                    <span>
                                        <el-button type="primary" plain @click="changeData('month')">近一个月</el-button>
                                        <el-button type="primary" plain @click="changeData('week')">近一周</el-button>
                                        <el-button type="primary" plain @click="changeData('hour')">近24小时</el-button>
                                    </span>
                                </div>
                            </template>
                            <div class="sub text-gray-500">
                                <DetailChart :dataRanage=dataRanage></DetailChart>
                            </div>
                        </el-card>
                    </div>
                    <div class="rightBox">
                        <el-card class="box-cardt" shadow="never">
                            <template #header>
                                <div class="card-header">
                                    <span>店铺及商品提示</span>
                                    <span>
                                        <el-tag class="ml-2" type="danger">店铺及商品提示</el-tag>
                                    </span>
                                </div>
                            </template>
                            <div class="sub ">
                                <el-card class=" border-0 bg-light-400" shadow="hover"
                                    v-for="item in GoodsnOrders.goods" :key="item.label" :index="item.label">
                                    <span class="font-bold">{{ item.label }}</span>
                                    <span class="text-gray-600">{{ item.value }}</span>
                                </el-card>
                            </div>
                        </el-card>
                        <el-card class="box-cardb" shadow="never">
                            <template #header>
                                <div class="card-header">
                                    <span>交易提示</span>
                                    <span>
                                        <el-tag class="ml-2" type="danger">需要立即处理的交易订单</el-tag>
                                    </span>
                                </div>
                            </template>
                            <div class="sub">
                                <el-card class="border-0 bg-light-400" shadow="hover" v-for="item in GoodsnOrders.order"
                                    :key="item.label" :index="item.label">
                                    <span class="font-bold">{{ item.label }}</span>
                                    <span class="text-gray-600">{{ item.value }}</span>
                                </el-card>

                            </div>
                        </el-card>
                    </div>
                </div>
            </div>
        </template>
    </el-skeleton>
</template>

<script setup>
import { firstLine, dataShow } from '@/axios/api/mainStage.js'
import { onMounted, reactive, ref } from 'vue';
import DetailChart from '../../components/detailChart/index.vue';
import store from '@/store/index.js'
import '@/utils/flexible.js'

let firstLineData = reactive([])

let secondLineData = reactive([
    {
        title: '用户',
        icon: ''
    },
    {
        title: '商品',
        icon: ''
    },
    {
        title: '订单',
        icon: ''
    },
    {
        title: '评价',
        icon: ''
    },
    {
        title: '图库',
        icon: ''
    },
    {
        title: '公告',
        icon: ''
    },
    {
        title: '配置',
        icon: ''
    },
    {
        title: '优惠券',
        icon: ''
    }
])

let GoodsnOrders = reactive({
    'goods': [],
    'order': []
})

let dataRanage = ref('week')
let isReady = ref(true)

const getData = () => {
    firstLine()
        .then(res => {
            let length = res.panels.length
            for (let i = 0; i < length; i++) {
                let obj = new Object
                obj.title = res.panels[i].title
                obj.unit = res.panels[i].unit
                obj.value = res.panels[i].value
                obj.subTitle = res.panels[i].subTitle
                obj.subValue = res.panels[i].subValue
                obj.unitType = res.panels[i].unitColor
                firstLineData.push(obj)
                obj = null
            }
        })
    dataShow()
        .then(res => {
            GoodsnOrders.goods = res.goods
            GoodsnOrders.order = res.order
            isReady.value = false
        })

}

const changeData = (changeType) => {
    store.commit('changeRanage', changeType)
}

onMounted(() => {
    getData()
})
</script> 

<style scoped lang='less'>
.mainContainer {
    height: 100%;

    .firstLine {
        width: 100%;
        height: 2.5rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        // 让卡片高度撑满
        :deep(.el-card) {
            height: 100%;
        }


        .box {
            height: 100%;
            flex: 1;
            margin: 0 .125rem;

            .card-header {
                height: .5rem;
                font-size: .175rem;
                line-height: .5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .value {
                height: .45rem;
                width: 100%;
                font-size: .375rem;
                font-weight: 700;
                line-height: .45rem;
                text-align: left;
            }

            :deep(.el-divider--horizontal) {
                height: auto;
            }

            .sub {
                height: .45rem;
                width: 100%;
                line-height: .45rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }

    .secondLine {
        width: 100%;
        height: 1.0625rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: .25rem;

        :deep(.el-card) {
            height: 100%;
        }

        .box {
            height: 100%;
            flex: 1;
            margin: 0 .125rem;

            .main {
                height: 0.9rem;
            }

            span {
                display: block;
                text-align: center;
                line-height: 0.45rem;

                .icon {
                    width: 100%;
                    font-size: .225rem;
                    line-height: .45rem;
                }
            }
        }
    }

    .thirdLine {

        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: .25rem;

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }


        :deep(.el-card) {
            height: 100%;
        }

        .card-header {
            height: .3rem;
            text-align: left;
        }

        .chart {
            flex: 1;
            height: 100%;
            margin: 0 .125rem;

            .sub {
                width: 100%;
                height: 4.0rem;
            }
        }

        .rightBox {
            flex: 1;
            height: 100%;
            margin: 0 .125rem;

            .box-cardt {
                height: 2.4375rem;
                margin-bottom: .125rem;
            }

            .box-cardb {
                height: 2.4375rem;
            }

            .sub {
                height: 1.2rem;
                display: flex;
                justify-content: space-evenly;
                align-items: center;

                .el-card {
                    flex: 1;
                    margin: 0 .125rem;
                }

                span {
                    display: block;
                    align-items: center;
                    line-height: 0.4rem;
                }
            }
        }
    }
}
</style>
