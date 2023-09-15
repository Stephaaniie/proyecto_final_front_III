import { useEffect, useState } from "react";

import { CardPost } from "../Components/Card";
import Layout from "./Layout";

function Favs() {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    const savedDoctors = JSON.parse(localStorage.getItem('fav'));
    if (savedDoctors) {
      setDoctors(savedDoctors);
    }
  }, [])

  return (
    <Layout>
      {doctors.length > 0 ?
        <div className="card-grid">
          {
            doctors.map(dentista =>
              <CardPost name={dentista.name} username={dentista.username} id={dentista.id} key={dentista.id} />)
          }
        </div>
        :
        <div>
          <p className="sinFav">Por el momento no tiene Favoritos.</p>
        </div>
      }

    </Layout>
  );
}

export default Favs;
