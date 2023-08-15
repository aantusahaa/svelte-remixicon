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
class="remixicon ri-english-input {customClass}"
{...$$restProps}
>
<path d="M14 10H16L16.0005 10.7574C16.7154 10.279 17.5751 10 18.5 10C20.9853 10 23 12.0147 23 14.5V20H21V14.5C21 13.07 19.8255 12 18.5 12C17.1745 12 16 13.07 16 14.5V20H14V10ZM12 4V6H4V11H12V13H4V18H12V20H2V4H12Z"></path>
</svg>
