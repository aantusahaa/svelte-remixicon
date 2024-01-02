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
class="remixicon ri-pentagon-line {customClass}"
{...$$restProps}
>
<path d="M12.0001 3.03043L20.5306 9.22822L17.2723 19.2564H6.72796L3.4696 9.22822L12.0001 3.03043ZM22.7471 8.50806L12.0001 0.699951L1.25317 8.50806L5.35814 21.1418H18.6421L22.7471 8.50806Z"></path>
</svg>
