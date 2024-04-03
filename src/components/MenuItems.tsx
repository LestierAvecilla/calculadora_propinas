import type { MenuItem } from "../types"

type MenuItemProps = {
    item:MenuItem
}



export default function MenuItems({item}:MenuItemProps) {
  return (
    <>

    <p>{item.name}</p>
    <p className=" font-black">{item.price}</p>
    </>
  )
}

