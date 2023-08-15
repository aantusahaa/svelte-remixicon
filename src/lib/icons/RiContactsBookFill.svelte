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
class="remixicon ri-contacts-book-fill {customClass}"
{...$$restProps}
>
<path d="M7 2V22H3V2H7ZM9 2H19.0049C20.1068 2 21 2.89821 21 3.9908V20.0092C21 21.1087 20.1074 22 19.0049 22H9V2ZM22 6H24V10H22V6ZM22 12H24V16H22V12ZM15 12C16.1046 12 17 11.1046 17 10C17 8.89543 16.1046 8 15 8C13.8954 8 13 8.89543 13 10C13 11.1046 13.8954 12 15 12ZM12 16H18C18 14.3431 16.6569 13 15 13C13.3431 13 12 14.3431 12 16Z"></path>
</svg>
