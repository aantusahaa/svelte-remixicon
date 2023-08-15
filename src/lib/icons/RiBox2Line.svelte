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
class="remixicon ri-box-2-line {customClass}"
{...$$restProps}
>
<path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM4.5 7.65311V7.65788L12 12V20.689L19.5 16.3469V7.65311L12 3.311L4.5 7.65311Z"></path>
</svg>
