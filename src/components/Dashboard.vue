<template>
  <div class="container py-5 px-3 px-sm-0 px-lg-5">
    <h1 class="fw-bold fs-2 mb-4 text-uppercase">My Timesheet</h1>
    <div class="bg-white shadow-sm rounded py-4 px-3 px-lg-5 py-lg-5">
      <div class="d-md-flex align-items-center justify-content-between">
        <div class="col-lg-9 col-xl-6 d-md-flex">
          <select class="form-select">
            <option value="ABC" selected>Project ABC</option>
            <option value="DEF">Project DEF</option>
            <option value="HIJ">Project HIJ</option>
            <option value="KLM">Project KLM</option>
          </select>
          <div class="d-flex col-12 col-md-6 ms-md-3 mt-3 mt-md-0">
            <select class="form-select me-3">
              <option value="">May 15 - May 21</option>
              <option value="">May 22 - May 28</option>
              <option value="">May 29 - Jun 4</option>
              <option value="" selected>Jun 5 - Jun 11</option>
            </select>
            <select class="form-select year">
              <option value="">2022</option>
              <option value="" selected>2023</option>
            </select>
          </div>
        </div>
        <button class="btn-blue rounded-pill mt-3 mt-md-0" data-bs-toggle="modal" data-bs-target="#addModal"><i class="fa-solid fa-plus me-1"></i> Add Time</button>
      </div>
      <table class="table shadow-sm mt-4 weekly">
        <thead>
          <tr>
            <th>Date</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <router-link to="/view" class="">Monday, June 5</router-link>
            </td>
            <td>8</td>
          </tr>
          <tr>
            <td>
              <router-link to="/view" class="">Tuesday, June 6</router-link>
            </td>
            <td>8</td>
          </tr>
          <tr class="table-active">
            <td>
              <router-link to="/view" class="">Wednesday, June 7</router-link>
            </td>
            <td>0</td>
          </tr>
          <tr>
            <td>Thursday, June 8</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Friday, June 9</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Saturday, June 10</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Sunday, June 11</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <h5 class="text-center mt-4 fw-bolder text-uppercase">Total hours: 16</h5>
    </div>
    <addModal/>
  </div>
</template>

<script>
import addModal from "./AddModal";

export default {
  name: "dashboardPage",
  components: { addModal }
};
</script>