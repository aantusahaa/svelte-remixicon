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
class="remixicon ri-collage-line {customClass}"
{...$$restProps}
>
<path d="M20 3.10645C20.5523 3.10645 21 3.55416 21 4.10645V20.1064C21 20.6587 20.5523 21.1064 20 21.1064H4C3.44772 21.1064 3 20.6587 3 20.1064V4.10645C3 3.55416 3.44772 3.10645 4 3.10645H20ZM11.1888 13.2649L5 14.3554V19.1064H12.218L11.1888 13.2649ZM19 5.10645H11.781L14.249 19.1064H19V5.10645ZM9.75 5.10645H5V12.3244L10.8415 11.2953L9.75 5.10645Z"></path>
</svg>
