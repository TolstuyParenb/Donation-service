import { Settings as settings } from '../core/constants/settings'

export class DonateForm {
    #container
    #totalAmountHTML
    #totalAmount
    #createNewDonate

    constructor(totalAmount, createNewDonate) {
        this.#totalAmount = totalAmount
        this.#createNewDonate = createNewDonate
    }

    updateTotalAmount(newAmount) {
        this.#totalAmountHTML.textContent = `${newAmount}${settings.currency}`
    }

    renderButton() {
        const formBtn = document.createElement('button')
        formBtn.className = 'donate-form__submit-button'
        formBtn.type = 'submit'
        formBtn.textContent = 'Задонатить'

        return formBtn
    }

    renderInput() {
        const label = document.createElement('label')
        label.className = 'donate-form__input-label'
        label.textContent = `Введите сумму в ${settings.currency}`

        const input = document.createElement('input')
        input.className = 'donate-form__donate-input'
        input.name = 'amount'
        input.type = 'number'
        input.max = '100'
        input.min = '1'
        input.required = 'required'
        label.append(input)

        return label
    }

    onCreateNewDonate(event) {
        event.preventDefault()
        const donateValue = Number(event.target.amount.value)
        if (donateValue) {
            const newObjDonate = {
                date: new Date(),
                amount: donateValue,
            }
            this.#createNewDonate(newObjDonate)
            event.target.amount.value = ''
        }
    }

    render() {
        this.#container = document.createElement('form')
        this.#container.className = 'donate-form'
        this.#container.addEventListener('submit', this.onCreateNewDonate.bind(this))

        this.#totalAmountHTML = document.createElement('h1')
        this.#totalAmountHTML.id = 'total-amount'
        this.updateTotalAmount(this.#totalAmount)

        const donateBtn = this.renderButton()
        const donateInput = this.renderInput()
        this.#container.append(this.#totalAmountHTML, donateInput, donateBtn)
        return this.#container
    }

}