import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quoteimage: string = 'assets/quote/quotation.png' ;


  published: boolean = false;
    likes: any = 0;
    dislikes: number = 0;
    date: any = new Date();
    users: User[];
    showDetails: boolean = false;
    addUser(e: any, name: string, author: string, quote: string){
      e.preventDefault();
      if(name.length===0 || author.length===0 || quote.length===0){
        alert("Enter valid details");
      }else{
      this.users.unshift({quote:quote,author:author,name:name,hide:true,date: this.date});
  
      alert("Quote Published")
  
      }
    }
    displayDetails(){
      this.showDetails = !true;
    }
    deleteQuote(li: any){
      let ask = confirm("Are you sure you want to delete? ");
      if(ask){
        li.remove();
      }
  
    }
    addLike(up: any){
      
      this.likes += 1;
      up.innerText = this.likes;
    }
    addDisLike(down: any){
          
      this.dislikes += 1;
      down.innerText = this.dislikes;
  
    }
    constructor() {
      this.users = [
        {
          quote:'The way to get started is to quit talking and begin doing.',
          author:'Walt Disney',
          name:'Eugene Mark Oluoch',
          hide:true,
          date: '2022-02-04T06:14:31'
        },
        {
          quote:"You learn more from failure than from success. Don't let it stop you. Failure builds character.",
          author:'anonymous',
          name:'Eugene Mark Oluoch',
          hide:true,
          date: '2022-02-04T06:28:53'
  
        },
        {
          quote:"If life were predictable it would cease to be life and be without flavour.",
          author:"Eleanor Roosevelt",
          name:"Eugene Mark Oluoch",
          hide:true,
          date: '2022-02-04T06:28:53'
  
        }
  
      ];
    }
  
    ngOnInit() {
  
    }
}
