import React from 'react';
import A from './A';
import Adata from './Adata';

function App(){
return(
<>
  <h1 className="headd1">Machine Learning News</h1>
  <div className="headd2">Dummy text is also used to demonstrate the appearance of different<br/>typefaces and layouts</div>
  {Adata.map((val) => {
      return(
  <A 
  image1={val.image1}
  line1={val.line1}
  line2={val.line2}
  />

    );
  })}
</>


  );

  }


export default App;