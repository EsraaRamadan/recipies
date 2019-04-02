import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('amountInput') amountInputRef: ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() {
  }

  ngOnInit() {
  }

   onAddItem() {
    const ingName = this.nameInputRef.nativeElement.vale;
    const ingAmount = this.amountInputRef.nativeElement.vale;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
