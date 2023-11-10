import express from 'express'
const app = express()
const port = 3003
import router from './router.js';
import cors from 'cors'




app.use(cors())
app.use(router);

app.use(express.json());



app.use((req,res,next) =>{
  res.header('access-control-allow-origin','*');
  res.header('access-control-allow-methods','get,put,post,delete');
  res.header('access-control-allow-headers','content-type,accept');
  next()
  
})

app.get('/', (req, res) => {

    res.send('Hello World!')

  })
  
  app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

  });
