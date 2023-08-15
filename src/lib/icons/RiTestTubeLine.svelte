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
class="remixicon ri-test-tube-line {customClass}"
{...$$restProps}
>
<path d="M17 2V4H16V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V4H7V2H17ZM14 10H10V18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18V10ZM13 15C13.5523 15 14 15.4477 14 16C14 16.5523 13.5523 17 13 17C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15ZM11 12C11.5523 12 12 12.4477 12 13C12 13.5523 11.5523 14 11 14C10.4477 14 10 13.5523 10 13C10 12.4477 10.4477 12 11 12ZM14 4H10V8H14V4Z"></path>
</svg>
