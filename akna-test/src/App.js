import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';

const data = [
  { id: 1, livro: "O Primo Basílio", autor: "Eça de Queirós", preco:"13"},
  { id: 2, livro: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", preco:"25"},
  { id: 3, livro: "Sherlock Holmes", autor: "Arthur Conan Doyle", preco:"40.90"},
  { id: 4, livro: "O Conde de Monte Cristo", autor: "Alexandre Dumas", preco:"33"},
  { id: 5, livro: "O pequeno Príncipe", autor: "Antoine de Saint-Exupéry e Robson Luis Nicolay", preco:"38.45"},
];

class App extends React.Component{
    state= {
      data:data,
      form:{
        id:'',
        livro:'',
        autor:'',
        preco:'',
      },
      modalAdicionar: false,
      modalEditar: false,
    };

    handleChange=e =>{
      this.setState({
        form:{
          ...this.state.form,
          [e.target.name]: e.target.value,
        }
      });
    }

    mostrarModalAdicionar=()=>{
      this.setState({modalAdicionar: true});
    }

    ocultarModalAdicionar=()=>{
      this.setState({modalAdicionar: false});
    }

    mostrarModalEditar=(registro)=>{
      this.setState({modalEditar: true, form: registro});
    }

    ocultarModalEditar=()=>{
      this.setState({modalEditar: false});
    }

    adicionar=()=>{
      var valorNovo={...this.state.form};
      valorNovo.id=this.state.data.length+1;
      var lista=this.state.data;
      lista.push(valorNovo);
      this.setState({data: lista,modalAdicionar:false});
    }

    editar=(dado)=>{
      var contador=0;
      var lista=this.state.data;
      lista.map((registro)=>{
        if(dado.id==registro.id){
          lista[contador].livro=dado.livro;
          lista[contador].autor=dado.autor;
          lista[contador].preco=dado.preco;
        }
        contador++;
      });
      this.setState({data:lista, modalEditar: false});
    }

    excluir=(dado)=>{
      var opcao=window.confirm("Realmente deseja excluir o livro "+ dado.livro);
      if(opcao){
        var contador=0;
        var lista = this.state.data;
        lista.map((registro)=>{
          if(registro.id==dado.id){
            lista.splice(contador,1);
          }
          contador++;
        });
        this.setState({data: lista});
      }
    }

    render(){
      return (
        <>
        <div className="div">
          <img className="img" src="/logo-akna.png" title="Logo da Akna"></img>
        <subtitle><h3>Este projeto visa quem precisa listar e estocar uma série de livros.</h3></subtitle>
        </div>
          <Container className="container">
            <br/>
            <Button color="success" onClick={()=> this.mostrarModalAdicionar()}>Adicionar novo livro</Button>
            <br/>
            <br/>

            <Table className="table">
              <thead>
                <tr>
                  <th>Id:</th>
                  <th>Livro:</th>
                  <th>Autor:</th>
                  <th>Preço:</th>
                  <th>Ações:</th>
                </tr>
              </thead>

              <tbody>
                {this.state.data.map ((elemento)=>(
                  <tr>
                    <td>{elemento.id}</td>
                    <td>{elemento.livro}</td>
                    <td>{elemento.autor}</td>
                    <td>{new Intl.NumberFormat("pt-BR", {style:"currency", currency: "BRL"}).format(elemento.preco)}</td>
                    <td>
                      <Button className="primary" color="primary" onClick={()=> this.mostrarModalEditar(elemento)}>Editar</Button> {" "}
                      <Button className="danger" color="danger" onClick={()=> this.excluir(elemento)}>Excluir</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>

          <Modal isOpen={this.state.modalAdicionar}>
            <ModalHeader>
              <div>
                <h3>Adicionar Registro</h3>
              </div>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <label>
                  <strong>
                    Id:
                  </strong>
                </label>
                <input className="form-control"
                readOnly
                name="id"
                type="text" 
                value={this.state.data.length+1}/>
              </FormGroup>

              <FormGroup>
                <label>
                  <strong>
                    Livro:
                  </strong>
                </label>
                <input className="form-control" 
                name="livro"
                type="text"
                onChange={this.handleChange}/>
              </FormGroup>

              <FormGroup>
                <label>
                  <strong>
                    Autor:
                  </strong>
                </label>
                <input className="form-control" 
                name="autor" 
                type="text"
                onChange={this.handleChange}/>
              </FormGroup> 

              <FormGroup>
                <label>
                  <strong>
                    Preço R$:
                  </strong>
                </label>
                <input className="form-control" 
                name="preco" 
                type="number"
                min="0.01"
                max="999.99"
                onChange={this.handleChange}/>
              </FormGroup>    
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={()=> this.adicionar()}>Adicionar</Button>
              <Button color="danger" onClick={()=> this.ocultarModalAdicionar()}>Cancelar</Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalEditar}>
            <ModalHeader>
              <div>
                <h3>Editar Registro</h3>
              </div>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <label>
                  <strong>
                    Id:
                  </strong>
                </label>
                <input className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}/>
              </FormGroup>

              <FormGroup>
                <label>
                  <strong>
                    Livro:
                  </strong>
                </label>
                <input
                className="form-control"
                name="livro"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.livro}/>
              </FormGroup>

              <FormGroup>
                <label>
                  <strong>
                    Autor:
                  </strong>
                </label>
                <input className="form-control" 
                name="autor" 
                type="text"
                onChange={this.handleChange}
                value={this.state.form.autor}/>
              </FormGroup>    

              <FormGroup>
                <label>
                  <strong>
                    Preço R$:
                  </strong>
                </label>
                <input className="form-control" 
                name="preco" 
                type="number"
                min="0.01"
                max="999.99"
                onChange={this.handleChange}
                value={this.state.form.preco}/>
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={()=> this.editar(this.state.form)}>Editar</Button>
              <Button color="danger" onClick={()=> this.ocultarModalEditar()}>Cancelar</Button>
            </ModalFooter>
          </Modal>
        </>
      )
    }
}

export default App;
