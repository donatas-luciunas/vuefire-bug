<template>
  <div>
    <p>Expected: {{ expected }}</p>
    <p v-if="!thing">Thing not exist</p>
    <p v-else>Actual: {{ thing.ref }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thing: null,
      thingRef: window.firebase.firestore().doc("things/DLF1nEvrEeLAXisqobSe"),
      expected: "",
    };
  },

  created() {
    this.$bind("thing", this.thingRef, { maxRefDepth: 0 });

    setInterval(() => {
      if (this.expected) {
        this.thingRef.update({
          ref: null,
        });
        this.expected = "";
      } else {
        const docId = "things/SsEQz3ZHySgck5wT7Idy";
        this.thingRef.update({
          ref: window.firebase.firestore().doc(docId),
        });
        this.expected = docId;
      }
    }, 2000);
  },
};
</script>
