import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { H as Header } from "../../../../chunks/header.js";
const css = {
  code: ".container.svelte-tda6le{display:grid;grid-template-rows:auto 1fr;height:100vh}main.svelte-tda6le{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;width:100%}.background-page1.svelte-tda6le,.background-page2.svelte-tda6le,.background-page3.svelte-tda6le,.background-page4.svelte-tda6le,.background-page5.svelte-tda6le,.background-page6.svelte-tda6le,.background-page7.svelte-tda6le,.background-page8.svelte-tda6le{height:90%;width:95%;display:flex;flex-direction:column;justify-content:center;align-items:center}.background-page4.svelte-tda6le{flex-direction:row;justify-content:end}.background-page1.svelte-tda6le,.background-page8.svelte-tda6le{background-color:var(--vtDarkBlue)}.background-page2.svelte-tda6le,.background-page3.svelte-tda6le,.background-page4.svelte-tda6le,.background-page5.svelte-tda6le,.background-page6.svelte-tda6le,.background-page7.svelte-tda6le{background-color:var(--vtWhite);border:10px solid #090940;box-shadow:0px 4px 4px 0px rgba(0, 0, 0, 0.25)}.h1-page1.svelte-tda6le,.h2-page1.svelte-tda6le,.h1-page2.svelte-tda6le,.h1-page4.svelte-tda6le,.h1-page5.svelte-tda6le,.h1-page6.svelte-tda6le,.h1-page7.svelte-tda6le,.h1-page8.svelte-tda6le,.h2-page8.svelte-tda6le{color:var(--vtWhite);font-family:var(--vtPrimaryFont);display:inline;text-align:center}.h1-page5.svelte-tda6le{text-align:left}.h1-page2.svelte-tda6le,.h1-page4.svelte-tda6le,.h1-page5.svelte-tda6le,.h1-page6.svelte-tda6le,.h1-page7.svelte-tda6le{color:var(--vtDarkBlue)}h1.svelte-tda6le{font-size:1.6rem;margin-bottom:2rem}.h1-page7.svelte-tda6le{margin-bottom:0rem}h2.svelte-tda6le{font-size:1rem;margin:0}.p-page3.svelte-tda6le,.p-page4.svelte-tda6le,.p-page6.svelte-tda6le,.p-page7.svelte-tda6le,.p-page8.svelte-tda6le{color:var(--vtDarkBlue);font-family:var(--vtPrimaryFont)}.p-page8.svelte-tda6le{color:var(--vtWhite);text-align:center}p.svelte-tda6le{font-size:1rem}.img-page1.svelte-tda6le{transform:rotate(90deg);width:7%}.img-page2.svelte-tda6le{width:35%}.img-page4.svelte-tda6le{width:40%}.img-page5.svelte-tda6le{width:35%}.img-page8.svelte-tda6le{width:7%;margin-bottom:2rem}.button-page1.svelte-tda6le,.buttonL-page2.svelte-tda6le,.buttonR-page2.svelte-tda6le,.buttonL-page3.svelte-tda6le,.buttonR-page3.svelte-tda6le,.buttonL-page4.svelte-tda6le,.buttonR-page4.svelte-tda6le,.buttonL-page5.svelte-tda6le,.buttonR-page5.svelte-tda6le,.buttonL-page6.svelte-tda6le,.buttonR-page6.svelte-tda6le,.buttonL-page7.svelte-tda6le,.buttonR-page7.svelte-tda6le,.buttonL-page8.svelte-tda6le,.buttonR-page8.svelte-tda6le{width:8rem;height:2.5rem;font-size:1.2rem;font-family:var(--vtPrimaryFont);margin-bottom:2.7rem}.button-page1.svelte-tda6le,.buttonR-page2.svelte-tda6le,.buttonR-page3.svelte-tda6le,.buttonR-page4.svelte-tda6le,.buttonR-page5.svelte-tda6le,.buttonR-page6.svelte-tda6le,.buttonR-page7.svelte-tda6le,.buttonR-page8.svelte-tda6le{right:0;bottom:0;position:absolute;margin-right:3rem}.buttonL-page2.svelte-tda6le,.buttonL-page3.svelte-tda6le,.buttonL-page4.svelte-tda6le,.buttonL-page5.svelte-tda6le,.buttonL-page6.svelte-tda6le,.buttonL-page7.svelte-tda6le,.buttonL-page8.svelte-tda6le{left:0;bottom:0;position:absolute;margin-left:3rem}.button-page1.svelte-tda6le,.buttonL-page8.svelte-tda6le,.buttonR-page8.svelte-tda6le{border:1px solid var(--vtDarkBlue);background:var(--vtWhite);color:var(--vtDarkBlue)}.buttonL-page2.svelte-tda6le,.buttonR-page2.svelte-tda6le,.buttonL-page3.svelte-tda6le,.buttonR-page3.svelte-tda6le,.buttonL-page4.svelte-tda6le,.buttonR-page4.svelte-tda6le,.buttonL-page5.svelte-tda6le,.buttonR-page5.svelte-tda6le,.buttonL-page6.svelte-tda6le,.buttonR-page6.svelte-tda6le,.buttonL-page7.svelte-tda6le,.buttonR-page7.svelte-tda6le{border:1px solid var(--vtWhite);background:var(--vtDarkBlue);color:var(--vtWhite)}.link-page7.svelte-tda6le{background-color:var(--vtDarkBlue);color:var(--vtWhite);font-family:var(--vtPrimaryFont);padding:0.5rem;margin-bottom:1rem}a.svelte-tda6le{text-decoration:none;color:var(--vtWhite)}.section-page4.svelte-tda6le{text-align:center}.p-page4.svelte-tda6le{text-align:start}@media(min-width: 31em) and (max-width: 55em){main.svelte-tda6le{height:78vh}h1.svelte-tda6le{font-size:1.2rem;margin-bottom:2rem}h2.svelte-tda6le{font-size:0.7rem;margin:0}p.svelte-tda6le{font-size:0.7rem}.link-page7.svelte-tda6le{padding:0.5rem;font-size:0.7rem}.button-page1.svelte-tda6le,.buttonL-page2.svelte-tda6le,.buttonR-page2.svelte-tda6le,.buttonL-page3.svelte-tda6le,.buttonR-page3.svelte-tda6le,.buttonL-page4.svelte-tda6le,.buttonR-page4.svelte-tda6le,.buttonL-page5.svelte-tda6le,.buttonR-page5.svelte-tda6le,.buttonL-page6.svelte-tda6le,.buttonR-page6.svelte-tda6le,.buttonL-page7.svelte-tda6le,.buttonR-page7.svelte-tda6le,.buttonL-page8.svelte-tda6le,.buttonR-page8.svelte-tda6le{width:6rem;font-size:1rem}}@media(max-width: 31em){main.svelte-tda6le{height:78vh}h1.svelte-tda6le{font-size:1rem;margin-bottom:1rem}h2.svelte-tda6le{font-size:0.7rem;margin:0}p.svelte-tda6le{font-size:0.7rem}h2.svelte-tda6le{max-width:95%}.link-page7.svelte-tda6le{padding:0.5rem;font-size:0.7rem}.button-page1.svelte-tda6le,.buttonL-page2.svelte-tda6le,.buttonR-page2.svelte-tda6le,.buttonL-page3.svelte-tda6le,.buttonR-page3.svelte-tda6le,.buttonL-page4.svelte-tda6le,.buttonR-page4.svelte-tda6le,.buttonL-page5.svelte-tda6le,.buttonR-page5.svelte-tda6le,.buttonL-page6.svelte-tda6le,.buttonR-page6.svelte-tda6le,.buttonL-page7.svelte-tda6le,.buttonR-page7.svelte-tda6le,.buttonL-page8.svelte-tda6le,.buttonR-page8.svelte-tda6le{width:6rem;font-size:1rem;margin-bottom:2rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-tda6le">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-tda6le">${`<section class="background-page1 svelte-tda6le"><h1 class="h1-page1 svelte-tda6le" data-svelte-h="svelte-n210az">“Sad people are bent over, shoulders up, face down. <br>
                    Happy or proud people have their shoulders back, <br> face
                    up and hands at their sides.” <br> - Willemien Brand - Visual
                    Thinking</h1> <h2 class="h2-page1 svelte-tda6le" data-svelte-h="svelte-a3m8bh">In deze minicursus krijg je een introductie opdracht over
                    het tekenen van mensen. <br> Pak een vel papier en een aantal
                    stiften van verschillende diktes om mee te doen.</h2> <img class="img-page1 svelte-tda6le" src="/pencil.svg" alt=""> <button class="button-page1 svelte-tda6le" data-svelte-h="svelte-lz48t4">Volgende</button></section>`}</main> </div>`;
});
export {
  Page as default
};