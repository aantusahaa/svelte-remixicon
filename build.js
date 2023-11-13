import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { pascalCase, pascalCaseTransformMerge } from 'pascal-case';
import iconObject from './remixicon.glyph.json' assert { type: 'json' };

const indexPath = path.resolve('./src/lib/index.js');
const iconDir = path.resolve('./src/lib/icons');

const component = (icon) => {
  const paths = iconObject[icon].path;
  const pathMarkup = paths.map((path) => `<path d="${path}"></path>`).join('');
  return `<script lang="ts">
export let size = '1em';
export let color = 'currentColor';
export let label= '';
let customClass = '';
export { customClass as class };
</script>

<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
width={size}
height={size}
fill={color}
aria-label={label ? label : undefined}
aria-hidden={!label ? 'true' : undefined}
role={label ? 'img' : undefined}
class="remixicon ri-${icon} {customClass}"
{...$$restProps}
>
${pathMarkup}
</svg>
`;
};
const pascalCaseName = (name) => {
  // To avoid naming collision between `bookmark` and `book-mark`
  if (name === 'book-mark-fill' || name === 'book-mark-line') {
    name = name.replace('book-mark', 'book-book-mark');
  }
  return pascalCase('ri-' + name, {
    transform: pascalCaseTransformMerge,
  });
};

let main = '';
(async () => {
  for (const icon of Object.keys(iconObject)) {
    const iconName = pascalCaseName(icon);
    console.log(`Building ${iconName}...`);
    await mkdir(iconDir, {
      recursive: true,
    });
    await writeFile(
      path.resolve(`${iconDir}/${iconName}.svelte`),
      component(icon),
      'utf-8'
    );

    main += `export { default as ${iconName} } from './icons/${iconName}.svelte';\n`;
  }

  console.log('Building index.js...');
  await writeFile(indexPath, main);
})();
