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
class="remixicon ri-emotion-add-fill {customClass}"
{...$$restProps}
>
<path d="M12 2C12.5862 2 13.1602 2.05264 13.7188 2.14941C13.2601 2.99733 13 3.96833 13 5C13 8.31371 15.6863 11 19 11C20.0315 11 21.0018 10.7388 21.8496 10.2803C21.9465 10.8392 22 11.4134 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM8 13C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13H8ZM20 4H23V6H20V9H18V6H15V4H18V1H20V4Z"></path>
</svg>
