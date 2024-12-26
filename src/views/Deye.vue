<script>
import axios from "axios";

export default {
  name: "deye",
  data() {
    return {
      data: [],
      data2:[],
      date: new Date().toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-'),
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:5262/data/getData');
        this.data = response.data;

        const response2 = await axios.get('http://localhost:5262/data/getMovementData');
        this.data2 = response2.data;
        console.log(response2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>

<template>
  <div class="main">

    <div class="tableContainer">
      <div class="card">
        <h1 class="page-header">DEYE - Stock @ <a>{{date}}</a></h1>
        <div class="heading" style="display: flex; flex-direction: row;">
          <p style="margin-left: 12px"><b>Low Stock:</b></p><a class="square"></a>
          <p style="margin-left: 12px"><b>Zero Stock:</b></p><a class="square1"></a>
        </div>
      </div>

      <div class="card">
        <b-table class="table table-striped" >
          <thead class="table-header is-primary" style="background-color: darkturquoise;">
          <tr>
            <th>Item Name</th>
            <th>Main Store</th>
            <th>Seeduwa Warehouse</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in data" :class="{ 'zero-stock': item.totalStockValue === 0,'low-stock': item.totalStockValue > 0 && item.totalStockValue <= 10}" >
            <td style="text-align: left">{{ item.itemname }}</td>
            <td >{{ item.mainstores.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td>{{ item.seeduwaWarehouse.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td class="Total">{{ item.totalStockValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
          </tr>
          </tbody>
        </b-table>
      </div>
    </div>

    <div>
      <div class="table2-container ml-3">
        <div class="card">
          <h1 class="page-header">DEYE - Stock Movement </h1>
        </div>
        <div class="card">
          <b-table class="table table-striped"  style="border: 1px solid darkturquoise;">
            <thead class="table-header" style="background-color: cadetblue;">
            <tr>
              <th style="border: 1px solid darkturquoise;">Item Name</th>
              <th colspan="3" style="border: 1px solid darkturquoise;">Today</th>
              <th colspan="3" style="border: 1px solid darkturquoise;">Yesterday</th>
              <th colspan="3" style="border: 1px solid darkturquoise;">Current Month</th>
              <th colspan="3" style="border: 1px solid darkturquoise;">Last Month</th>
            </tr>
            <tr>
              <th style="border: 1px solid darkturquoise; text-align: left"></th>
              <th style="border: 1px solid darkturquoise;">GRN</th>
              <th style="border: 1px solid darkturquoise;">CRN</th>
              <th style="border: 1px solid darkturquoise;">OUT</th>

              <th style="border: 1px solid darkturquoise;">GRN</th>
              <th style="border: 1px solid darkturquoise;">CRN</th>
              <th style="border: 1px solid darkturquoise;">OUT</th>

              <th style="border: 1px solid darkturquoise;">GRN</th>
              <th style="border: 1px solid darkturquoise;">CRN</th>
              <th style="border: 1px solid darkturquoise;">OUT</th>

              <th style="border: 1px solid darkturquoise;">GRN</th>
              <th style="border: 1px solid darkturquoise;">CRN</th>
              <th style="border: 1px solid darkturquoise;">OUT</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item2 in data2">
              <td style="text-align: left; border: 1px solid darkturquoise;">{{ item2.p }}</td>
              <td style="border: 1px solid darkturquoise;">{{ item2.todayIn.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
              <td style="border: 1px solid darkturquoise;">{{ item2.todayCRN.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
              <td style="border: 1px solid darkturquoise;">{{ item2.todayOut.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>

              <td style="border: 1px solid darkturquoise;">{{ item2.yesterdayIn.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
              <td style="border: 1px solid darkturquoise;">{{ item2.yesterdayCRN.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
              <td style="border: 1px solid darkturquoise;">{{ item2.yesterdayOut.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>

              <td style="border: 1px solid darkturquoise;">{{ item2.currentMonthIn.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
              <td style="border: 1px solid darkturquoise;">{{ item2.currentMonthCRN.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
              <td style="border: 1px solid darkturquoise;">{{ item2.currentMonthOut.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>

              <td style="border: 1px solid darkturquoise;">{{ item2.prevmonthIn.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
              <td style="border: 1px solid darkturquoise;">{{ item2.postvmonthCRN.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
              <td style="border: 1px solid darkturquoise;">{{ item2.postvmonthOut.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            </tr>
            </tbody>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>