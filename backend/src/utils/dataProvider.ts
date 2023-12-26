import { PrismaClient } from "@prisma/client";

class DataProvider {

    static dbClient: PrismaClient |undefined 

    static getDatabaseInstance(){
       if(!this.dbClient){
        this.dbClient = new PrismaClient();
       }

        return this.dbClient;
    }
}

export default DataProvider;