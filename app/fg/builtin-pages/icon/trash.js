import * as svg from '../../lib/svg'

export default function render () {
  return svg.render(`
    <svg class="icon trash" width="46px" height="47px" viewBox="0 0 46 47" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="trash" transform="translate(2.000000, 1.000000)" stroke="#000000" stroke-width="4">
          <path d="M37,6 L37,38 C37,41.3137085 34.3137085,44 31,44 L11,44 C7.6862915,44 5,41.3137085 5,38 L5,10 L5,6" id="Rectangle-2"/>
          <path d="M0,1 L42,1" id="Line-3" stroke-linecap="round"/>
          <path d="M16,12.5 L16,33.5" id="Line-4" stroke-linecap="round"/>
          <path d="M26,12.5 L26,33.5" id="Line-4-Copy" stroke-linecap="round"/>
        </g>
      </g>
    </svg>
  `)
}
