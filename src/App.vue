<template>
  <div>
    <p>Expected: {{ expected }}</p>
    <p v-if="thing">Actual: {{ thing.ref }}</p>
    <p v-if="thingDeep">
      Actual deep: {{ thingDeep.ref && "things/" + thingDeep.ref.id }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thing: null,
      thingDeep: null,
      thingRef: window.firebase.firestore().doc("things/DLF1nEvrEeLAXisqobSe"),
      expected: "",
    };
  },

  created() {
    this.$bind("thing", this.thingRef, { maxRefDepth: 0 });
    this.$bind("thingDeep", this.thingRef, { maxRefDepth: 1 });

    setInterval(async () => {
      if (this.expected) {
        await this.thingRef.update({
          ref: null,
        });
        this.expected = "";
      } else {
        const docId = "things/SsEQz3ZHySgck5wT7Idy";
        await this.thingRef.update({
          ref: window.firebase.firestore().doc(docId),
        });
        this.expected = docId;
      }
    }, 3000);
  },
};
</script>
