\# dfinamore.mat.br



Personal academic website of Douglas Finamore.

Static HTML/CSS/JS, no build step, served by GitHub Pages from the `master` branch.



\## Local preview



The sidebar is loaded at runtime with `fetch()`, so \*\*opening `index.html` directly from the

filesystem will not work\*\* — you'll get a page with no navigation. Serve the folder over HTTP:



```bash

python3 -m http.server 8000   # then open http://localhost:8000

```



Or use the VS Code "Live Server" extension.



\## Structure



| Path | Purpose |

|---|---|

| `index.html` | Home — bio and contact |

| `publications.html` | Papers, preprints, theses |

| `profAct.html` | Teaching and research projects |

| `about.html` | Colophon |

| `sidebar.html` | Shared navigation fragment, injected by `js/script.js` |

| `css/layout.css` | The only stylesheet |

| `js/script.js` | Menu toggle, sidebar loader, e-mail de-obfuscation |

| `assets/` | Fonts, images, PDFs |



Editing the navigation means editing `sidebar.html` once. Editing the `<head>` means editing all four pages.



