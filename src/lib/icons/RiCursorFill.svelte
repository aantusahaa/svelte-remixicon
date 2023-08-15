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
class="remixicon ri-cursor-fill {customClass}"
{...$$restProps}
>
<path d="M13.9093 12.3604L17.0007 20.8538L14.1816 21.8799L11.0902 13.3865L6.91797 16.5423L8.4087 1.6333L19.134 12.096L13.9093 12.3604Z"></path>
</svg>
