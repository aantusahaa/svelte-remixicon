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
class="remixicon ri-landscape-fill {customClass}"
{...$$restProps}
>
<path d="M16 21L11.2381 12.2698L15 6L23 21H16ZM8 10L14 21H2L8 10ZM5.5 8C4.11929 8 3 6.88071 3 5.5C3 4.11929 4.11929 3 5.5 3C6.88071 3 8 4.11929 8 5.5C8 6.88071 6.88071 8 5.5 8Z"></path>
</svg>
