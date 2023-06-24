<script>
	import { selected, loading, error } from '$lib/store'
	import { enhance } from '$app/forms'
	import { config } from '$lib/config'

	const handleForm = async () => {
		$loading = true
		$error = false
		return async options => {
			const { data } = options.result
			if (!data.success) {
				$loading = false
				$error = data.error
				setTimeout(() => ($error = false), 5000)
				return null
			}
			if (data?.data?.init_point) 
				window.open(data.data.init_point)
			$loading = false
		}
	}
</script>

<form
	class="flex flex-col w-full md:w-[50%] gap-2 items-start"
	use:enhance={handleForm}
	method="POST"
	action="/">
	<input
		type="hidden"
		value={$selected + 1}
		name="quantity" />
	{#if config.telegram_messages}
		<input
			type="text"
			name="name"
			placeholder="Nombre o apodo" />
		<textarea
			class="input"
			type="text"
			name="message"
			placeholder="Deja un mensaje :)" />
	{/if}
	<button class="mt-4">
		{#if $loading}
			<span class="text-[var(--accent)] text-lg"> 
				Espera unos segundos... 
			</span>
		{:else}
			<span class="text-[var(--accent)] text-lg">
				Ayudar con {config.currency_id}
				{($selected + 1) * Number(config.coffee_price)}
			</span>
		{/if}
	</button>
	{#if $error}
		<span class="text-red-400 text-lg">{$error}</span>
	{/if}
</form>
