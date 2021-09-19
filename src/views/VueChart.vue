<template>
  <section class="container">
    <h1>Weekly Retention Curves - Onboarding Flow</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
       <line-chart
                v-if="loaded"
                :chartdata="chartdata"
                :options="options"/>
      </div>
    
    </div>
    
  </section>
</template>



<script>
    
    import LineChart from "@/components/LineChart";
    export default {
        name: 'LineChartContainer',
        components: { LineChart },
        data: () => ({
            loaded: false,
            options: null,
            chartdata: null
        }),
        async mounted () {
            this.loaded = false;
            try {
                let response = await fetch(process.env.VUE_APP_API_URL+'chart/onboard');
                let data = await response.json()

                this.chartdata = data.chartdata;
                this.options = data.options;
                this.loaded = true;
            } catch (e) {
                console.error(e)
            }
        }
    }
</script>
<style>
.container{
  margin:20px 0 0 0;
}
.columns{
  width:40%;
  margin:auto;
}
h1{
  color: #232323;
}
</style>