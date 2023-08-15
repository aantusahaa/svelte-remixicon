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
class="remixicon ri-expand-left-fill {customClass}"
{...$$restProps}
>
<path d="M10.4143 4.58594L10.4142 11.0003L16.0003 11.0004L16.0003 13.0004L10.4142 13.0003L10.4141 19.4144L3 12.0002L10.4143 4.58594ZM18.0002 19.0002V5.00018H20.0002V19.0002H18.0002Z"></path>
</svg>
