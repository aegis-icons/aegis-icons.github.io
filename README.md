# aegis-icons.github.io

Website for our icon set that has very basic Jekyll setup.

## Running the local test server

### Setup

1. [Install Ruby and Jekyll with guides here](https://jekyllrb.com/docs/installation/#guides).
2. Run `bundle` in the terminal at site's root directory.

### Start the server

1. **For Windows**, run [`.1___start_jekyll_server` BAT script](https://github.com/aegis-icons/aegis-icons.github.io/blob/main/.1___start_jekyll_server.bat).
2.  **For other OSes / alternative way**, execute this terminal command at site's root directory:
```cmd
jekyll serve --incremental --host 0.0.0.0 --port 4000 --open_url
```

*After running the BAT or executing the command, it will automatically open local Jekyll server pages in the default browser.*

If you can't connect to `0.0.0.0:4000`, try `localhost:4000` in browser instead **or** changing `--host 0.0.0.0` to `--host localhost`.

## Share the server with local network

**Optional!** Only needed if you want to test in your mobile devices etc.

1. Open port `4000` **(TCP protocol)** from router's settings.
2. Find your **local** IPv4 address of the server PC.
3. Start the server.
4. Go to `http://[SERVER'S-LOCAL-IPv4-ADDRESS]:4000` on your other device.

> **Note** \
> Server's local network sharing won't work if `--host 0.0.0.0` is changed to `--host localhost`.

## Compressing CSS and JS files in the `_includes` directory

1. Install [Minify](https://github.com/tdewolff/minify/tree/master/cmd/minify#readme) with your prefered way.
   - **On Windows**, download [binary](https://github.com/tdewolff/minify/releases/latest) (`minify_windows_amd64.zip`) and add that .exe to the folder that's on the PATH (`c:\Windows` for example, highly recommended to create [new PATH variable](https://www.computerhope.com/issues/ch000549.htm)).

2.
   1. **For Windows,** use the [`.2___compress_includes-dir_css_js` BAT script](https://github.com/aegis-icons/aegis-icons.github.io/blob/main/.2___compress_includes-dir_css_js.bat).
   2. **For other OSes / alternative way,** go to `_includes` directory with terminal and paste these commands:
   ```cmd
   minify -o bottom-scripts.min.js         1a____bottom-scripts.js
   minify -o bottom-scripts-module.min.js  1b____bottom-scripts-module.js
   minify -o modules.min.css               2a____modules.css
   minify -o noscript-style.min.css        2b____noscript-style.css
   minify -o fonts.min.css                 2c____fonts.css
   minify -o sanitize.min.css              4a____sanitize.css
   ```
   
*While using Jekyll development server, site uses **uncompressed** CSS & JS files.*

> **Note** \
> Remember to compress CSS & JS files before committing / sending PR!

## Credits

- **Earhacker** from Reddit for [converting jQuery code to regular JavaScript](https://old.reddit.com/r/CodingHelp/comments/oz5cov/can_somebody_help_me_get_this_converted_from/h7y9cua/) ([referenced code on the site repo](https://github.com/aegis-icons/aegis-icons.github.io/blob/0fd7502a865f5ea7c94f6e77ff01d9da4c085e64/index.html#L210+L232)).
- **[trotzig](https://github.com/trotzig)** for "micro-optimizing" List.js ([#482 PR at List.js repo](https://github.com/javve/list.js/pull/482)).

### Assets

- [iA Writer Duo](https://github.com/iaolo/iA-Fonts/tree/master/iA%20Writer%20Duo) by iA Inc ([SIL OFL 1.1](https://github.com/iaolo/iA-Fonts/blob/master/iA%20Writer%20Duo/LICENSE.md)).
- [Inter](https://rsms.me/inter/) by Rasmus Andersson ([SIL OFL 1.1](https://github.com/rsms/inter/blob/master/LICENSE.txt)).
- [Jekyll Minifier](https://github.com/Mendeo/jekyll-minifier) by Aleksandr Meniailo ([MIT](https://github.com/Mendeo/jekyll-minifier/blob/main/LICENSE)).
- [List.js](https://listjs.com/) by Jonny Strömberg ([MIT](https://github.com/javve/list.js/blob/master/LICENSE)).
- [Phosphor Icons](https://phosphoricons.com/) by Helena Zhang ([MIT](https://github.com/phosphor-icons/phosphor-icons/blob/master/LICENSE)).
- [sanitize.css](https://github.com/csstools/sanitize.css) by CSS Tools ([CC0 1.0 Universal](https://github.com/csstools/sanitize.css/blob/main/LICENSE.md)).

## License

[Custom license](LICENSE.md), all rights reserved with exceptions mentioned in LICENSE doc.
