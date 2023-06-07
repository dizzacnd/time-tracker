<template>
  <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title fs-5" id="addModalLabel">Add Time</h3>
        </div>
        <div class="modal-body">
          <select class="form-select mb-3" name="project">
            <option v-for="(project, index) in storedProjectsModal" :key="index" value="project.id" :selected="project.name==1">{{ project.name }}</option>
          </select>
          <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Task Description" id="description" rows="6"></textarea>
            <label for="description">Task Description</label>
          </div>
          <div class="form-floating mb-3">
            <!-- TO DO: update to time picker -->
            <select class="form-select" id="startTime" aria-label="Start Time">
              <option selected>8:OO AM</option>
              <option value="">9:00 AM</option>
              <option value="">10:00 AM</option>
            </select>
            <label for="startTime">Start Time</label>
          </div>
          <div class="form-floating">
            <input type="number" class="form-control" id="hours" placeholder="Hours">
            <label for="hours">Hours</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-gray" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-blue px-4">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addModal",
  data() {
    return {
      storedProjectsModal: {},
    };
  },
  mounted() {
    this.storedProjectsModal = JSON.parse(localStorage.getItem("projects"));
  },
};
</script>
