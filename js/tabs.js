document.addEventListener('DOMContentLoaded', function() {
    const countryButtons = document.querySelectorAll('.reproduction__country-btn')

    countryButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {       
            countryButtons.forEach(function(btn) {
                btn.classList.remove('reproduction__country-btn-active')
            })

            const clickedButton = event.currentTarget;
            clickedButton.classList.add('reproduction__country-btn-active')
            const path = clickedButton.dataset.path

            document.querySelectorAll('.reproduction__cards').forEach(function(tabContent) {
                tabContent.classList.remove('reproduction__cards-active')
            })
            
            document.querySelector(`[data-target="${path}"]`).classList.add('reproduction__cards-active')
        })
    })
})

