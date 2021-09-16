const bcrypt = require('bcryptjs')

const users = []


module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const check = bcrypt.compareSync(password, users[i].passwordHash)
          if (checked){
            let userToReturn = {...users[i]}
            delete userToReturn.passwordHash
            res.status(200).send(userToReturn)
            return
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        const {username, email, firstName, lastName, password} = req.body
        users.push(req.body)

        for (let i = 0; i < users.length; i++) {
          if (users[i].username === username) {
            res.status(400).send("try loging in")
            return 
          }
          
        }
        

        for(let i = 0; i < users.length; i++){
          const existing = bcypt.compareSync(password, users[i].passwordHash)
          if(existing){
            users[i].newUser.push(newUser)
            let passwordToReturn ={...users[i]}
            delete passwordToReturn.passwordHash
            res.status(200).send(passwordToReturn)
            return
          };
        
        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)

        let newUser = {
          passwordHash,
          username,
          email,
          firstName,
          lastName
        };

        users.push(newUser)
        let userToReturn = {...newUser}
        delete userToReturn.passwordHash
        res.status(200).send(passwordToReturn)
        console.log(users)
    } 
  }
}
