<template>
  <div class="text-center">
    <h1
      id="current-time"
      class="bordered-text"
    >
      {{ currentTime }}
    </h1>
    <h2
      id="current-date"
      class="bordered-text"
    >
      {{ currentDate }}
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: '',
      currentDate: '',
    };
  },
  mounted() {
    this.updateDateTime();

    this.timer = setInterval(() => {
      this.updateDateTime();
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = String(now.getMinutes()).padEnd(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const twelveHourFormat = hours % 12 || 12;

      // Update the currentTime data property with the current time
      this.currentTime = `${twelveHourFormat}:${minutes} ${ampm}`;

      // Update the currentDate data property with the current date
      const options = { weekday: 'long', day: 'numeric', month: 'long' };
      this.currentDate = now.toLocaleDateString(undefined, options);

      // Add the "th" suffix to the day number (e.g., 1st, 2nd, 3rd, 4th, etc.)
      const day = now.getDate();
      const daySuffix = this.getDayNumberSuffix(day);
      this.currentDate = this.currentDate.replace(/\b\d+\b/, day + daySuffix);
    },
    getDayNumberSuffix(day) {
      if (day >= 11 && day <= 13) {
        return 'th';
      }
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    },
  },
};
</script>

<style>
  #current-time {
    font-size: 16vh;
    color: #fff;
  }
  #current-date {
    font-size: 8vh;
    color: #fff;
  }
</style>
