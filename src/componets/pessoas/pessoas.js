import React, { useState } from 'react';

export default function Pessoas() {
  const pessoas = [
    { nome: 'Infoçoca', mensagens: ['GENTE TEM UMA PLACA COM UM CHUTE O ARTEIRO QUE INCRÍVEL', 'fico muito bom né'] },
    { nome: 'Candido', mensagens: ['chave da cordenação onde ficou???', 'Ta com a Dona Leda, fui passar café'] },
    { nome: 'Diego', mensagens: ['', 'Mensagem 2 de eu'] },
    { nome: 'semanaInformática', mensagens: ['Cadê os básicos?? auditório ta vazio Cândido ta chamando', 'folga deles hoje de manha eu acho'] },
  ];

  const [conversaAtiva, setConversaAtiva] = useState(pessoas[0]);
  const [mostrarChat, setMostrarChat] = useState(false);

  function mudaconversa(pessoa) {
    setConversaAtiva(pessoa);
    setMostrarChat(false);
  }

  return (
    <div
      style={{
        backgroundColor: '#241B42',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',padding:0, margin:0,
      }}
    >
      <div className="row g-0" style={{ flex: 1, display: 'flex' }}>
        <button
          className="btn btn-outline-light d-md-none col-sm-12"
          style={{ marginBottom: '10px', padding:"5px", marginTop:"10px" }}
          onClick={() => setMostrarChat(!mostrarChat)}
        >
          {mostrarChat ? 'Esconder Chat' : 'Mostrar Chat'}
        </button>

        <div
          className={`col-md-4 col-sm-4 p-4 ${mostrarChat ? '' : 'd-none d-md-block'}`}
          style={{ backgroundColor: '#362E50', overflowY: 'auto' }}
        >
          <div
            className="col-md-11 center m-4"
            style={{ backgroundColor: '#49455B', borderRadius: 20, boxShadow: 'inherit' }}
          >
            <div>
              <button
                style={{
                  padding: 20,
                  borderRadius: 50,
                  width: '20px',
                  backgroundColor: '#49455B',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  margin: 15,
                  marginBottom: 0,
                }}
              ></button>
            </div>

            <input
              className="col-sm-11 col-md-11"
              type="text"
              placeholder="pesquisar"
              style={{
                margin: '20px',
                padding: '10px',
                height: '35px',
                borderRadius: '15px',
              }}
            />

            <div>
              <div>
                {pessoas.map((pessoa, index) => (
                  <div key={index}>
                    <div
                      className="pt-2"
                      style={{
                        display: 'flex',
                        borderBottom: '2px solid black',
                      }}
                    >
                      <div onClick={() => mudaconversa(pessoa)}>
                        <button
                          style={{
                            padding: 16,
                            borderRadius: 50,
                            width: '10px',
                            backgroundColor: 'black',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            margin: '10px',
                            border: 0,
                          }}
                        ></button>
                      </div>
                      <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ color: 'black', margin: 0, paddingTop: '3px', fontWeight: '500' }}>
                          {pessoa.nome}
                        </p>
                        <p style={{ color: 'black', fontSize: '12px' }}>ultima mensagem</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8 col-sm-8 p-4" style={{height: "100vh"}}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <div>
                <h2 style={{ color: 'white' }}>{conversaAtiva.nome}</h2>
                <p style={{ color: '#b9a3db' }}>Fulano está digitando..</p>
              </div>
            </div>
            <button className="btn btn-outline-light" style={{ borderRadius: '20px' }}>
              MAIS
            </button>
          </div>

          <div className="mb-3" style={{ padding: '10px', backgroundColor: '#9e7fc4', borderRadius: '15px'}}>
            {conversaAtiva.mensagens.map((mensagem, idx) => (
              <div
                className="d-flex mb-3"
                key={idx}
                style={{
                  justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end',
                }}
              >
          
                <div style={{ marginLeft: "5px" }}>
                  <strong style={{ color: 'white', paddingLeft: "10px" }}>
                    {idx % 2 === 0 ? conversaAtiva.nome : 'Eu'}
                  </strong>
                  <br />
                  <div
                    style={{
                      backgroundColor: '#4d327b',
                      color: 'white',
                      padding: '10px',
                      borderRadius: '10px',
                      marginTop: '5px',
                    }}
                  >
                    {mensagem}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
