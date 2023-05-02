export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: "stylesheet", href: "/assets/css/plugins.css" },
			{ rel: "stylesheet", href: "/assets/css/style.css" },
			{ rel: "stylesheet", href: "/assets/css/style.css.map" },
			{ rel: "stylesheet", href: "/assets/css/main.css" },
			{ rel: "stylesheet", href: "/assets/css/fonts/poppins.css" },
			{ rel: "stylesheet", href: "/assets/css/colors/leaf.css" }
		],
        // script: [
        //     { id: "pluginsJs", src: "/assets/js/plugins.js", body: true },
        //     { id: "themeJs", src: "/assets/js/theme.js", body: true },
        // ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    // Deployment settings
    target: 'static',
    ssr: false,
    generate: {
        fallback: true
    }
}
