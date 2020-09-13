import React from 'react';
import './App.css';
import './grid.css';
import  logodark from './img/logodark.png'

function Signin1() {

    return ( 
		<div className={'mask container'}>
			<div className={'form-title d-flex' }>
							<img src={logodark} className={"col-1 "} />
							<h2 className={"d-flex align-items-center"}> Dados da Empresa</h2>
						</div>
					<div className={' p-20 form nomask norounded'} >
						<input type={'text'} className={'input col-12'} placeholder={'Nome da Loja'} />
						<input type={'text'} className={'input col-6'} placeholder={'Conta Bancária'} />
						<input type={'text'} className={'input col-6'} placeholder={'Selecione Categorias'} />
						<input type={'text'} className={'input col-6'} placeholder={'NUIT '} />
						<input type={'text'} className={'input col-6'} placeholder={'Telefone '} />
						<div className={"d-flex justify-content-center  "}>
						
							<button type="submit" className={"col-3 button button-defaut bg-blue p-20"}>Voltar</button>
							<button type="submit" className={"col-3 button button-defaut bg-blue p-20"}>Continuar</button>
				</div>
			</div>
		</div>
    );
}
export default Signin1;