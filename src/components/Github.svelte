<script>
  export let width = 30;
	export let githubAuthor = '';
	export let githubProject = '';

	let info = [githubAuthor, githubProject];
</script>

<div class="github">
	<a href={'https://github.com/' + info.join('/')}>
		<span
			class="iconify"
			data-icon="ant-design:github-outlined"
			data-inline="false"
			{width}
		/>
	</a>
</div>

<style>
	a {
		line-height: 1.5rem;
	}
</style>
