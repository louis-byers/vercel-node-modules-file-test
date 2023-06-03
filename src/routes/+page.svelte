<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1>Welcome to a vercel test about loading files in a node module.</h1>
<p>THe error is:</p>

<p>Data: {data.contexts.size}</p>
<ul>
	{#each [...data.contexts] as [key, value]}
		<li>{key} - {JSON.stringify(value)}</li>
	{/each}
</ul>
