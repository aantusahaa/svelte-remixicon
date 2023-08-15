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
class="remixicon ri-skip-down-fill {customClass}"
{...$$restProps}
>
<path d="M18 17 6 17 6 15 18 15 18 17ZM12 13 18 7H6L12 13Z"></path>
</svg>
