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
<path d="M13.9999 4.99982L21.0001 11.9999L13.9999 18.9998V13H7.99983L7.99981 11H13.9999V4.99982ZM3.99988 18.9998L3.99988 4.99982H5.99988V18.9998H3.99988Z"></path>
</svg>
