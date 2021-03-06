import React from 'react';
import './App.css';
import './grid.css';
import  imglogo from './img/logo.png'
import  imgfacebook from './img/facebook.svg'
import  imggoogle from './img/google.svg'


function LogIn() {

    return ( 
		<div className={' container'}>
			<div className={'row'} >
				<div className={'col-6'}>
					<div className={"logo "}>
					<img className="{image}" src={imglogo} alt="image not found"/>
						<p>GetEazy <span>BUSINESS</span> </p>
					</div>
				</div>
				<div className={'col-6'} >
					<div className={' form'} >
						<div className={'form-title'}>
							<h2>LOGIN <span>/ Cadastre-se </span></h2>
						</div>
						<input type={'email'} className={'input col-12'} placeholder={'Nome do Usuario / e-mail'} />
						<input type={'password'} className={'input col-12'} placeholder={' Palavra Passe '} />
						<div className={"d-flex justify-content-between  "}>
						<a>Recuperar Conta! </a>
							<button type="submit" className={" button button-defaut "}>LogIn</button>
						</div>
						<div className={"fancy-title title-border text-center"}>
							<h3 className="{text-center}">OU</h3>	
						</div>   
							<div className={'d-flex justify-content-center '}>
								<a><img className={'col-12'}  src={imgfacebook} alt="image not found"/></a>
								<a><img className={'col-12'}  src={imggoogle} alt="image not found"/></a>
							</div>
						
					
					</div>
				</div>
			</div>
		</div>
    );
}
export default LogIn;