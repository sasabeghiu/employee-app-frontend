<template>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-dark">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap" />
            </svg>
            <span class="fs-4 text-white">Employee Application</span>
        </a>

        <ul class="nav nav-pills">
            <li class="nav-item">
                <RouterLink to="/" class="nav-link active" aria-current="page">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/employeesform" class="nav-link">Add new employee</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/employeesview" class="nav-link">View all employees</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/employees" class="nav-link">Manage Employees</RouterLink>
            </li>
        </ul>
    </header>
</template>

