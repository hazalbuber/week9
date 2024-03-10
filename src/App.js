import { useEffect, useState } from "react";

function App() {

  const [sayac, sayacGuncelle] = useState(0)
  
   useEffect( () => {
      console.log("1.efect çalıştı")
   }, [])

     
   useEffect( () => {
      console.log("2.efect çalıştı")
   })

  return (
    <>
      Sayaç : {sayac}

    </>
  );
}

export default App;

//useefeeect içindeki kodlar compent içindeki çalışır retunrn render edilir sonra koda parçaçcığı çaıştırılıe
