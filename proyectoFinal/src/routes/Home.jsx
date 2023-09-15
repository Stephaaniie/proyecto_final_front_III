import { useContext } from "react";

import Layout from "./Layout";
import { ContextGlobal } from "../components/utils/global.context";
import { CardPost } from '../components/Card';

const Home = () => {
  const { dataMemo } = useContext(ContextGlobal)

  return (
    <Layout>
      <div className='card-grid'>
        {dataMemo && dataMemo.map((item) =>
          <CardPost name={item.name} username={item.username} id={item.id} key={item.id} />)
        }
      </div>
    </Layout>
  )
}

export default Home
