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
class="remixicon ri-settings-6-line {customClass}"
{...$$restProps}
>
<path d="M17.5 2.47363L23 11.9999L17.5 21.5262H6.5L1 11.9999L6.5 2.47363H17.5ZM16.3453 4.47363H7.6547L3.3094 11.9999L7.6547 19.5262H16.3453L20.6906 11.9999L16.3453 4.47363ZM8.63398 8.16979L10.366 7.16979L15.366 15.83L13.634 16.83L8.63398 8.16979Z"></path>
</svg>
