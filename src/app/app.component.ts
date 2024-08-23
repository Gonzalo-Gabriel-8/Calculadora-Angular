import { Component, NgModule, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { publicDecrypt } from 'node:crypto';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora-Angular';
  numero1: string ="0"
  numero2: string = "0";  
  operador: string="";  
  resultado:string ="0";   
  calculo:string=""; 
  Punto: boolean= false;
  SegundoDecimal: boolean= false;
  
  
  EsPunto(event: Event): void {
    if(!this.Punto == true){
      this.numero1 += "."
      this.calculo=(this.numero1 );    
    }
    else{
      let decimal= this.calculo += "."
        this.numero2 += ".";
      
    }
  }
   
  AsignarNumero(event: Event): void {     
    const numero = (event.target as HTMLElement).textContent!;
    //Primer valor
    if (this.Punto== false || this.operador === "") {
      if(this.numero1 === "0"){
        this.numero1 = numero;
        this.calculo = this.numero1;   
      }
      else{
        this.numero1 += numero;
        this.calculo = this.numero1; 
      }            
    }
    //Segundo Numero          
    else if(this.numero2 === "0"){
      this.numero2=numero;
      this.calculo += this.numero2
      
      this.SegundoDecimal= true;         
    } 
    else{
      this.numero2 += numero;
        this.calculo += numero; 
       
    }     
  }    
  AsignarOperador(event:Event):void{
    if(this.operador === ""){
      this.operador=(<HTMLElement>(event.target)).textContent!;  
      var operador= this.numero1 += this.operador;
       this.calculo= operador
      this.Punto = true;  
    }else{
      this.operador=(<HTMLElement>(event.target)).textContent!;  
      this.numero1= this.resultado;
      this.calculo= this.numero1 += this.operador
      this.numero2="0";      
    }
    
     
    
  }
  
  esIgual(event:Event):void{       

    switch(this.operador){      
      case ("+"):       
      this.resultado = (parseFloat(this.numero1) + parseFloat(this.numero2)).toString();       
        
        break;
      case("-"):
      this.resultado= (parseFloat(this.numero1) - parseFloat(this.numero2)).toString();     
      
      break;
      case("*"):
      this.resultado = (parseFloat(this.numero1) * parseFloat(this.numero2)).toString();     
      
      break;
      case("/"):
      let division = (parseFloat(this.numero1) / parseFloat(this.numero2)).toString();     
      if(this.numero2 != "0"){
        this.resultado= division;
      }
      else{
        this.resultado="No se puede dividir por Cero"        
      }
      
      break;
      default:
        break;
    }
  }
  Limpiar(event: Event):void{
    this.resultado="0";
    this.calculo="";
    this.numero1="0";
    this.numero2="0";
    this.operador="";
    this.Punto= false;
  }
  BorrarCaracter(event: Event): void {
    if (this.calculo.length > 0) {
      this.calculo = this.calculo.slice(0, -1); 
    }else{
      this.resultado="0";
    this.calculo="";
    this.numero1="0";
    this.numero2="0";
    this.operador="";
    this.Punto= false;
    }
  }   
}
  

