const AWS = require("aws-sdk");

class S3DataService {

    constructor(){
        this.s3=new AWS.S3();
    }

    async publicGetS3Object(objectToGet){
        let s3Data = await this.retrieveS3Data(objectToGet);
        return s3Data;
        /*
        Do something with S3Data
        */
    }

    retrieveS3Data(object){
        var params = {
            Bucket: "blog.chrismitchellonline.com", 
            Key: object,            
        };
        return this.s3.getObject(params).promise();
    }

    async inlinePromise(object){                
        let s3= new AWS.S3();

        var params = {
            Bucket: "blog.chrismitchellonline.com", 
            Key: object            
        };

        let S3Data = await s3.getObject(params).promise();
        return S3Data;
    
    }

}

/**This section tests getting S3 by using a dedicated S3 method */
async function testMethod(){
    dataService= new S3DataService();
    let S3Data = await dataService.publicGetS3Object("test.txt");
    console.log(S3Data);
}
//testMethod();
/**End section  */

/** This section tests an inline promise */
async function testInline(){
    dataService = new S3DataService();
    let S3Data= await dataService.inlinePromise("test.txt");
    console.log(S3Data);
}
testInline();
/** end inline promise */







//I know have my S3Data