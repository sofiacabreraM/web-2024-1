import './Menu.css';
export function Menu ({ items }) {
    return (
      <nav className='menu-funcion'>
      <ul>
      {
        items.map((item) =>
        <MenuItem
        item={item}
        key={item.id}
        />
        )
      }   
      </ul>
      </nav>
    )}
    
    export function MenuItem({item}) {
      const {text} = item
    return(
      <li>
      <a href=''>{text}</a>
      </li>
    )
    }
    