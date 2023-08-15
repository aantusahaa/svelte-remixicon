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
class="remixicon ri-shut-down-fill {customClass}"
{...$$restProps}
>
<path d="M11 2.04932V11.9999H13V2.04932C18.0533 2.55104 22 6.81459 22 11.9999C22 17.5228 17.5228 21.9999 12 21.9999C6.47715 21.9999 2 17.5228 2 11.9999C2 6.81459 5.94668 2.55104 11 2.04932Z"></path>
</svg>
