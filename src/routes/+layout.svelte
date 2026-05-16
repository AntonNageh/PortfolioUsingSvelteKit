<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    
    let y = 0;
</script>

<div class="relative flex flex-col w-full min-h-screen">
    <Header {y} />
    <slot />
    <Footer />
</div>

<svelte:window bind:scrollY={y} />
