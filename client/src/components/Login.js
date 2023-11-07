//composant importé de React Boostrap à customiser

import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {

  //création d'un state pour définir l'état du jsx
  const [justifyActive, setJustifyActive] = useState('tab1');

  //fonction pour modifier le state lorsque l'utilisatrice clique sur le bouton login ou le bouton register
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
    
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} style={{backgroundColor: "#25402B", border:"none"}}>
            Se connecter
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} style={{backgroundColor: "#25402B", border:"none"}}>

            S'enregistrer
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>


          <MDBInput wrapperClass='mb-4' label='Adresse Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Mot de Passe' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Se souvenir de moi' />
            <a href="!#">Mot de passe oublié?</a>
          </div>

          <MDBBtn style={{backgroundColor: '#25402B', border:"none"}} className="mb-4 w-100">Se connecter</MDBBtn>
          <p className="text-center">Pas encore membre ? <a href="#!">Enregistre toi!</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <MDBInput wrapperClass='mb-4' label='Prénom' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Nom' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Pseudo' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Mot de Passe' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label="J'ai lu et j'accepte les Conditions générales " />
          </div>

          <MDBBtn style={{backgroundColor: "#25402B", border:"none"}} className="mb-4 w-100">Valider l'inscription</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;