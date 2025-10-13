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
class="remixicon ri-game-2-fill {customClass}"
{...$$restProps}
>
<path d="M7 4H9V6H15V4H17V2H19V6H17V8H19V10H23V16H21V12H20V18H17V20H19V22H15V18H9V22H5V20H7V18H4V12H3V16H1V10H5V8H7V6H5V2H7V4ZM9 11V14H11V11H9ZM13 11V14H15V11H13Z"></path>
</svg>
