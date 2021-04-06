import Collape from './collape.vue'
Collape.install = Vue => Vue.component(Collape.name, Collape)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Collape);
}

export default Collape