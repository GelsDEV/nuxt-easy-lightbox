import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit';

const name = "@vernaillen/nuxt-easy-lightbox";
const version = "1.0.3";

const module = defineNuxtModule({
  meta: {
    name,
    version,
    configKey: "easyLightbox",
    compatibility: {
      nuxt: ">=3.0.0"
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    _nuxt.options.css = [
      ..._nuxt.options.css || [],
      "vue-easy-lightbox/external-css/vue-easy-lightbox.css"
    ];
    _nuxt.options.build.transpile = [
      ..._nuxt.options.build?.transpile || [],
      "vue-easy-lightbox"
    ];
    addPlugin(resolver.resolve("./runtime/plugin"));
  }
});

export { module as default };
