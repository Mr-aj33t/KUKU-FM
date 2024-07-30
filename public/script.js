const scriptUrls = [
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/52774a7f-352e1f24d7b3a281.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/fd9d1056-531c4c5b3cd38a94.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/2341-e72c337c0610c400.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/main-app-684ef4003471b61e.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/e8149b54-8d9ea1f7aec89ea6.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/9058-a3437fdc53b5fb59.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/231-caf1ad469ca5ffbf.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/8173-c0ee76e93e351103.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/2792-bb77bd274477f58a.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/9817-e182e8b33a1acc2d.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/app/error-0f9e69aae7990d44.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/app/global-error-41e35b3762cf770e.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/e37a0b60-bb104611db2671ae.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/8630d8d5-7a48385154e771b7.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/8726-a285b218880579a4.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/3360-00a58e6b6c00d3f6.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/7498-1cdb7938ab7e9b0a.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/9881-66290cc205cffc14.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/124-bb080dd86ae15e58.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/2729-8b7894828c864ade.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/953-c6bfd86b0b1cbd59.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/8622-52bf91d770f3312d.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/5509-e682a19b155afad6.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/6527-d8a42ea9010329b6.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/5057-8e816b557e64e9b6.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/2638-369f577ba27cbee7.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/2646-386075ee44e50937.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/7977-24da7f71853a5232.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/3135-fdbc97f432f3ffb9.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/8818-78921572bdf603d4.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/app/(subscription)/layout-4cc0149adcf6fb5e.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/5611-440f74b155f46d53.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/app/(app)/layout-2f625894fc853326.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/app/(app)/not-found-ca548b2ad6d7f7de.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/app/(app)/error-f2c1f2699195b2ba.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/6925-5ff7da71e12ddf4a.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/3896-bb1beb9ce2f0b99a.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/app/(app)/home/%5BpreferredLang%5D/page-44470842f59459d3.js",
    "https://d31ntp24xvh0tq.cloudfront.net/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js"


];





scriptUrls.forEach(url => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
});


// Initialize and configure the first script