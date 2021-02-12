<script>
	import { Footer } from './components';
	import { Github } from './components';
</script>

<style>
	:global(body) {
		padding: 0 !important;
		margin: 0 !important;
	}
	.wrapper {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
	}
</style>

<div class="container">
  <Github githubAuthor='vikbert' githubProject='pixssvelte' width=30/>
</div>
<div class="wrapper">
  <Footer githubAuthor='vikbert' githubProject='vikbert.github.io'/>
</div>
