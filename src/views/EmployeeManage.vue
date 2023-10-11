<template>
    <div>
        <h2>Employee Registration</h2>
        <EmployeeForm :employee="employee" :actionLabel="actionLabel" @save="saveEmployee" @update="updateEmployee">
        </EmployeeForm>

        <h2>Employee View</h2>
        <EmployeeTable :employees="result" @edit="editEmployee" @delete="deleteEmployee"></EmployeeTable>
    </div>
</template>

<script>
import axios from 'axios';
import EmployeeForm from '../components/EmployeeForm.vue';
import EmployeeTable from '../components/EmployeeTable.vue';

export default {
    name: 'EmployeeComponent',
    components: {
        EmployeeForm,
        EmployeeTable,
    },
    data() {
        return {
            result: [],
            employee: {
                id: '',
                name: '',
                email: '',
                mobile: ''
            },
        };
    },
    computed: {
        actionLabel() {
            return this.employee.id ? "Update" : "Save";
        },
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
        saveEmployee(employee) {
            axios.post('http://localhost:8000/api/employees', employee)
                .then(() => {
                    alert("Employee saved successfully");
                    this.loadEmployees();
                    employee.name = '';
                    employee.email = '';
                    employee.mobile = '';
                    employee.id = '';
                });
        },
        editEmployee(employee) {
            this.employee = { ...employee };
        },
        updateEmployee(employee) {
            var editUrl = 'http://localhost:8000/api/employees/' + employee.id;
            axios.put(editUrl, employee)
                .then(() => {
                    employee.name = '';
                    employee.email = '';
                    employee.mobile = '';
                    employee.id = '';
                    alert("Employee updated successfully");
                    this.loadEmployees();
                });
        },
        deleteEmployee(employee) {
            var deleteUrl = 'http://localhost:8000/api/employees/' + employee.id;
            axios.delete(deleteUrl);
            alert("Employee deleted successfully");
            this.loadEmployees();
        },
    },
};
</script>

<style>
h2 {
    text-align: center;
}
</style>