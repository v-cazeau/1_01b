import Color from './Color.jsx'; 

const colors = [{
    hex: '#91A6FF',
    name: 'Cornflower Blue'
  },
  {
    hex: '#FF88DC',
    name: 'Persian Pink'
  },
  {
    hex: '#80FF72',
    name: 'Screamin Green'
  },
  {
    hex: '#FF5154',
    name: 'Tart Orange'
  }]

export default function ColorRender () {
    return (
        <h2>
            {colors.map() }
        </h2>
    )
}