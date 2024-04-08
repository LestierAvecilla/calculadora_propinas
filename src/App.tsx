import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrders"
import OrdersTotals from "./components/OrdersTotals"
import TipPrecentangeForm from "./components/TipPrecentangeForm"

function App() {

  const {order,addItem, removeItem, tip, setTip, placeOrder} = useOrder()


  return (
    <>
       <header className=" bg-teal-400 py-5">
         <h1 className=" text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
       </header>

       <main className=" max-w-6xl mx-auto py-20 grid grid-cols-2">

          <div className="p-5">
          <h2 className=" text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
       

          {menuItems.map(item => (
            <MenuItems 
              key={item.id}
              item={item}
              addItem={addItem}
            
            
            />
          ))}
          </div>

          </div>

          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            {order.length > 0 ? (
              <>
              <OrderContents
             order={order}
             removeItem={removeItem}
             />

              <TipPrecentangeForm 
                setTip={setTip}
                tip={tip}
              />

             <OrdersTotals 
              order={order}
              tip={tip}
              placeOrder={placeOrder}

             />
              </>
            ): (
              <p className=" text-center">No hay elementos en la orden</p>
            )}
             
          </div>

       </main>
    </>
  )
}

export default App
