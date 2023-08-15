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
class="remixicon ri-slice-fill {customClass}"
{...$$restProps}
>
<path d="M13.7678 12.2289L15.8892 14.3502C11.293 18.9464 5.63612 20.3606 2.10059 19.6535L17.6569 4.09717L19.7783 6.21849L13.7678 12.2289Z"></path>
</svg>
