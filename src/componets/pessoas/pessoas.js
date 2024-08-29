
export default function Pessoas(){

    const pessoas = ['infoçoca', 'candido', 'diego', 'semanaInformática'];
    return (

      
        <div className="" style={{ 
           width: window.innerWidth, 
            backgroundColor: '241B42',
            justifyContent: 'center',
            alignItems: 'center',}}>

  <div className="row g-0">
    <div className="col-md-4 col-sm-4 p-4 row" style={{backgroundColor: "#362E50"}}>
    <div className="col-md-11 col-sm-11 center m-4" style={{backgroundColor: "#49455B", borderRadius: 20, boxShadow: "inherit"} }> 
    <div > 
            <button className="" style={{ padding: 20, borderRadius: 50, width: "20px",
            backgroundColor: '#49455B',
            justifyContent: 'flex-start',
            alignItems: 'flex-start', margin: 15, marginBottom: 0}}> </button>
          </div>

          <input className="col-md-10 "
             type="text"
            placeholder="pesquisar"
            style={{ margin: '20px', padding: '10px', height:"35px", borderRadius: "15px"}}
      />
            <div> 
                <div> 
                
  {pessoas.map((item, index) => (
    <div key={index}>
      <div className="pt-2"  style={{display: "flex", borderBottom: "2px solid black" }}> 
        <div> 
       <button  style={{ padding: 16, borderRadius: 50, width: "10px",
            backgroundColor: "black",
            justifyContent: 'flex-start',
            alignItems: 'flex-start', margin: "10px", border: 0}}> </button>
       </div> 
       <div style={{flexDirection:"column", justifyContent: "center", alignItems:"center"}}> 
      <p style={{color: "black", margin: 0, paddingTop: "3px", fontWeight: "500"}}>{item}</p>
      <p style={{color: "black", fontSize: "12px"}}>ultima mensagem</p> 
      </div> 
      </div> 
    </div> 
  ))}
        
         </div> 
         </div>
            </div>
    </div>

    <div className="col-md-8 col-sm-8 p-4">

  <div className="d-flex justify-content-between align-items-center mb-3">
    <div className="d-flex align-items-center">

      <div>
        <h2 style={{ color: "white" }}>infoçoça</h2>
        <p style={{ color: "#b9a3db" }}>Fulano está digitando..</p>
      </div>
    </div>
    <button className="btn btn-outline-light" style={{ borderRadius: "20px" }}>MAIS</button>
  </div>

  <div className="mb-3" style={{ padding: "10px", backgroundColor: "#9e7fc4", borderRadius: "15px" }}>
    <div className="d-flex mb-3">
      <div style={{ width: "40px", height: "40px", backgroundColor: "#6d4f99", borderRadius: "50%", marginRight: "10px" }}></div>
      <div>
        <strong style={{ color: "white" }}>Username</strong><br/>
        <div style={{ width: "150px", height: "150px", backgroundColor: "#d1c4e9", borderRadius: "10px", marginTop: "5px" }}></div>
      </div>
    </div>

    <div className="d-flex mb-3">
      <div style={{ width: "40px", height: "40px", backgroundColor: "#6d4f99", borderRadius: "50%", marginRight: "10px" }}></div>
      <div>
        <strong style={{ color: "white" }}>Username</strong><br/>
        <div style={{ backgroundColor: "#4d327b", color: "white", padding: "10px", borderRadius: "10px", marginTop: "5px" }}>
          texto texto nossa maneiro uau que incrivel olhe só olhem
        </div>
        <div style={{ backgroundColor: "#4d327b", color: "white", padding: "10px", borderRadius: "10px", marginTop: "5px" }}>
          vcs arrasaram
        </div>
      </div>
    </div>

    <div className="d-flex">
      <div style={{ width: "40px", height: "40px", backgroundColor: "#6d4f99", borderRadius: "50%", marginRight: "10px" }}></div>
      <div>
        <strong style={{ color: "white" }}>eu</strong><br/>
        <div style={{ width: "150px", height: "50px", backgroundColor: "#d1c4e9", borderRadius: "10px", marginTop: "5px" }}></div>
     
    </div>
  </div>
</div>


    </div>
  </div>



          
    
        </div>
      );

}