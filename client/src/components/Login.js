//composant importé de React Boostrap à customiser

import React, { useState, useRef } from 'react';
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
  const first_name_Ref = useRef();
  const last_name_Ref = useRef();
  const username_Ref = useRef();
  const email_Ref = useRef();
  const password_Ref = useRef();

  //comportements
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "first_name": first_name_Ref.current.value,
      "last_name": last_name_Ref.current.value,
      "username": username_Ref.current.value,
      "email": email_Ref.current.value,
      "password": password_Ref.current.value
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch("http://localhost:5500/users", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }



  //fonction pour modifier le state lorsque l'utilisatrice clique sur le bouton login ou le bouton register
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);

  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between ' style={{
        backgroundColor: ''
      }}>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Se connecter
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>

            S'enregistrer
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>


          <MDBInput wrapperClass='mb-4' label='Adresse Email' id='form1' type='email' />
          <MDBInput wrapperClass='mb-4' label='Mot de Passe' id='form2' type='password' />

          {/* <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Se souvenir de moi' />
            <a href="!#">Mot de passe oublié?</a>
          </div> */}

          <MDBBtn style={{ backgroundColor: '#25402B', border: "none" }} className="mb-4 w-100">Se connecter</MDBBtn>
          {/* <p className="text-center">Pas encore membre ? <a href="#!">Enregistre toi!</a></p> */}

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <MDBInput ref={first_name_Ref} wrapperClass='mb-4' label='Prénom' id='form1' type='text' />
          <MDBInput ref={last_name_Ref} wrapperClass='mb-4' label='Nom' id='form1' type='text' />
          <MDBInput ref={username_Ref} wrapperClass='mb-4' label='Pseudo' id='form1' type='text' />
          <MDBInput ref={email_Ref} wrapperClass='mb-4' label='Email' id='form1' type='text' />
          <MDBInput ref={password_Ref} wrapperClass='mb-4' label='Mot de Passe' id='text' type='password' />


          <MDBBtn onClick={handleSubmit} style={{ backgroundColor: "#25402B", border: "none" }} className="mb-4 w-100">Valider l'inscription</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;