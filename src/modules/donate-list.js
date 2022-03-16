import * as indexUtils  from '../core/utils/index'
import {Settings as settings} from '../core/constants/settings'
export class DonateList {
    #donates
    #donateContainerHTML
    constructor(donates) {  
        this.#donates = donates
    }

    updateDonates(updatedDonates){
        this.#donates =  updatedDonates 
         this.renderDonate(this.#donateContainerHTML)
    }
    renderDonate(container){
        this.#donateContainerHTML.innerHTML = ''
        this.#donates.forEach((donate) => {
            const donateItemHTML = document.createElement('div')
            donateItemHTML.className = 'donate-item'
            const date = donate.date
            donateItemHTML.innerHTML = `${indexUtils.getFormattedTime()} - <b>${donate.amount}${settings.currency}</b>`
              
            container.append(donateItemHTML)
        })
    }
    render(){
        const donatesContainer = document.createElement('div')
        donatesContainer.className = 'donates-container'

        const donateTitleHTML = document.createElement('h2')
        donateTitleHTML.className = 'donates-container__title'
        donateTitleHTML.textContent = 'Список донатов'

        this.#donateContainerHTML = document.createElement('div')
        this.#donateContainerHTML.className = 'donates-container__donates'
        donatesContainer.append(donateTitleHTML, this.#donateContainerHTML)
        this.renderDonate(this.#donateContainerHTML)
        return donatesContainer
    } 
   
}


