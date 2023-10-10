<template>
    <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Employee Email</th>
                <th scope="col">Employee Mobile Number</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="employee in employees" :key="employee.id">
                <td>{{ employee.id }}</td>
                <td>{{ employee.name }}</td>
                <td>{{ employee.email }}</td>
                <td>{{ employee.mobile }}</td>
                <td>
                    <button type="button" class="btn btn-warning" @click="editEmployee(employee)">Edit</button>
                    <button type="button" class="btn btn-danger" @click="deleteEmployee(employee)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        employees: Array,
    },
    methods: {
        editEmployee(employee) {
            this.$emit("edit", employee);
        },
        deleteEmployee(employee) {
            this.$emit("delete", employee);
        },
    },
};
</script>

<style>
button {
    margin-right: 10px;
    width: 100px;
}

td,
th {
    text-align: center;
}
</style>