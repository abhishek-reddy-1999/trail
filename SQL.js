const sql =require('mssql')

const abhi=()=>{
    sql.connect("Driver={ODBC Driver 18 for SQL Server};Server=tcp:abhishek1999.database.windows.net,1433;Database=abhishek;Uid=abhishek;Pwd=a14389069A@;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;",(err)=>{
        if(err){
            console.log('server faildes')
        }
        else{
            console.log('server connected')
        }
    })
    
}



module.exports=abhi