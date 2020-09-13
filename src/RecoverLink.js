import React from 'react';
import './App.css';
import './grid.css';
import  imglogo from './img/logo.png'
import  imgfacebook from './img/facebook.svg'
import  imggoogle from './img/google.svg'


function RecoverLink() {

    return ( 
		<div className={'mask container'}>
			<div className={'row'} >
			
				<div className={'col-12'} >
					<div className={' form nomask norounded'} >
						<div className={'form-title'}>
							<h2>Recuperar <br/> minha conta</h2>
						</div>
						<input type={'email'} className={'input-border-bottom col-12'} placeholder={'Insira seu e-mail aqui'} />
						
						<div className={"d-flex justify-content-center  "}>
						
							<button type="submit" className={"col-8 button button-defaut bg-blue p-20"}>Quero receber meu link</button>
						</div>
					 
							
						
					
					</div>
				</div>
			</div>
		</div>
    );
}
export default RecoverLink;