

const login =async (req, res) => {
    res.send('fake login')
}


const dashboard = async (req, res) => {

    const luckynr=Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello bro` , secret:`Here is your number ${luckynr}`})


}

module.exports = {login,dashboard}