import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

  data: any[] = [];
  dataHead: string[] = ['creator','name', ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://infra-hulling-376212-default-rtdb.europe-west1.firebasedatabase.app/plushies.json')
    // ('http://localhost:3000/books')
    .pipe(
      map( data => {
        let newData: any[] = [];
        Object.entries(data).forEach( ([key, value]) => { newData.push(value); } )
        // newData.sort( (x, y) => (x.title < y.title)? 1 : -1 );
        newData.sort((a,b)=>(a.name > b.name)? 1 : -1);
        return newData;
      })
    )
    .subscribe( (data: any[]) =>{
        this.data = data;        
        console.log(this.data);
    });
  }

}
