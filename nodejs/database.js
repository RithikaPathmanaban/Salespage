const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const sql = require('mssql');
const cors = require('cors');
// const { data } = require('jquery');
app.use(cors({
  origin: 'http://localhost:3001',
}));
app.use(express.static('public'));

app.use(bodyParser())

const config = {
    server: 'RITHIKA\\SQLEXPRESS',
    user: 'rithi',
    password: '12345',
    database: 'CMS',
    options: {
      trustServerCertificate : true,
      encrypt: true,  
    },
  };
  const pool = new sql.ConnectionPool(config);


pool.connect()
  .then(() => {
    console.log('Connected to MSSQL database.');
  })
  .catch((err) => {
    console.error('Error connecting to MSSQL database:', err);
  });

app.listen(9000)

function JsonToSql(data){
  var ReturnData = []
  for (var key in data){
    ReturnData.push(" @"+key+" = '"+data[key]+"' ");
  }
  return ReturnData.join(', ')
}


// app.get('/', (req, res) => {
//     console.log('Routing executed');
// });

//   const cors = require('cors');

// // Enable CORS for all routes
// app.use(cors());
  

// Retrieve all categories
// app.get('/', async (req, res) => {
//   try {
//     console.log('Handling GET request for /'); 
//       const result = await pool.request().query('SELECT * FROM CategoryMaster');
//     console.log('Query result:', result.recordset);
//     res.status(200).json(result.recordset);
//   } catch (error) {
//     console.error('Error retrieving categories:', error);
//     res.status(500).json({ error: 'Unable to retrieve categories' });
//   }
// });

// app.post('/fetchData', async (req, res) => {
//   try {
//     const result = await pool.request().query('SELECT LedgerID, Name, Gender, FatherName FROM EmployeeInfo');
//     console.log('Working');
//     res.status(200).json(result.recordset);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Unable to retrieve data' });
//   }
// });

// app.post('/fetchAllData', async (req, res) => {
//   try {
//     const LedgerID = req.body.LedgerID;
//     const result = await pool.request().query('SELECT * FROM EmployeeInfo WHERE LedgerID = ' +LedgerID );
//     console.log('Working');
//     res.status(200).json(result.recordset);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Unable to retrieve data' });
//   }
// });

// Insert a new category using the InsertProduct stored procedure
// app.post('/category', async (req, res) => {
//   try {
//     console.log('Inserting')
//     const { Type, Name } = req.body;
//     const result = await pool.request()
//       .input('Type', sql.VarChar(255), Type)
//       .input('Name', sql.VarChar(50), Name)
//       .execute('InsertProduct');
//       console.log('Query result:',result.recordset)
//     res.status(201).json(result.recordset);
//   } catch (error) {
//     console.error('Error inserting category:', error);
//     res.status(500).json({ error: 'Unable to insert the category' });
//   }
// });

//   app.get('/insert/:Type/:Name', async (req, res) => {
//     try {
//       console.log('Executing')
//       await sql.connect(config);
//       const Type = req.params.Type, Name = req.params.Name;
//       const result = await pool.request()
//       result.query("exec InsertProduct @Type = '"+Type+"', @Name = '"+Name+"' ")
//       await sql.close();
//       res.status(201).json({ message: 'Category inserted successfully', data: result.recordset });
//     } catch (error) {
//       console.error('Error inserting category:', error);
//       await sql.close();
//       res.status(500).json({ error: 'Unable to insert the category' });
//     }
//   });

// app.post('/insert',async(req,res)=>{
//   try{
//     var data = req.body;
//     console.log(data)
//   console.log('Executing Insert ajax')
//     await sql.connect(config);
//     const result = await pool.request() 
//     console.log(JsonToSql(data))
//     console.log("EXEC EmployeeInsertion " + JsonToSql(data))
//     result.query("EXEC EmployeeInsertion   " + JsonToSql(data));
//     await sql.close();
//     res.status(201).json({message:'Inserted successfully',data:result.recordset});
//   }
//   catch(error){
//     console.error('Error inserting',error);
//     await sql.close();
//     res.status(500).json({error:'Unable to insert'});
//   }
// })


// // Update a category using the UpdateCategory stored procedure
// app.get('/update/:categoryID/:Name', async (req, res) => {
//   try {
//     const CategoryID = req.params.categoryID, Name = req.params.Name;
//     const result = await pool.request()
      
//       result.query("exec UpdateCategory @CategoryID = '"+CategoryID+"', @Name = '"+Name+"' ")
//       console.log('Executing update procedure')
//     res.status(200).json({message: 'Updated',data:result.recordset});
//   } catch (error) {
//     console.error('Error updating category:', error);
//     res.status(500).json({ error: 'Unable to update the category' });
//   }
// });

// // Delete a category using the DeleteProduct stored procedure
// app.get('/delete/:categoryID', async (req, res) => {
//   try {
//     // const CategoryID = parseInt(req.body.CategoryID);
//     const CategoryID = req.params.categoryID;
//     // if (!Number.isInteger(CategoryID)) {
//     //   return res.status(400).json({ error: 'Invalid CategoryID. It must be a whole number.' });
//     // }
//     const result = await pool.request()
//       // .input('CategoryID', sql.Int, CategoryID)
//       // .execute('DeleteProduct');
//       result.query("exec DeleteProduct @CategoryID = '"+CategoryID+"' ")
//       console.log('Executing delete procedure')
//     res.status(204).end();
//   } catch (error) {
//     console.error('Error deleting category:', error);
//     res.status(500).json({ error: 'Unable to delete the category' });
//   }
// });

// app.post('/fetchrow', async (req, res) => {
//   try {
//     const LedgerID = req.body.LedgerID;
//     const result = await pool.request().query('SELECT * FROM EmployeeInfo WHERE LedgerID = ' +LedgerID );
//     console.log('Working');
//     res.status(200).json(result.recordset);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Unable to retrieve data' });
//   }
// });
// app.post('/update/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const data = req.body;

//     await sql.connect(config);
//     const result = await pool.request();

//     // Construct your SQL query for updating the record with the given ID
//     const updateQuery = `
//       UPDATE FORMLOGIN
//       SET Name = @Name, EmailAddress = @EmailAddress, Password = @Password
//       WHERE Id = @Id
//     `;

//     // Define the input parameters
//     result.input('Id', sql.Int, id);
//     result.input('Name', sql.NVarChar(255), data.Name);
//     result.input('EmailAddress', sql.NVarChar(255), data.EmailAddress);
//     result.input('Password', sql.NVarChar(255), data.Password);

//     // Execute the update query
//     result.query(updateQuery);

//     await sql.close();
//     res.status(200).json({ message: 'Record updated successfully' });
//   } catch (error) {
//     console.error('Error updating record:', error);
//     await sql.close();
//     res.status(500).json({ error: 'Unable to update record' });
//   }
// });


// app.post('/ProductInsert',async(req,res)=>{
//   try{
//     var data = req.body;
//     console.log(data)
//   console.log('Executing Insert ajax')
//     await sql.connect(config);
//     const result = await pool.request() 
//     console.log(JsonToSql(data))
//     console.log("EXEC ProductInsertion" + JsonToSql(data))
//     result.query("EXEC ProductInsertion" + JsonToSql(data));
//     await sql.close();
//     res.status(201).json({message:'Inserted successfully',data:result.recordset});
//   }
//   catch(error){
//     console.error('Error inserting',error);
//     await sql.close();
//     res.status(500).json({error:'Unable to insert'});
//   }
// })


app.post('/ProductFetchData', async (req, res) => {
  try {
    const result = await pool.request().query('SELECT ProductID, ProductName, UOM, IsReusable FROM ProductMaster');
    console.log('Working');
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Unable to retrieve data' });
  }
});



app.post('/ProductfetchAllData', async (req, res) => {
  try {
    const ProductID = req.body.ProductID;
    const result = await pool.request().query('SELECT * FROM ProductMaster WHERE ProductID = ' +ProductID  );
    console.log('Working');
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Unable to retrieve data' });
  }
});


// app.post('/FetchInward', async (req, res) => {
//   let sqlQuery = "EXEC IOInward @api='FetchInward'";
//   try {
//       const result = await sql.query(sqlQuery);console.log(sqlQuery)
//       console.log('Query result:', result.recordset);
//       res.statusCode = 200;
//       res.json(result.recordset);
//   } catch (err) {
//       console.error('Error executing the query:', err);
//       res.status(500).send('Internal Server Error');
//   }
// });


// app.post('/InsertInward', async (req, res) => {
//   try {
//       const api = 'InsertInward';
//       const query = generateSqlQuery(api, req.body);
//       const pool = await sql.connect(config);
//       const result = await pool.request().query('EXEC ProductInsert');
//       if (result.recordset && result.recordset.length > 0) {
//           return res.status(200).json(result.recordset[0]);
//       } else {
//           return res.status(500).json({ error: 'No data found' });
//       }
//   } catch (err) {
//       console.error('Error executing the query:', err);
//       return res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


app.post('/InsertProduct',async(req,res)=>{
  try{
    var data = req.body;
    console.log(data)
    // const ProductID = req.body.ProductID;
    console.log('Executing Insert ajax')
    await sql.connect(config);
    console.log("EXEC ProductInsert" + JsonToSql(data));
    const result = await pool.request().query("EXEC ProductInsert" + JsonToSql(data));
    console.log(result)
    res.status(200).json({message:result.recordset[0].Message,notifier:result.recordset[0].Notifier});
  }
  catch(error){
    console.error('Error inserting',error);
    // await sql.close();
    res.status(500).json({error:'Unable to insert'});
  }
})
