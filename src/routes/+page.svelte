<script lang="ts">
    import "./page.css"
    import Send from "carbon-icons-svelte/lib/SendAlt.svelte";
    /** @type {import('./$types').ActionData} */
    export let form;

</script>
<div class="page">
    <img src="https://cloud-i7e0fez7u-hack-club-bot.vercel.app/0codeday-notext-white.png" height="90px" width="90px" alt="CodeDay logo">
    <div class="flex flex-col gap-1">
        {#if form?.success}
            <h1 class="text-3xl font-bold">
                Thanks for signing up! We'll be in touch soon.
            </h1>
        {:else}
            <h1 class="text-4xl font-bold">We're building this page currently.</h1>
            <p class="text-2xl font-bold">Enter your email for updates!</p>
            <form class="flex justify-center mx-2" method="POST">
                <input class="w-full rounded-l-lg" name="email" type="email">
                <button class="p-2 rounded-r-lg bg-blue-500">
                <Send size="32px"/>
                </button>
            </form>
        {/if}
    </div>
</div>