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
class="remixicon ri-auction-fill {customClass}"
{...$$restProps}
>
<path d="M14.0049 20.0027V22.0027H2.00488V20.0027H14.0049ZM14.5907 0.688965L22.3688 8.46714L20.9546 9.88135L19.894 9.5278L17.4191 12.0027L23.076 17.6595L21.6617 19.0737L16.0049 13.4169L13.6007 15.821L13.8836 16.9524L12.4693 18.3666L4.69117 10.5885L6.10539 9.17425L7.23676 9.45709L13.53 3.16384L13.1765 2.10318L14.5907 0.688965Z"></path>
</svg>
