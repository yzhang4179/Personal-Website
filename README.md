# Personal Website

Source for Yixin Zhang's personal academic website.

## Visitor Analytics

This site is prepared for Cloudflare Web Analytics, which provides private,
privacy-friendly visitor stats without cookies or localStorage.

To enable it:

1. Open the Cloudflare dashboard and go to **Analytics & Logs** > **Web Analytics**.
2. Select **Add a site**.
3. Enter `yzhang4179.github.io` as the hostname.
4. Copy the token from Cloudflare's JavaScript snippet.
5. Paste the token into `static/js/analytics.js`:

```js
const cloudflareAnalyticsToken = "your-token-here";
```

After GitHub Pages deploys, visitors will be counted automatically. To view
the dashboard later, return to Cloudflare **Analytics & Logs** > **Web
Analytics** and open the `yzhang4179.github.io` site.
