import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-lg sm:text-xl md:text-2xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-between gap-4 items-center" data-svelte-h="svelte-m0eu2w"><div class="ml-auto mt-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:w-full after:h-full after:duration-300 after:rounded-full after:bg-white hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-4 p-2">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Perfumes App",
      icon: "fa-solid fa-heart",
      href: "https://perfumesapp.vercel.app"
    },
    {
      name: "Graduation Project",
      icon: "fa-solid fa-user-astronaut",
      href: "https://iaetsatellite.vercel.app/"
    },
    {
      name: "Books App Store",
      icon: "fa-solid fa-basket-shopping",
      href: "https://anton-mybookstore.vercel.app/"
    },
    {
      name: "Recent Portfolio (Slower)",
      icon: "fa-solid fa-user",
      href: "https://portfoliootemplate.vercel.app/"
    },
    {
      name: "Hotels Reservation App",
      icon: "fa-solid fa-hotel",
      href: "#bla1"
    }
  ];
  let benefits = [
    {
      name: "a self taught developer",
      description: "As a self-taught developer, I bring a relentless commitment to mastering my craft. I am dedicated to crafting innovative solutions and constantly enhancing my technical prowess to conquer even the most intricate challenges."
    },
    {
      name: "a product design and UX finatic",
      description: "My passion for product design and obsession with user experience drive me to create exceptional, user-centric solutions. I'm dedicated to crafting designs that not only captivate but also seamlessly engage your audience."
    },
    {
      name: "an excellent communicator",
      description: "Communication is at the heart of success. I possess the art of conveying complex ideas with eloquence and precision. Your vision will not only be understood but articulated effectively, ensuring the seamless realization of your projects. Let's embark on a journey of innovation and excellence together."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-exube5"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! <br> I&#39;m <span class="poppins text-violet-400">Anton</span> Nageh<br>
                Front-end <span class="poppins text-violet-400">developer.</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="text-violet-400">favorite tech</span> includes Javascript 
                (React/vite.js or SvelteKit), Tailwindcss, Bootstrap, Material UI, R3F (React Three Fiber);</p> <a class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" href="https://www.linkedin.com/in/anton-nageh-772852169" target="_blank"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in Touch! →</h4></a></div> <div class="relative shadow-2xl grid place-items-center"> <img${add_attribute("src", "images/profile.webp", 0)} alt="Profile image" class="object-cover z-[2] md:max-h-[80vh] md:h-[80vh] h-[60vh] rounded-[1.7rem] max-h-[60vh]"></div></section> <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-52hvgk"><h6 class="text-lg sm:text-xl md:text-2xl">A few of my creatives endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3></div> <a href="/assets/CV.pdf" id="download-btn" sandbox="allow-downloads" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-14 hover:border-violet-700 duration-200" data-svelte-h="svelte-bogh6u"><i class="fa-regular fa-circle-play"></i> <p>My CV</p></a> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 lg:gap-y-16">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p class="mt-3" data-svelte-h="svelte-1c50ld1">Embark on a journey of <strong class="text-violet-400">seamless</strong> 
                    travel planning with our bespoke <strong class="text-violet-400">Booking App</strong>.<br>
                    From luxurious getaways to budget-friendly stays, 
                    we craft <strong class="text-violet-400">solutions </strong>for every traveler.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p class="mt-3" data-svelte-h="svelte-1repvdo">Imagine a world where you can <strong class="text-violet-400">explore</strong> distant planets, <br>
                    their secrets unveiled by a <strong class="text-violet-400">Satellite</strong> and <strong class="text-violet-400">Rover</strong>. <br>
                    My graduation project takes you to the <strong class="text-violet-400">stars</strong>.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p class="mt-3" data-svelte-h="svelte-15exr2d">The magic of reading is at your <strong class="text-violet-400">fingertips</strong>.<br> <strong class="text-violet-400">Immerse</strong> yourself in stories that transport you to far-off lands, <br>
                    Unleash your inner <strong class="text-violet-400">bookworm</strong> today!</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[3] }, {}, {
    default: () => {
      return `<p class="mt-3 leading-6" data-svelte-h="svelte-3w8v0l">A React-vite built project using Tailwindcss, R3F with Splinejs, AI generated Video and GSAP.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[4] }, {}, {
    default: () => {
      return `<p class="mt-3" data-svelte-h="svelte-pbiuy3">Immerse yourself in a <strong class="text-violet-400">seamless</strong> 
                    browsing experience powered by <b>Advanced search algorithms.</b><br> <strong class="text-violet-400">Discover</strong> your signature scent today!&quot;</p> <b data-svelte-h="svelte-ynj3e8"><strong class="text-violet-400">Please note : </strong>This project is not yet deployed.</b>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 py-4 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700" data-svelte-h="svelte-10g2lxn"><h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about </span>me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-rcpqeb">I am . . .</p> <div class="flex flex-col mx-auto gap-20 max-w-[800px]">${each(benefits, (benefit, index) => {
    return `<div class="gap-6 sm:gap-8 flex"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
