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
class="remixicon ri-contract-left-fill {customClass}"
{...$$restProps}
>
<path d="M15.4141 4.58594L15.414 11.0003L21.0001 11.0004L21 13.0004L15.414 13.0003L15.4139 19.4144L7.99979 12.0002L15.4141 4.58594ZM4 19.0002L4 5.00018H6L6 19.0002H4Z"></path>
</svg>
