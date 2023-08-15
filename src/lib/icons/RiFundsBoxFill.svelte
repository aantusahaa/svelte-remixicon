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
class="remixicon ri-funds-box-fill {customClass}"
{...$$restProps}
>
<path d="M3.00488 3.00293H21.0049C21.5572 3.00293 22.0049 3.45064 22.0049 4.00293V20.0029C22.0049 20.5552 21.5572 21.0029 21.0049 21.0029H3.00488C2.4526 21.0029 2.00488 20.5552 2.00488 20.0029V4.00293C2.00488 3.45064 2.4526 3.00293 3.00488 3.00293ZM14.7978 9.79582L12.348 12.2456L10.2267 10.1243L5.98407 14.3669L7.39828 15.7811L10.2267 12.9527L12.348 15.074L16.212 11.21L18.0049 13.0029V8.00293H13.0049L14.7978 9.79582Z"></path>
</svg>
