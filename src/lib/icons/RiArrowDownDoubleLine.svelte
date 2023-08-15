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
class="remixicon ri-arrow-down-double-line {customClass}"
{...$$restProps}
>
<path d="M12.0001 19.1643L18.2072 12.9572L16.793 11.543L12.0001 16.3359L7.20718 11.543L5.79297 12.9572L12.0001 19.1643ZM12.0001 13.5144L18.2072 7.30728L16.793 5.89307L12.0001 10.686L7.20718 5.89307L5.79297 7.30728L12.0001 13.5144Z"></path>
</svg>
