import axios from "axios";
import Orders from '../../Components/OrderHistoryPage/Orders'

const Handler = ({ result }) => {
  return <div className="w-[1170px] mx-auto">
    <div className="grid grid-cols-2 gap-[1.5rem]">{
      result.map(order => <Orders key={order?._id} order={order} />)
      }</div>
  </div>
}

export default Handler;

export async function getServerSideProps(context){
  const email = context?.query.email
  const {data: {data}} = await axios.get(`http://localhost:3000/api/loadorders?email=${email}`)
  return {
    props: {
      result: data
    }
  }
}