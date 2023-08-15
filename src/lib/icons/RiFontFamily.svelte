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
class="remixicon ri-font-family {customClass}"
{...$$restProps}
>
<path d="M5.55446 22H3.40039L11.0004 3H13.0004L20.6004 22H18.4463L16.0463 16H7.95446L5.55446 22ZM8.75446 14H15.2463L12.0004 5.88517L8.75446 14Z"></path>
</svg>
