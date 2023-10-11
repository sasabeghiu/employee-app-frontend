<template>
    <form @submit.prevent="handleSubmit()">
        <div class="form-group">
            <label>Employee name: </label>
            <input type="text" v-model="employeeCopy.name" class="form-control" placeholder="Employee name">
        </div>

        <div class="form-group">
            <label>Employee email: </label>
            <input type="text" v-model="employeeCopy.email" class="form-control" placeholder="Employee email">
        </div>

        <div class="form-group">
            <label>Mobile number: </label>
            <input type="text" v-model="employeeCopy.mobile" class="form-control" placeholder="Employee mobile">
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary saveBtn">{{ actionLabel }}</button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        employee: Object,
        actionLabel: String,
    },
    data() {
        return {
            employeeCopy: { ...this.employee }, //create a copy of the prop to modify it
        };
    },
    methods: {
        handleSubmit() {
            if (this.actionLabel === "Save") {
                this.$emit("save", this.employeeCopy);
            } else {
                this.$emit("update", this.employeeCopy);
            }
        },
    },
    watch: {
        employee: {
            handler() {
                this.employeeCopy = { ...this.employee };
            },
            deep: true,
        },
    },
};
</script>

<style>
/* .saveBtn {
    width: 200px;
    margin: 10px 0 10px 550px;
} */

.form-control {
    margin-bottom: 10px;
}
</style>