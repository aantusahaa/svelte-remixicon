<script lang="ts">
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
class="remixicon ri-collapse-vertical-fill {customClass}"
{...$$restProps}
>
<path d="M11.9995 13.4995 16.9492 18.4493 12.9995 18.4483 12.9995 22.9995H10.9995L10.9995 18.4478 7.05222 18.4468 11.9995 13.4995ZM10.9995.999512 10.9995 5.54964 7.05026 5.54956 12 10.4995 16.9497 5.54977 12.9995 5.54968V.999512L10.9995.999512Z"></path>
</svg>
