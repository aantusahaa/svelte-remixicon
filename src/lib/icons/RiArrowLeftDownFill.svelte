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
class="remixicon ri-arrow-left-down-fill {customClass}"
{...$$restProps}
>
<path d="M12.361 13.0515L17.3108 18.0013H5.99707V6.68758L10.9468 11.6373L16.6037 5.98047L18.0179 7.39468L12.361 13.0515Z"></path>
</svg>
