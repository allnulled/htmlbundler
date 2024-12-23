(function(factory) {
  const mod = factory();
  if(typeof window !== 'undefined') {
    window["example2app"] = mod;
  }
  if(typeof global !== 'undefined') {
    global["example2app"] = mod;
  }
})(function() {
Vue.component("page-1", {
  name: "page-1",
  props: {},
  template: `<div class="page-1">
    <div>Contents of component on page 1</div>
</div>`,
  methods: {

  },
  mounted() {

  },
  unmounted() {

  },

})
Vue.component("page-2", {
  name: "page-2",
  props: {},
  template: `<div class="page-2">
    <div>Contents of component on page 2</div>
</div>`,
  methods: {

  },
  mounted() {

  },
  unmounted() {

  },

})
Vue.component("page-3", {
  name: "page-3",
  props: {},
  template: `<div class="page-3">
    <div>Contents of component on page 3</div>
</div>`,
  methods: {

  },
  mounted() {

  },
  unmounted() {

  },

})
});
