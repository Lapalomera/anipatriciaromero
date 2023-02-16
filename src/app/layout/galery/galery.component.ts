import {Component } from '@angular/core';
import {Product,Publication} from '../../interface/product';



@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent {


   constructor(){
  
   }   

arepa:Product[]=[
    {
      name:'La Coronada',
      ingredients:['Mezcla de Pollo','Tajada','Queso Amarillo'],
      img:'/assets/img/arepa/paloma1.jpeg',
    },
    {
      name:'La Catira',
      ingredients:['Pollo Mechado','Queso Amarillo'],
      img:'/assets/img/arepa/paloma2.jpeg',
    },
    {
      name:'La Pelua',
      ingredients:['Carne Mechada','Queso Amarillo'],
      img:'/assets/img/arepa/paloma3.jpeg',
    },
    {
      name:'La Sifrina',
      ingredients:['Queso Amarillo','Jamon'],
      img:'/assets/img/arepa/paloma4.jpeg',
    },
    {
      name:'Domino',
      ingredients:['Caraota','Platano','Queso'],
      img:'/assets/img/arepa/paloma5.jpeg',
    },
    {
      name:'La Capresa',
      ingredients:['Tomate','Oregano','Queso Mozzarela'],
      img:'/assets/img/arepa/paloma6.jpeg',
    },
    {
      name:'La Pecadora',
      ingredients:['Diablito','Tomate','Tajada','Huevo','Queso'],
      img:'/assets/img/arepa/paloma7.jpeg',
    },
    {
      name:'La Tunning',
      ingredients:['Arun','Tomate','Aguacate'],
      img:'/assets/img/arepa/paloma8.jpeg',
    }
    
   ];

   publication:Publication[]=[
   {
    title:'San Valentin',
    description:'Enamora a tu Pareja con un Desayuno',
    img:'/assets/img/news/san_valentin.jpeg'
   },
   {
    title:'Serie del Caribe',
    description:'Botala de Home Run como Jose Rondon para ganarte una palomera',
    img:'/assets/img/news/serie_caribe.jpeg'
   },{
    title:'Claramente la Palomera es lo mejor',
    description:'la palomera ya no llora la palomera factura',
    img:'/assets/img/news/claramente.jpeg'
   }
  ];
   
   
}



 



