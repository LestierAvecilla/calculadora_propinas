import type { MenuItem } from "../types"


type MenuItemProps = {
    item:MenuItem,
    addItem: (item: MenuItem) => void 
}



export default function MenuItems({item, addItem}:MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400 hover:animate-pop animate-duration-normal animate-steps-modern p-3 flex justify-between w-full"
      onClick={() => addItem(item)}
    >

    <p>{item.name}</p>
    <p className=" font-black">{item.price}</p>
    </button>
  )
}

