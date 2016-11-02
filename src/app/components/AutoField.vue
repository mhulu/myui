<template>
  <div><slot></slot></div>
</template>
<script>
  export default {
    props: ['value'],
    methods: {
      bridgeInput (key, event) {
        this.$emit('input', Object.assign({}, this.value, {
          [key]: event.target.value
        }))
      },
      render (h) {
        const slots = this.$slots && this.$slots.default
        if (!slots) {
          return h()
        }
        slots.forEach(s => {
          if (!s.data) {
            s.data = {}
          }
          s.data.on = {
            input: event => this.bridgeInput(event.target.getAttribute('name'), event)
          }
        })
        return h('div', slots)
      }
    }
  }
</script>