import React from 'react';
import './App.css';
import './grid.css';
import  logodark from './img/logodark.png'

function Signin1() {

    return ( 
		<div className={'mask container'}>
			<div className={'form-title d-flex' }>
					<h2 className={"d-flex align-items-center"}> Eu Sou</h2>
				</div>
			<div className={' p-20 form nomask norounded'} >
			
			<div className={"row "}>
				<button type="submit" className={"col-12 button button-defaut bg-blue p-20"}>Uma Empresa <span>(Tenho licença eu!)</span></button>
				<button type="submit" className={"col-12 button button-defaut bg-gray p-20"}> Individual<span>(Sou empreendedor eu!)</span></button>
			</div>
			</div>
		</div>
    );
}
export default Signin1;