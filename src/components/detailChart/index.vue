<template>
    <div id="container"></div>
</template>

<script setup>
import * as echarts from 'echarts/core';
import { TooltipComponent, GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { computed, onMounted, watch } from 'vue';
import store from '@/store/index.js'
import { detailChart } from '@/axios/api/mainStage.js'

echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

let chartDom = null
let myChart = null

let chartData = {
    x: [],
    y: []
}

let dataRanage = computed(() => {
    return store.state.dataRanage
})
watch(dataRanage, (newVal) => {
    // 每当手动改变数据的时候带新的参数进行传参
    getData(newVal)
})

const initChart = () => {
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: chartData.x,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: chartData.y
            }
        ]
    }
    chartDom = document.getElementById('container');
    myChart = echarts.init(chartDom);
    myChart.setOption(option)
}

const getData = (ranageType) => {
    detailChart(ranageType)
        .then(res => {
            chartData.x = res.x
            chartData.y = res.y
            updateChart()
        })
}

const updateChart = () => {
    let option = {
        xAxis: [
            {
                data: chartData.x,
            }
        ],
        series: [
            {
                type: 'bar',
                data: chartData.y
            }
        ]
    }
    myChart.setOption(option)
}

onMounted(() => {
    initChart()
    // 第一次获取数据，默认手动传参week
    getData('week')
})
</script> 

<style scoped lang='less'>
#container {
    height: 100%;
    width: 100%;
}
</style>
