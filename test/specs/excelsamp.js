const sync = require('synchronize')
const fs   = require('fs')

sync(fs, 'readFile')

sync.fiber(function(){
  let data = fs.readFile(__filename, 'loginCredentials.xlsx')
  console.log(data)

  try {
    data = fs.readFile('invalid', 'loginCredentials.xlsx')
  } catch (err) {
    console.log(err)
  }

  fs.readFile(__filename, 'loginCredentials.xlsx', function(err, data){
    console.log(data)
  })
})