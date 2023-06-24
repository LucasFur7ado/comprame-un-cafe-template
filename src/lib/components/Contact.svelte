<script>
	import { config } from '$lib/config'
</script>

<div class="flex items-center gap-2 mb-4 mt-8">
	{#each config.contact as contact}
		<a
			href={contact.link}
			target="_blank">
			{@html contact.icon}
		</a>
	{/each}
</div>
