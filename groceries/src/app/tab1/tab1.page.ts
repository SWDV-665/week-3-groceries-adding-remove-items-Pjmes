import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = 'Grocery';

  items = [

  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {}

  async removeItem(item, index){
    const toast = await this.toastCtrl.create({
      message: 'Removing - ' + item.name + '...',
      duration: 1500,
    });
    toast.present();

    this.items.splice(index, 1);
  }


  addItem() {
    console.log('adding item');
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      header: 'Add Item',
      message: 'Please enter items...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    (await prompt).present();
  }

}






