
<template>
  <div class="main">
    <div class="tableContainer">
      <h1 class="page-header card">Sales Qty- Class-wise @ <a>{{date}}</a></h1>
      <div class="card">
        <b-table class="table table-striped" >
          <thead class="table-header is-primary" style="background-color: darkturquoise;">
          <tr>
            <th>Class Name</th>
            <th>Today</th>
            <th>Yesterday</th>
            <th>Current Month</th>
            <th>Last Month</th>
            <th>Previous Month</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in data" >
            <td style="text-align: left; font-weight: 600">{{ item.salesType }}</td>
            <td >{{ item.today.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td>{{ item.yesterday.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td class="Total">{{ item.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td class="Total">{{ item.lastMonth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td class="Total">{{ item.previousMonth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
          </tr>
          </tbody>
        </b-table>
      </div>
    </div>
    <div class="tableContainer">
      <h1 class="page-header card">Sales Qty- Item Type-wise @ <a>{{date}}</a></h1>
      <div class="card">
        <b-table class="table table-striped" >
          <thead class="table-header is-primary" style="background-color: darkturquoise;">
          <tr>
            <th>Item Type</th>
            <th>Today</th>
            <th>Yesterday</th>
            <th>Current Month</th>
            <th>Last Month</th>
            <th>Previous Month</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in data2" >
            <td style="text-align: left; font-weight: 600">{{ item.salesType }}</td>
            <td >{{ item.today.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td>{{ item.yesterday.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td class="Total">{{ item.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td class="Total">{{ item.lastMonth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td class="Total">{{ item.previousMonth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
          </tr>
          </tbody>
        </b-table>
      </div>
    </div>
  </div>
</template>
<style>
.main{
  display: flex;
  flex-direction: row;
}
.tableContainer{
  padding: 0rem 5rem 10rem 5rem;
}
.page-header{
  padding: 1rem 1rem 1rem 1rem;

}
th{
  border: 1px solid darkturquoise;
}
tr.zero-stock {
  background-color: lightcoral;
}
tr.low-stock {
  background-color: #e8c827;
}
.page-header{
  font-weight: bold;
  font-family:"Century Gothic",serif;
  font-size: 23px;
  margin-bottom: 12px;
}
.square{
  background-color: #e8c827;
  padding: 10px 18px 10px 18px;
  margin-left: 3px;
}
.square1{
  background-color: lightcoral;
  padding: 10px 18px 10px 18px;
  margin-left: 3px;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
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
        const response = await axios.get('http://localhost:5262/data/getSalesData');
        this.data = response.data;

        const response2 = await axios.get('http://localhost:5262/data/getSalesByItemData');
        this.data2 = response2.data;
        console.log(response2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

  },
};
</script>