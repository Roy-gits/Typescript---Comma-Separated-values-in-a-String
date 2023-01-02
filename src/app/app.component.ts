import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  ngOnInit(){
    //to take the first value only
    const addressName  = "My Business, 123 Main Street,hjsdfbjskd , gdjhdgdj";
    const provinces = addressName.split(',').slice(0,1).join(' ');
    console.log(provinces);

    //to check wheather the string contains comma separated values
    if (addressName.indexOf(',') > -1) {  
      console.log("true") 
    }else{
      console.log("false") 
    }
  }

}
