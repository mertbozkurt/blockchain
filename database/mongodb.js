const {MongoClient,ObjectID} = require('mongodb')

//localhost connection information
const connectionURL = 'mongodb://127.0.0.1:27017'
// database Name
const databaseName = 'blockchain'

//initialize DB
MongoClient.connect(connectionURL,{ useNewUrlParser: true }, (error,client) => {
    if(error){
        return console.log('Unable to connect to database'+ error.toString())
    }
    console.log('Connected')
    const db = client.db(databaseName)
    // User Collection
    db.collection('user').insertOne({
        companyName:'Deloitte',
        name:'Mert' ,
        surname: 'Bozkurt',
        TCID: 14041056202,
        idType: 1,
        idImage:'',
        email:'mbozkurt@deloitte',
        password:'pass1' 
        },(error,result) => {
            if (error){
                return console.log('unable to insert User')
            }
            console.log(result.ops)
        })
    //Company Collection
    db.collection('company').insertOne({
        companyName: '',
        corporateName:'',
        image:'',
        phone:'',
        companyEmail:'',
        address:'',
        taxOffice:'',
        taxNo:123123,
        mersisNo:'',
        companyType:1, 
        foundationYear:1988, 
        city:1, 
        COCCity:1,
        COCNo:1,
        COCimage:'',
        COCRenewDate:new Date('1995-12-17T03:24:00'),
        SignAuthImage:'', 
        partnershipImage:'',
        companyDomain:'',
        labels:'',
        operatingCertificateImage:'',
        contactEmail:''
        },(error,result) => {
            if (error){
                return console.log('unable to insert Company')
            }
            console.log(result.ops)
        })
    //Role Collection
    db.collection('role').insertOne({
        roleID:1,
        roleDesc:''
        },(error,result) => {
            if (error){
                return console.log('unable to insert Role')
            }
            console.log(result.ops)
        })
    //City Collection
    db.collection('user').insertOne({
        cityID:1,
        cityName:'Adana'
        },(error,result) => {
            if (error){
                return console.log('unable to insert City')
            }
            console.log(result.ops)
        })
            
})


//Mert Bozkurt
    