import React from 'react'
import ColorChoice from './ColorChoice'

const ColorsMenu = () => {

const colorArray = [
  { id: 1, colorName: 'Red', colorHex: '#CC0000' },
  { id: 2, colorName: 'Blue', colorHex: '#0000CC' },
  { id: 3, colorName: 'Green', colorHex: '#008000' },
  { id: 4, colorName: 'Yellow', colorHex: '#CCCC00' },
  { id: 5, colorName: 'Purple', colorHex: '#660066' },
  { id: 6, colorName: 'Orange', colorHex: '#CC6600' },
  { id: 7, colorName: 'Pink', colorHex: '#CC6699' },
  { id: 8, colorName: 'Brown', colorHex: '#663300' },
  { id: 9, colorName: 'Gray', colorHex: '#999999' },
  { id: 10, colorName: 'Cyan', colorHex: '#006666' },
  { id: 11, colorName: 'Magenta', colorHex: '#990099' },
  { id: 12, colorName: 'Lime', colorHex: '#336633' },
  { id: 13, colorName: 'Teal', colorHex: '#003333' },
  { id: 14, colorName: 'Indigo', colorHex: '#2E1A38' },
  { id: 15, colorName: 'Maroon', colorHex: '#660000' },
  { id: 16, colorName: 'Navy', colorHex: '#000066' },
  { id: 17, colorName: 'Olive', colorHex: '#666600' },
  { id: 18, colorName: 'Silver', colorHex: '#808080' },
  { id: 19, colorName: 'Gold', colorHex: '#CC9900' },
  { id: 20, colorName: 'White', colorHex: '#CCCCCC' }
];




  return (
      <div className='flex flex-col gap-3'>
          
          {colorArray.map((color) => (
              
              <ColorChoice key={color.id} name={color.colorName} hex={color.colorHex } />
          ))}
         
          
    </div>
  )
}

export default ColorsMenu