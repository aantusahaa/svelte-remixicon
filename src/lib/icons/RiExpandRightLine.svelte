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
class="remixicon ri-expand-right-line {customClass}"
{...$$restProps}
>
<path d="M17.1717 11L12.5148 6.34317L13.929 4.92896L21.0001 12L13.929 19.0711L12.5148 17.6569L17.1716 13L7.9998 13.0002L7.99978 11.0002L17.1717 11ZM3.99985 19L3.99985 4.99997H5.99985V19H3.99985Z"></path>
</svg>
