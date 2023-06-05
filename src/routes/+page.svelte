<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1>Welcome to a vercel test about loading files in a node module.</h1>
<p>The deployed error is: Error: ENOENT: no such file or directory, open '/var/task/node_modules/security-context/contexts/security-v1.jsonld'</p>

<p>Data: {data.contexts.size}</p>
<ul>
	{#each [...data.contexts] as [key, value]}
		<li>{key} - {JSON.stringify(value)}</li>
	{/each}
</ul>
