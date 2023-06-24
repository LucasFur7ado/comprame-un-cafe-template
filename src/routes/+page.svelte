<script>
	import { config } from '$lib/config'
	import Contact from '$lib/components/Contact.svelte'
	import CoffeSvg from '$lib/components/icons/CoffeSvg.js'
	import SubmitForm from '$lib/components/SubmitForm.svelte'
	import QuantitySelector from '$lib/components/QuantitySelector.svelte'
</script>

<svelte:head>
	<title>Comprame un café</title>
</svelte:head>

<section>
	<div class="flex-col md:flex-row flex md:items-center justify-center w-fit gap-4 pb-6">
		<h1>{config.title}</h1>
		<span class="hidden md:flex">
			{@html CoffeSvg}
		</span>
	</div>
	<p class="w-full md:w-[50%] text-lg">
		{@html config.description}
	</p>
	<Contact />
	<QuantitySelector />
	<SubmitForm />
</section>
