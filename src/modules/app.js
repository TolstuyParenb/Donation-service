 import * as indexUtils  from '../core/utils/index'
 import{DonateForm}from './donate-form'
 import {DonateList} from './donate-list'
 const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
 ];
 
 export default class App {
     #donateForm
     #donateList
     #state
     constructor(){
            this.#state = {
                donates: mockDonates,
                totalAmount: 0,
            } 
            this.#state.totalAmount = indexUtils.calculateSumOfNumbers(this.#state.donates.map((donate) => donate.amount));
            this.#donateList = new DonateList(this.#state.donates)
            this.#donateForm = new DonateForm(this.#state.totalAmount, this.createNewDonate.bind(this))  
     }
        

        run(){
            const donteFormHTML = this.#donateForm.render()
            const donateListHTML = this.#donateList.render()
            document.body.append(donteFormHTML, donateListHTML)
        }
        createNewDonate(newDonate){
            this.#state.donates.push(newDonate)
            this.#state.totalAmount += newDonate.amount
            this.#donateList.updateDonates(this.#state.donates)
            this.#donateForm.updateTotalAmount(this.#state.totalAmount)
        }    
}