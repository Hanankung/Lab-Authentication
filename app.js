const express = require('express'); //เป็นตัวเริ่มต้นในการรัน
const mongoose = require('mongoose'); //ใช้เรียก mongoDB
const dotenv = require('dotenv');//ใช้ต้องการเรียกตัวแปรเพื่อทำการใช้

//Configuration
const app = express();
app.use(express.json())

dotenv.config();//ต้องเรียกใช้.env

// ConnectDB
mongoose.connect(process.env.MONGO_DB_URI, {
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// ConnecRoute
const ProductRoute = require("./routes/product");
app.use("/api/product", ProductRoute); //การตั้งชื่อเรียก api

const authRoute = require("./routes/auth");
app.use("/api/auth", authRoute);

//เป็นคำสั่งที่ไปเช็คว่าจะรันที่ port ไหน
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));