# aegis-icons.github.io

Website for our icon set that has very basic Jekyll setup.

1. [Install Ruby and Jekyll with guides here.](https://jekyllrb.com/docs/installation/#guides)
2. Run `bundle` in terminal at site's directory
3. To start the server, use [`.1_start_jekyll_server` Windows BAT script](https://github.com/aegis-icons/aegis-icons.github.io/blob/main/.1_start_jekyll_server.bat).
   - Alternatively, run `jekyll serve` in terminal at site's directory 

**For compressing** [`._bottom-scripts.js`](https://github.com/aegis-icons/aegis-icons.github.io/blob/main/_includes/._bottom-scripts.js) **to** `bottom-scripts.min.js`:
1. Install [Node.js](https://nodejs.org/en/download/) first, then [UglifyJS](https://github.com/mishoo/UglifyJS) with command: `npm install uglify-js -g`
3. **Recommended:** use [`.2_compress_bottom-scripts` Windows BAT script](https://github.com/aegis-icons/aegis-icons.github.io/blob/main/.2_compress_bottom-scripts.bat)
   - If that's not possible, then go to `_includes` directory and use this command:
   ```
   uglifyjs ._bottom-scripts.js --compress --mangle --output bottom-scripts.min.js
   ```

## Credits

- **Earhacker** from Reddit for [converting jQuery code to regular JavaScript](https://old.reddit.com/r/CodingHelp/comments/oz5cov/can_somebody_help_me_get_this_converted_from/h7y9cua/) ([referenced code on the site repo](https://github.com/aegis-icons/aegis-icons.github.io/blob/0fd7502a865f5ea7c94f6e77ff01d9da4c085e64/index.html#L210+L232)).
- [iA Writer Duo](https://github.com/iaolo/iA-Fonts/tree/master/iA%20Writer%20Duo) by iA Inc ([SIL OFL 1.1](https://github.com/iaolo/iA-Fonts/blob/master/iA%20Writer%20Duo/LICENSE.md))
- [Inter](https://rsms.me/inter/) by Rasmus Andersson ([SIL OFL 1.1](https://github.com/rsms/inter/blob/master/LICENSE.txt))
- [Jekyll Minifier](https://github.com/Mendeo/jekyll-minifier) by Aleksandr Meniailo ([MIT](https://github.com/Mendeo/jekyll-minifier/blob/main/LICENSE))
- [Phosphor Icons](https://phosphoricons.com/) by Helena Zhang ([MIT](https://github.com/phosphor-icons/phosphor-icons/blob/master/LICENSE))
- [List.js](https://listjs.com/) by Jonny Strömberg ([MIT](https://github.com/javve/list.js/blob/master/LICENSE))
- [sanitize.css](https://github.com/csstools/sanitize.css) by CSS Tools ([CC0 1.0 Universal](https://github.com/csstools/sanitize.css/blob/main/LICENSE.md))

## License

[Custom license](LICENSE.md), all rights reserved with exceptions mentioned in LICENSE doc.