<script>
	import '../app.css'
</script>

<main class="pb-24">
	<slot />
</main>

<footer
	class="fixed backdrop-blur-lg bottom-0 left-0 w-full py-8 flex items-center justify-center 
	text-[var(--white-1)] text-[14px]">
	<span>Puedes descargar el template en</span> &nbsp;
	<a
		href="https://github.com/LucasFur7ado/comprame-un-cafe"
		target="_blank"
		class="text-[var(--accent)]">este link</a>
</footer>
