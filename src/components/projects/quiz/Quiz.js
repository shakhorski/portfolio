import styles from "./quiz.module.css";
import { useState } from "react";
import { data } from "./data";

export function Quiz() {
  const [step, setStep] = useState(0);
  const [countTrue, setCountTrue] = useState(0);
  const percentage = Math.round((step / data.length) * 100) + '%';
  console.log( 2 && 1 && null && 0 && undefined);
  function nextStep(variant, e) {

   setTimeout(()=>setStep(step + 1), 500) ;
   if (variant === data[step].variants[data[step].correct])  {
       setCountTrue(countTrue + 1)
     e.target.style.backgroundColor = 'green'
         console.log(e.target.classList);
    } else {
      e.target.style.backgroundColor = 'red'


  }

  }
  return (

   <div>
     {step !== data.length ?    
  <div className={styles.container}>
<div className={styles.progressbarContainer}>
  <div style={{backgroundColor: 'green', 
width: percentage,
height: '5px',
transition: "1s"}}></div>
</div>

<div>
  <div className="mb-5">
    {data[step].question}
  </div>
  <div>
     {data[step].variants.map(variant => <div key={variant} onClick={(e)=> nextStep(variant, e)} className={styles.variants}>{variant}</div>)} 
  </div>

</div>


  </div> : 
  <div className={styles.container}>
    <div className='text-xl text-center'>Вы отгадали {countTrue} ответов из {data.length}</div>
      <img className="my-0 mx-auto" src="https://papik.pro/uploads/posts/2022-08/thumbs/1661906618_6-papik-pro-p-smailik-salyut-png-6.png" width='400px' alt='firework'></img>
      <div className="text-center">
             <button onClick={()=> {setStep(0); setCountTrue(0)}} className="p-4 bg-pink-700 text-white rounded-md my-0 mx-auto text-center">Попробовать еще</button> 
      </div>

  </div>}

    </div>  
  );
}
