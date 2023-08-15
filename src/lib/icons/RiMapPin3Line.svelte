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
class="remixicon ri-map-pin-3-line {customClass}"
{...$$restProps}
>
<path d="M11 19.9451C6.50005 19.4476 3 15.6326 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11C21 15.6326 17.5 19.4476 13 19.9451V24H11V19.9451ZM12 18C15.866 18 19 14.866 19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11C5 14.866 8.13401 18 12 18Z"></path>
</svg>
