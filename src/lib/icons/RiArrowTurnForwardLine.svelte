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
class="remixicon ri-arrow-turn-forward-line {customClass}"
{...$$restProps}
>
<path d="M17.0004 5.82843V13C17.0004 16.3137 14.3142 19 11.0004 19C7.68673 19 5.00044 16.3137 5.00044 13V4H3.00044V13C3.00044 17.4183 6.58216 21 11.0004 21C15.4187 21 19.0004 17.4183 19.0004 13V5.82843L21.536 8.36396L22.9502 6.94975L18.0004 2L13.0507 6.94975L14.4649 8.36396L17.0004 5.82843Z"></path>
</svg>
