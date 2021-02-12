<script>
	import FooterShape from './FooterShape.svelte';
	export let githubAuthor = '';
	export let githubProject = '';

	let githubRepoPath = githubAuthor + '/' + githubProject;
	let githubRepoUri = 'https://github.com/' + githubRepoPath;
</script>

<FooterShape>
	<div class="space-between">
		<div class="repository">
			<p>Vikbert ® 2021</p>
			<a href={githubRepoUri}>
				<img
					src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square"
					alt="MIT License"
				/>
			</a>
			<a href={githubRepoUri}>
				<img
					src={'https://img.shields.io/github/last-commit/' +
						githubRepoPath +
						'?color=orange&style=flat-square'}
					alt="Last Commit"
				/>
			</a>
		</div>
		<div class="techniques">
			<a href="https://vikbert.github.io/pixss/">
				<img
					src="https://raw.githubusercontent.com/vikbert/vikbert.github.io/master/pixss.png"
					alt="pixss"
					class="pixss"
				/>
			</a>
			<a href="https://svelte.dev/">
				<img
					src="https://raw.githubusercontent.com/vikbert/vikbert.github.io/master/svelte.png"
					alt="svelte"
					width="120"
				/>
      </a>
		</div>
	</div>
</FooterShape>

<style>
	.repository p {
		margin-bottom: 0.5rem;
	}

	img.pixss {
		width: 36px;
		filter: invert(1);
	}
</style>
