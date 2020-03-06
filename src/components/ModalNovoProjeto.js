import React, { Component, useImperativeHandle } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

class ModalNovoProjeto extends Component{ 

    constructor(){
        super()
        this.state={
            nome:"",
            usuario:"",
            descricao:""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange = ({target}) => this.setState({[target.name]: target.value})
        
    handleSubmit(evento){
        evento.preventDefault()
        console.log(this.state)
        this.props.inserirProjeto(this.state)

    }
    

    render(){
        return(
        
        <Modal trigger={<Button className="ui primary button">Criar Projeto</Button>}>
        <Modal.Header>Cadastrar Projeto</Modal.Header>
        <Modal.Content>
            <Form>
                <Form.Input
                 name="nome"
                  value ={this.state.nome} 
                  onChange={this.handleInputChange}
                  label="Nome do Projeto"/>

                <Form.Input 
                name="autor" 
                value= {this.state.usuario}
                onChange={this.handleInputChange}
                label="Autor do Projeto"/>

                <Form.TextArea
                 name="descricao"
                  value={this.state.descricao}
                  onChange={this.handleInputChange}
                  label="Descrição do Projeto"/>
                <Button primary type="submit"> Criar Projeto </Button>
            </Form>   
        </Modal.Content>
    </Modal>

)}}
   

export default ModalNovoProjeto