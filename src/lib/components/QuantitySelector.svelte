<script>
	import { selected } from '$lib/store.js'
</script>

<div class="my-8 flex flex-col gap-8">
	<span class="font-[main] text-[22px]">Cantidad de cafés</span>
	<div class="flex items-center gap-2 w-fit flex-wrap">
		{#each new Array(5) as q, index}
			<div
				on:keyup={null}
				on:click={() => ($selected = index)}
				class:selected={$selected == index}
				class="border-[1px] rounded-lg border-[var(--white-1)] p-4
				w-16 aspect-square flex items-center justify-center font-[main]
				text-2xl relative hover:bg-[var(--white-transparent)] cursor-pointer
				duration-300">
				x{index + 1}
			</div>
		{/each}
	</div>
</div>

<style>
	.selected {
		border: 1px solid var(--accent);
		background-color: var(--accent-transparent);
	}

	.selected:hover {
		background-color: var(--accent-transparent);
	}
</style>
