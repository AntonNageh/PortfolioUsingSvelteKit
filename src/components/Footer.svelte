<script>
    import { onMount } from 'svelte';
    
    let scrollY = 0;
    const currentYear = new Date().getFullYear();
</script>

<svelte:window bind:scrollY />

<footer class="py-16 px-4 md:px-8 border-t border-violet-950/30">
    <div class="w-full max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <!-- Brand -->
            <div class="space-y-4">
                <h3 class="text-2xl font-bold">
                    <span class="gradient-text">Anton</span> Nageh
                </h3>
                <p class="text-gray-400">
                    Front-end Developer crafting modern web experiences.
                </p>
            </div>

            <!-- Links -->
            <div class="space-y-4">
                <h4 class="font-semibold text-violet-400">Quick Links</h4>
                <nav class="flex flex-col gap-2">
                    <a href="#projects" class="text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</a>
                    <a href="#about" class="text-gray-400 hover:text-white transition-colors cursor-pointer">About</a>
                    <a href="/assets/CV.pdf" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors cursor-pointer">CV</a>
                </nav>
            </div>

            <!-- Contact -->
            <div class="space-y-4">
                <h4 class="font-semibold text-violet-400">Connect</h4>
                <div class="flex gap-4">
                    <a 
                        href="https://www.linkedin.com/in/anton-nageh-772852169"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:text-violet-400 transition-colors cursor-pointer"
                        aria-label="LinkedIn"
                    >
                        <i class="fa-brands fa-linkedin text-lg"></i>
                    </a>
                    <a 
                        href="https://github.com/AntonNageh"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:text-violet-400 transition-colors cursor-pointer"
                        aria-label="GitHub"
                    >
                        <i class="fa-brands fa-github text-lg"></i>
                    </a>
                    <a 
                        href="mailto:anton.nageh20@gmail.com"
                        class="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:text-violet-400 transition-colors cursor-pointer"
                        aria-label="Email"
                    >
                        <i class="fa-solid fa-envelope text-lg"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- Bottom -->
        <div class="pt-8 border-t border-violet-950/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Anton Nageh. All rights reserved.</p>
            <p>Built with SvelteKit, Tailwind CSS & GSAP</p>
        </div>
    </div>

    <!-- Back to Top - Only show when scrolled down -->
    {#if scrollY > 300}
        <a 
            href="#introPage"
            class="fixed bottom-8 right-8 w-12 h-12 btn-primary rounded-full flex items-center justify-center shadow-lg z-[100] cursor-pointer hover:-translate-y-1 transition-all duration-300 animate-[fadeIn_0.3s_ease-in-out]"
            aria-label="Back to top"
        >
            <i class="fa-solid fa-arrow-up"></i>
        </a>
    {/if}
</footer>

<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
