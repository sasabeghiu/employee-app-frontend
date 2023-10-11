<template>
    <div>
        <h2>Employee View</h2>
        <EmployeeTable :employees="result"></EmployeeTable>
    </div>
</template>
  
<script>
import axios from 'axios';
import EmployeeTable from '../components/EmployeeTable.vue';

export default {
    components: {
        EmployeeTable
    },
    data() {
        return {
            result: [],
        };
    },
    created() {
        this.loadEmployees();
    },
    methods: {
        loadEmployees() {
            var url = 'http://localhost:8000/api/employees';
            axios.get(url)
                .then(({ data }) => {
                    console.log(data);
                    this.result = data;
                });
        },
        // Add edit, delete, and other methods if needed
    }
};
</script>
  