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
class="remixicon ri-coupon-5-fill {customClass}"
{...$$restProps}
>
<path d="M21.0049 13.9995V20.9995C21.0049 21.5518 20.5572 21.9995 20.0049 21.9995H4.00488C3.4526 21.9995 3.00488 21.5518 3.00488 20.9995V13.9995C4.10945 13.9995 5.00488 13.1041 5.00488 11.9995C5.00488 10.8949 4.10945 9.99951 3.00488 9.99951V2.99951C3.00488 2.44723 3.4526 1.99951 4.00488 1.99951H20.0049C20.5572 1.99951 21.0049 2.44723 21.0049 2.99951V9.99951C19.9003 9.99951 19.0049 10.8949 19.0049 11.9995C19.0049 13.1041 19.9003 13.9995 21.0049 13.9995ZM9.00488 5.99951V7.99951H15.0049V5.99951H9.00488ZM9.00488 15.9995V17.9995H15.0049V15.9995H9.00488Z"></path>
</svg>
