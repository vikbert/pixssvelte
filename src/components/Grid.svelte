<div class="container">
  <div class="centered-xy my-2" />
  <div class="items">
    <slot></slot>
  </div>
</div>

<style>
  .container {
    max-width: 112rem !important;
    height: 85vh;
  }
  .items {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
</style>
