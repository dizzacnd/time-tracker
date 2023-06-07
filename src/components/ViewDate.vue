<template>
  <div class="container py-5 px-3 px-sm-0 px-lg-5">
    <div class="bg-white shadow-sm rounded py-4 px-3 px-lg-5 py-lg-5">
			<div class="d-lg-flex justify-content-between align-items-center">
        <h1 class="fw-bold fs-4 mb-0">
          <router-link to="/dashboard" class="me-2"><i class="fa-solid fa-angle-left"></i></router-link>
          Project ABC | Monday Jun 5 - Jun 11 2023
        </h1>
        <button class="btn-blue rounded-pill mt-3 mt-lg-0" data-bs-toggle="modal" data-bs-target="#addModal"><i class="fa-solid fa-plus me-1"></i> Add Time</button>
			</div>
      <div class="table-responsive-sm">
        <table class="table shadow-sm mt-4 daily">
          <thead class="text-center">
            <th>Time</th>
            <th>Description</th>
            <th>Hours</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>8:00AM - 12:10PM</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
              <td>4:10</td>
              <td>
                <div class="d-flex">
                  <button class="btn-transparent"><i class="fa-solid fa-pen-to-square me-1"></i></button>
                  <button class="btn-transparent"><i class="fa-solid fa-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1:00PM - 3:30PM</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
              <td>2:30</td>
              <td>
                <div class="d-flex">
                  <button class="btn-transparent"><i class="fa-solid fa-pen-to-square me-1"></i></button>
                  <button class="btn-transparent"><i class="fa-solid fa-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>4:00PM - 6:20PM</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
              <td>1:20</td>
              <td>
                <div class="d-flex">
                  <button class="btn-transparent"><i class="fa-solid fa-pen-to-square me-1"></i></button>
                  <button class="btn-transparent"><i class="fa-solid fa-trash"></i></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <h5 class="text-center mt-4 fw-bolder text-uppercase">Total hours: 8</h5>
      </div>
			<addModal/>
		</div>
  </div>
</template>

<script>
import addModal from "./AddModal";

export default {
  name: "ViewDate",
  components: { addModal }
};
</script>