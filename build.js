const { readFile, writeFile, mkdir } = require('fs/promises');
const path = require('path');
const cheerio = require('cheerio');
const { pascalCase, pascalCaseTransformMerge } = require('pascal-case');
const { convert } = require('number-words');

const symbolPath = path.resolve('./remixicon.symbol.svg');
const jsonPath = path.resolve('./lib/remixicon.json');
const indexPath = path.resolve('./lib/index.js');
const typePath = path.resolve('./lib/index.d.ts');
const iconDir = path.resolve('./lib/icons');

let iconObject = {};
const component = (icon) => {
  return `<script>
export let size = '1em';
export let color = 'currentColor';
let customClass = '';
export { customClass as class };
</script>

<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
width={size}
height={size}
fill={color}
class="remixicon {customClass}"
{...$$restProps}
on:click
>
${iconObject[icon]}
</svg>`;
};
const pascalCaseName = (name) => {
  const invalidName = name.match(/^\d+/);
  if (invalidName) {
    name = name.replace(invalidName[0], `${convert(invalidName[0])}-`);
  }

  // To avoid naming collision between `bookmark` and `book-mark`
  if (name === 'book-mark-fill' || name === 'book-mark-line') {
    name = name.replace('book-mark', 'book-book-mark');
  }
  return pascalCase(name, {
    transform: pascalCaseTransformMerge,
  });
};

let main = '';
let type =
  '/// <reference types="svelte" />\nimport {SvelteComponentTyped} from "svelte/internal";\n\n';
(async () => {
  const fileContent = await readFile(symbolPath, { encoding: 'utf-8' });
  const $ = cheerio.load(fileContent);
  const symbols = $('symbol');

  symbols.each(function (i, e) {
    const path = $(this).html().replace('\n', '');
    const id = $(this).attr('id').replace('ri-', '');
    iconObject[id] = path;
  });

  for (const icon of Object.keys(iconObject)) {
    const iconName = pascalCaseName(icon);
    await mkdir(iconDir, {
      recursive: true,
    });
    await writeFile(
      path.resolve(`${iconDir}/${iconName}.svelte`),
      component(icon),
      'utf-8'
    );

    main += `export { default as ${iconName} } from './icons/${iconName}.svelte';\n\n`;

    type += `export class ${iconName} extends SvelteComponentTyped<{size?: string, color?: string, class?: string}> {}\n\n`;
  }

  await writeFile(jsonPath, JSON.stringify(iconObject, null, 2));
  await writeFile(indexPath, main);
  await writeFile(typePath, type);
})();
