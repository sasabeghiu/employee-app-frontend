<template>
    <div>
        <h2>Employee Registration</h2>
        <EmployeeForm :employee="employee" actionLabel="Save" @save="saveEmployee">
        </EmployeeForm>
    </div>
</template>
  
<script>
import axios from 'axios';
import EmployeeForm from '../components/EmployeeForm.vue';

export default {
    components: {
        EmployeeForm
    },
    data() {
        return {
            employee: {
                id: '',
                name: '',
                email: '',
                mobile: ''
            },
        };
    },
    methods: {
        saveEmployee(employee) {
            axios.post('http://localhost:8000/api/employees', employee)
                .then(() => {
                    alert("Employee saved successfully");
                    employee.name = '';
                    employee.email = '';
                    employee.mobile = '';
                    employee.id = '';
                });
        },
    }
};
</script>

<style>
</style>
  