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
class="remixicon ri-expand-right-fill {customClass}"
{...$$restProps}
>
<path d="M13.9998 4.99982L21.0001 11.9999L13.9998 18.9998V13H7.9998L7.99978 11H13.9998V4.99982ZM3.99985 18.9998L3.99985 4.99982H5.99985V18.9998H3.99985Z"></path>
</svg>
