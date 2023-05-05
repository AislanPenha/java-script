class ValidaFormulario{
    constructor(){
        this.form = document.querySelector('.formulario');
        this.events();
    }
    events(){
        this.form.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const fieldsValid = this.isValid();
        const passwordValid = this.isIdentity();
        if (fieldsValid && passwordValid){
            this.form.submit();
        }
    }
    isIdentity(){
        const pass = this.form.querySelector('.senha');
        const passConfirm = this.form.querySelector('.confirmeSenha');
        if(pass.value !== passConfirm.value){
            this.setError(pass, `Senha não podem ser diferentes.`);
            this.setError(passConfirm, `Senhas não podem ser diferentes.`);
            return false;
        }
        return true;
    }
    isValid(){
        let valid = true;

        for(const textError of this.form.querySelectorAll('.error-text')){
            textError.remove();
        }

        for(const fieldData of this.form.querySelectorAll('.valida')){
    
            if (!fieldData.value){
                let label = fieldData.previousElementSibling.innerText;
                valid = false;
                this.setError(fieldData, `O campo '${label}' não pode ser vazio.`);
            }
        
            if (fieldData.classList.contains('cpf')){
                if(!this.cpfIsValid(fieldData)){
                    valid = false;
                }
            }

            if (fieldData.classList.contains('usuario')){
                    if(fieldData.value.length < 3 || fieldData.value.length > 12 ){
                        valid = false;
                    this.setError(fieldData, `O campo 'Usuário' deverá ter entre 3 e 12 caracteres.`);
                    }
                    if(!fieldData.value.match(/^[A-Za-z0-9]+$/) ){
                        valid = false;
                    this.setError(fieldData, `O campo 'Usuário' só poderá conter letras e/ou números caracteres.`);
                    }
            }
    
            if (fieldData.classList.contains('senha')){
                 if(fieldData.value.length < 6 || fieldData.value.length > 12 ){
                     valid = false;
                 this.setError(fieldData, `O campo 'Senha' deverá ter entre 6 e 12 caracteres.`);
                 }
              
            }
        }
        return valid;
    }
    cpfIsValid(fieldData){
        const cpf = new ValidaCPF(fieldData.value);
        if(!cpf.valida()){
            this.setError(fieldData, `CPF inválido.`);
            return false;
        }
        return true;
    }
    setError(field, text){
        const div = document.createElement('div');
        div.innerText = text;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();