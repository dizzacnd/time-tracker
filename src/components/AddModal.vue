<template>
  <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title fs-5" id="addModalLabel">Add Time</h3>
        </div>
        <div class="modal-body">
          <select class="form-select mb-3" name="project" id="form-project">
            <option v-for="(project, index) in storedProjectsModal" :key="index" value="project.id" :selected="project.name==1">{{ project.name }}</option>
          </select>
          <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Task Description" id="description" rows="6" v-model="newLog.description"></textarea>
            <label for="description">Task Description</label>
          </div>
          <!-- <div class="form-floating mb-3">
            <select class="form-select" id="startTime" aria-label="Start Time">
              <option value="9:00 AM" selected>1:OO PM</option>
              <option value="9:00 AM">2:00 PM</option>
              <option value="10:00 AM">3:00 PM</option>
            </select>
            <label for="startTime">Start Time</label>
          </div> -->
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="time" placeholder="Time" v-model="newLog.time">
            <label for="time">Time</label>
          </div>
          <div class="form-floating">
            <input type="number" class="form-control" id="hours" placeholder="Hours" v-model="newLog.hours">
            <label for="hours">Hours</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-gray" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-blue px-4" @click="addTime">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  name: "addModal",
  data() {
    return {
      theModal: null,
      storedProjectsModal: {},
      storedLogsModal: {},
      newStoredLogs: {},
      date: null,
      newLog: {
        id: null,
        project_id: 1,
        week_id: null,
        description: '',
        time: '',
        hours: null,
      },
    };
  },
  mounted() {
    this.theModal = new Modal('#addModal');
    this.storedProjectsModal = JSON.parse(localStorage.getItem("projects"));
    this.storedLogsModal = JSON.parse(localStorage.getItem("logs"));

    const currentDate = new Date();
    this.date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;

    console.log(this.date)
  },
  methods: {
    addTime() {
      this.newLog.id = this.storedLogsModal.length + 1; //temporary id
      this.newLog.week_id = 3; //temporary static week_id
      this.newLog.created_at = this.date;

      this.storedLogsModal.push(this.newLog); //add new log to stored logs in local storage
      this.newStoredLogs = this.storedLogsModal;

      localStorage.setItem("logs", JSON.stringify(this.newStoredLogs)); //update data in local storage
      this.storedLogsModal = JSON.parse(localStorage.getItem("logs")); // get updated data

      this.theModal.hide();

      this.$router.go(0); //reload page
    },
  }
};
</script>
