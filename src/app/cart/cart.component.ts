import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  a : any ;
  pid : any;
  b : any = 0;
  c : any ;
  amount : any =0;
  public list :Array<{pid : any ,a :any , b : any , c : any, amount : any}>=[];
  public Addition : any = 0;
  add(){
    if(this.a== null || this.b == null || this.c == null){  
     alert("Invalid");
      return;

    }
    this.pid = this.pid+1;
    this.amount=this.c*this.b;
    this.list.push({ pid : this.pid ,a:this.a , b : this.b , c : this.c , amount : this.amount});
    this.Addition = this.Addition + this.b;
    this.amount = this.amount+this.c;
    this.a=null;
    this.b=0;
 
  }

delete(pids:any){
  const getting = this.list.findIndex(list=>list.pid=pids);
  this.list.splice(getting,1);

}

deleteall(){
  this.list=[];
}






}


