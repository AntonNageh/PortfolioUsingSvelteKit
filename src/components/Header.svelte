<script>
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    
    export let y;
    
    let tabs = [
        { name: 'Projects', link: '#projects' },
        { name: 'About', link: '#about' }
    ];

    let mobileMenuOpen = false;
    let headerRef;

    onMount(() => {
        // GSAP entrance animation
        gsap.from(headerRef, {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
</script>

<header 
    bind:this={headerRef}
    class="fixed top-0 left-0 right-0 z-[100] px-6 md:px-8 py-4 transition-all duration-500"
    class:glass={y > 50}
    class:shadow-glow={y > 50}
>
    <nav class="w-full flex items-center justify-between">
        <!-- Logo -->
        <a 
            href="#introPage" 
            class="font-bold text-xl md:text-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
        >
            <span class="gradient-text">Anton</span> Nageh
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8 lg:gap-12">
            {#each tabs as tab, i}
                <a 
                    href={tab.link} 
                    class="relative font-medium text-lg hover:text-violet-400 transition-colors cursor-pointer group"
                >
                    {tab.name}
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
            {/each}
            <a 
                href="https://www.linkedin.com/in/anton-nageh-772852169" 
                target="_blank"
                rel="noopener noreferrer"
                class="px-8 py-3 btn-primary rounded-lg font-semibold cursor-pointer hover:scale-105 transition-transform duration-300"
            >
                Get in Touch
            </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
            on:click={() => mobileMenuOpen = !mobileMenuOpen}
            class="md:hidden p-2 hover:text-violet-400 transition-colors cursor-pointer"
            aria-label="Toggle menu"
        >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {#if mobileMenuOpen}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                {:else}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                {/if}
            </svg>
        </button>
    </nav>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
        <div class="md:hidden mt-4 bg-slate-900 px-6 pb-4 border-t border-violet-950/30 pt-4">
            <div class="flex flex-col gap-3">
                {#each tabs as tab}
                    <a 
                        href={tab.link}
                        on:click={() => mobileMenuOpen = false}
                        class="px-4 py-2 hover:text-violet-400 transition-colors cursor-pointer"
                    >
                        {tab.name}
                    </a>
                {/each}
                <a 
                    href="https://www.linkedin.com/in/anton-nageh-772852169" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 btn-primary rounded-lg font-semibold text-center cursor-pointer"
                >
                    Get in Touch
                </a>
            </div>
        </div>
    {/if}
</header>
