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
class="remixicon ri-number-3 {customClass}"
{...$$restProps}
>
<path d="M18.0005 2V3.36217L12.8092 9.54981C16.0174 9.94792 18.5005 12.684 18.5005 16C18.5005 19.5899 15.5904 22.5 12.0005 22.5C8.95483 22.5 6.39837 20.4052 5.69336 17.5778L7.634 17.0922C8.12205 19.0497 9.89193 20.5 12.0005 20.5C14.4858 20.5 16.5005 18.4853 16.5005 16C16.5005 13.5147 14.4858 11.5 12.0005 11.5C11.28 11.5 10.599 11.6694 9.99514 11.9705L9.76741 12.0923L9.07754 10.8852L14.8555 3.99917L6.50054 4V2H18.0005Z"></path>
</svg>
