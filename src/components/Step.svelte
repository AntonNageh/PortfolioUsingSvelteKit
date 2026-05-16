<script>
    export let project;
</script>

<article class="h-full">
    <a 
        href={project.href} 
        target="_blank" 
        rel="noopener noreferrer"
        class="block h-full group"
    >
        <div class="h-full glass-card p-6 rounded-2xl hover:shadow-glow-hover transition-smooth cursor-pointer">
            <!-- Icon -->
            <div class="w-14 h-14 mb-4 bg-violet-600/20 rounded-xl flex items-center justify-center group-hover:bg-violet-600/30 transition-smooth group-hover:scale-110">
                <i class="{project.icon} text-2xl text-violet-400"></i>
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold mb-3 group-hover:text-violet-400 transition-smooth">
                {project.name}
            </h3>
            
            <!-- Description -->
            <p class="text-gray-400 leading-relaxed mb-4 text-sm">
                {project.description}
            </p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
                {#each project.tags as tag}
                    <span class="px-3 py-1 text-xs bg-violet-600/10 text-violet-300 rounded-full border border-violet-600/20">
                        {tag}
                    </span>
                {/each}
            </div>
            
            <!-- CTA -->
            <div class="flex items-center gap-2 text-violet-400 font-medium text-sm group-hover:gap-3 transition-all">
                <span>View Project</span>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    </a>
</article>
