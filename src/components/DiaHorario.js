import { Link } from "react-router-dom";

export default function DiaHorario({weekday, date, showtimes}){
    
return (

        <div className="horarioDia">
            <p>{weekday} - {date}</p> {/* tem que vir de API */}

            <div className="hora">
                <Link to="/lugares">
                    
                  <div className="horarioFilme"> 
                    {showtimes[0].name} {/* tem que vir de API */} 
                  </div>  
                </Link>
              
              <div className="horarioFilme">
                {showtimes[1].name} {/* tem que vir de API */}
              </div>
            </div>


            
            
        </div>

)

}









