import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   /*const promise = new Promise((resolve , reject)=>{
      if (false){
        resolve('hola mundo');
      }else{
        reject('Algo salio mal');
      };
    });

    promise.then((mensaje)=>{
      console.log(mensaje)
    }).catch((error)=>{
      console.log('Error en la promesa',error);
    });
    console.log('fin del init');*/
    this.getUsuarios().then(usuarios=>console.log(usuarios));
  }

  getUsuarios(){

    return new Promise((resolve)=>{
      fetch('https://reqres.in/api/users')
      .then((resp)=> resp.json())
      .then(body =>{resolve(body.data)})
    });

  }

}
