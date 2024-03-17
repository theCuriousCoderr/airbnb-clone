import { Injectable } from '@angular/core';
import { HouseListings } from './houselistings'; 


@Injectable({
  providedIn: 'root',
})
export class HouselistingsService {
  getHouses(): HouseListings[] {
    return [
      {
photos: ['../assets/images/az1.jpg', '../assets/images/az2.jfif','../assets/images/az3.jfif','../assets/images/az4.jfif','../assets/images/az5.jfif',] ,
        location: 'Lagos',
        starRating: '4.82',
        favorite: true,
        priceAfterTax: '116',
        priceBeforeTax: '100',
        views: 'amazing views'
      },
      {
        photos: ['../assets/images/surf1.jfif', '../assets/images/surf2.jfif','../assets/images/surf3.jpg','../assets/images/surf4.jfif','../assets/images/surf5.jfif',] ,
        location: 'Ogun',
        starRating: '5.0',
        favorite: true,
        priceAfterTax: '1,568',
        priceBeforeTax: '1,450',
        views: 'surfing'
      },
      {
        photos: ['../assets/images/trend1.jfif', '../assets/images/trend2.jfif','../assets/images/trend3.jfif','../assets/images/trend4.jfif','../assets/images/trend5.jfif',] ,
        location: 'Awka',
        starRating: '4.88',
        favorite: false,
        priceAfterTax: '282',
        priceBeforeTax: '252',
        views: 'trending'
      },
      {
        photos: ['../assets/images/new1.jfif', '../assets/images/new2.jfif','../assets/images/new3.jfif','../assets/images/new4.jfif','../assets/images/new5.jfif',] ,
        location: 'Lafenwa',
        starRating: '4.94',
        favorite: false,
        priceAfterTax: '114',
        priceBeforeTax: '110',
        views: 'new'
      },
      {
        photos: ['../assets/images/earth1.jfif', '../assets/images/earth2.jfif','../assets/images/earth3.jfif','../assets/images/earth4.jfif','../assets/images/earth5.jfif',] ,
        location: 'Jigawa',
        starRating: '4.5',
        favorite: true,
        priceAfterTax: '271',
        priceBeforeTax: '252',
        views: 'Earth homes'
      },

      {
        photos: ['../assets/images/farm1.jfif', '../assets/images/farm2.jfif','../assets/images/farm3.jfif','../assets/images/farm4.jfif','../assets/images/farm5.jfif',] ,
        location: 'Taraba',
        starRating: '4.0',
        favorite: true,
        priceAfterTax: '452',
        priceBeforeTax: '445',
        views: 'farms'
      },
      {
        photos: ['../assets/images/island1.jfif', '../assets/images/island2.jfif','../assets/images/island3.jfif','../assets/images/island4.jfif','../assets/images/island5.jfif',] ,
        location: 'Osun',
        starRating: '4.93',
        favorite: false,
        priceAfterTax: '141',
        priceBeforeTax: '111',
        views: 'islands'
      },
      {
        photos: ['../assets/images/beach1.jfif', '../assets/images/beach2.jfif','../assets/images/beach3.jfif','../assets/images/beach4.jfif','../assets/images/beach5.jfif',] ,
        location: 'Ibadan',
        starRating: '2.87',
        favorite: true,
        priceAfterTax: '263',
        priceBeforeTax: '255',
        views: 'beachfront'
      },
      {
        photos: ['../assets/images/design1.jfif', '../assets/images/design2.jfif','../assets/images/design3.jfif','../assets/images/design4.jfif','../assets/images/design5.jfif',] ,
        location: 'Yobe',
        starRating: '5.0',
        favorite: true,
        priceAfterTax: '1,126',
        priceBeforeTax: '1,095',
        views: 'design'
      },
      {
        photos: ['../assets/images/cabin1.jfif', '../assets/images/cabin2.jfif','../assets/images/cabin3.jfif','../assets/images/cabin4.jfif','../assets/images/cabin5.jfif',] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '126',
        priceBeforeTax: '100',
        views: 'cabins'
      },



      {
        photos: ['../assets/images/camp1.jfif', '../assets/images/camp2.jfif','../assets/images/camp3.jfif','../assets/images/camp4.jfif','../assets/images/camp5.jfif',] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '247',
        priceBeforeTax: '240',
        views: 'campers'
      },
      {
        photos: ['../assets/images/pool1.jfif', '../assets/images/pool2.jfif','../assets/images/pool3.jfif','../assets/images/pool4.jfif','../assets/images/pool5.jfif',] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '381',
        priceBeforeTax: '352',
        views: 'amazing pools'
      },
      {
        photos: ['../assets/images/alien1.jfif', '../assets/images/alien2.jfif','../assets/images/alien3.jfif','../assets/images/alien4.jfif','../assets/images/alien5.jfif',] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '1,250',
        priceBeforeTax: '1,100',
        views: 'omg!'
      },
      {
        photos: ['../assets/images/arctic1.jfif', '../assets/images/arctic2.jfif','../assets/images/arctic3.jfif','../assets/images/arctic4.jfif','../assets/images/arctic5.jfif',] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '475',
        priceBeforeTax: '420',
        views: 'arctic'
      },
      {
        photos: ['../assets/images/cave1.jfif', '../assets/images/cave2.jfif','../assets/images/cave3.jfif','../assets/images/cave4.jfif','../assets/images/cave5.jfif',] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '1,126',
        priceBeforeTax: '1,100',
        views: 'caves'
      },
      {
        photos: ['../assets/images/tropic1.jfif', '../assets/images/tropic2.jfif','../assets/images/tropic3.jfif','../assets/images/tropic4.jfif','../assets/images/tropic5.jfif',] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '570',
        priceBeforeTax: '520',
        views: 'tropical'
      },
      {
        photos: ['../assets/images/room1.jfif', '../assets/images/room2.jfif','../assets/images/room3.jfif','../assets/images/room4.jfif','../assets/images/room5.jfif',] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '2,580',
        priceBeforeTax: '2,514',
        views: 'rooms'
      },
      {
        photos: ['../assets/images/lake1.jfif', '../assets/images/lake2.jfif','../assets/images/lake3.jfif','../assets/images/lake4.jfif','../assets/images/lake5.jfif',] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '789',
        priceBeforeTax: '750',
        views: 'lakes'
      },
    ];
  }
}
