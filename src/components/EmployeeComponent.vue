<template>
    <div>
        <h2>Employee Registration</h2>
        <form @submit.prevent="save">
            <div class="form-group">
                <label>Employee name: </label>
                <input type="text" v-model="employee.name" class="form-control" placeholder="Employee name">
            </div>

            <div class="form-group">
                <label>Employee email: </label>
                <input type="text" v-model="employee.email" class="form-control" placeholder="Employee email">
            </div>

            <div class="form-group">
                <label>Mobile number: </label>
                <input type="text" v-model="employee.mobile" class="form-control" placeholder="Employee mobile">
            </div>

            <button type="submit" class="btn btn-primary saveBtn">Save</button>
        </form>

        <h2>Employee View</h2>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Employee Email</th>
                    <th scope="col">Employee Mobile</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in result" v-bind:key="employee.id">
                    <td>{{ employee.id }}</td>
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.email }}</td>
                    <td>{{ employee.mobile }}</td>
                    <td>
                        <button type="button" class="btn btn-warning" @click="edit(employee)">Edit</button>
                        <button type="button" class="btn btn-danger" @click="remove(employee)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'EmployeeComponent',
    data() {
        return {
            result: {},
            employee: {
                id: '',
                name: '',
                email: '',
                mobile: ''
            }
        }
    },
    created() {
        this.EmployeeLoad();
    },
    mounted() {
        console.log("mounted() called...");
    },
    methods: {
        EmployeeLoad() {
            var url = 'http://localhost:8000/api/employees';
            axios.get(url)
                .then(
                    ({ data }) => {
                        console.log(data);
                        this.result = data;
                    }
                );
        },
        save() {
            if (this.employee.id == '') {
                this.saveData();
            } else {
                this.updateData();
            }
        },
        saveData() {
            axios.post('http://localhost:8000/api/employees', this.employee)
                .then(() => {
                    alert("Employee saved successfully");
                    this.EmployeeLoad();
                    this.employee.name = '';
                    this.employee.email = '';
                    this.employee.mobile = '';
                    this.id = '';
                }
                )
        },
        edit(employee) {
            this.employee = employee;
        },
        updateData() {
            var editUrl = 'http://localhost:8000/api/employees/' + this.employee.id;
            axios.put(editUrl, this.employee)
                .then(() => {
                    this.employee.name = '';
                    this.employee.email = '';
                    this.employee.mobile = '';
                    this.id = '';
                    alert("Employee updated successfully");
                    this.EmployeeLoad();
                }
                );
        },
        remove(employee) {
            var deleteUrl = 'http://localhost:8000/api/employees/' + employee.id;
            axios.delete(deleteUrl);
            alert("Employee deleted successfully");
            this.EmployeeLoad();
        }
    }
}
</script>

<style>
button {
    margin-right: 10px;
}

.saveBtn {
    width: 100px;
    margin-left: 500px;
}
</style>