import { w as attr, x as attr_class, y as ensure_array_like, z as bind_props, F as slot } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/context.js";
function Footer($$renderer) {
  $$renderer.push(`<footer class="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"><p class="px-4 py-2 bg-white text-slate-950 font-medium">Connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center"><p><b class="pr-2">Email</b> <a class="text-violet-400" target="_blank"${attr("href", `mailto:anton.nageh20@gmail.com`)}>anton_nageh20@gmail.com <sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">LinkedIn</b> <a class="text-violet-400" target="_blank" href="https://www.linkedin.com/in/anton-nageh-772852169">anton_nageh20 <sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">GitHub</b> <a class="text-violet-400" target="_blank" href="https://github.com/AntonNageh">anton_nageh20 <sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p></div></footer>`);
}
function Header($$renderer, $$props) {
  let y = $$props["y"];
  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" }
  ];
  $$renderer.push(`<header${attr_class("sticky z-10 top-0 pt-3 pb-3 duration-200 px-6 flex items-center justify-between border border-solid" + (y > 0 ? "py-4 bg-slate-950 border-violet-950" : "py-6 bg-transparent border-transparent"))}><h1 class="font-medium"><b class="font-bold poppins">Anton</b> Nageh</h1> <div class="sm:flex items-center gap-4 flex"><div class="hidden sm:flex gap-4"><!--[-->`);
  const each_array = ensure_array_like(tabs);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let tab = each_array[index];
    $$renderer.push(`<a${attr("href", tab.link)} class="duration-200 hover:text-violet-400">${escape_html(tab.name)}</a>`);
  }
  $$renderer.push(`<!--]--></div> <a href="https://www.linkedin.com/in/anton-nageh-772852169" target="_blank" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in Touch!</h4></a></div></header>`);
  bind_props($$props, { y });
}
function _layout($$renderer, $$props) {
  let y;
  $$renderer.push(`<div class="relate flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${attr_class("fixed bottom-0 w-full duration-200 flex p-10 z-[10] opacity-0 pointer-events-none")}><button aria-label="Scroll to top" title="Scroll to top" class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 py-3 sm:px-4 hover:bg-slate-800 cursor-pointer"><i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i> <span class="sr-only">Scroll to top</span></button></div> `);
  Header($$renderer, { y });
  $$renderer.push(`<!----> <!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
