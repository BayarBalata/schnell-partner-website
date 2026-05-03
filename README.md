# SCHNELL Partner Website

Static, publish-ready concept site for SCHNELL Lubricants Germany.

## Files

- `index.html` - home page with hero and headline metrics
- `about.html` - business position and brand proof points
- `products.html` - product range, product-family images and detailed catalog explorer
- `oil-finder.html` - sample vehicle oil recommendation tool
- `markets.html` - distributor/workshop market story and Performance 3 in 1 service flow
- `agents.html` - interactive Iraq mock agent map and directory
- `contact.html` - distributor contact details, social links and inquiry form
- `styles.css` - responsive theme, brand colors, layout and animations
- `script.js` - mobile navigation, language switching, reveal animation, counters, product catalog, oil finder and agents map
- Language switcher included for English, Arabic and Kurdish Sorani
- Oil Finder with sample vehicle/oil recommendations
- Interactive Iraq agents map with 50 mock entries across Erbil, Duhok, Mosul and Baghdad
- `assets/` - SCHNELL logo assets, product-family photos, individual product photos and free-use editorial photos
- `RESEARCH.md` - market and website analysis notes used for the rebuild

## Publish

Upload the full folder to any static host. No build step is required.

For local preview:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

Language preview links:

- `http://localhost:4173/?lang=en`
- `http://localhost:4173/?lang=ar`
- `http://localhost:4173/?lang=ku`

## Notes

The SCHNELL logo files are public partner brand assets from the existing SCHNELL website and should be cleared under your partnership rights before production launch. The stock photos are from Unsplash and can be replaced with official product, factory or distributor photography when available.

The product catalog uses locally downloaded product photos from SCHNELL public product/category pages. Confirm final reuse approval under the partnership before public launch.

The agents section uses mock data in `script.js`. Replace the mock names, coordinates, addresses and phone fields with verified agent records before launch.

The Oil Finder uses sample application data in `script.js`. Replace it with verified SCHNELL application data before relying on recommendations in production.
