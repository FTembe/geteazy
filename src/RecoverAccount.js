import React from 'react';
import './App.css';
import './grid.css';


function RecoverAccount() {

    return ( 
		<div className={'mask container'}>
			<div className={'row'} >
			
				<div className={'col-12'} >
					<div className={' form nomask norounded'} >
						<div className={'form-title'}>
							<h2>Nova Senha</h2>
						</div>
						<input type={'text'} className={'input-border-bottom col-12'} placeholder={'Insira a sua nova senha'} />
						<input type={'text'} className={'input-border-bottom col-12'} placeholder={'Confirme a senha'} />
						
						<div className={"d-flex justify-content-center  "}>
						
							<button type="submit" className={"col-8 button button-defaut bg-blue p-20"}>Entrar</button>
						</div>
					 
							
						
					
					</div>
				</div>
			</div>
		</div>
    );
}
export default RecoverAccount;