const cloudflareAnalyticsToken = "";

if (cloudflareAnalyticsToken) {
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.dataset.cfBeacon = JSON.stringify({
        token: cloudflareAnalyticsToken,
    });
    document.head.appendChild(script);
}
