const scriptURL = 'https://script.google.com/macros/s/AKfycbyh402aglmLCmWurQHw9KNKJ_MqzCdsGiHA00oLReNiyYT7lOA1ur-UHSyknqkFBGuASQ/exec'
            const form = document.forms['submit-to-google-sheet']
            const msg = document.getElementById("msg")
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = "Got the message"
                    setTimeout(function(){
                        msg.innerHTML = ""
                    },5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
            })