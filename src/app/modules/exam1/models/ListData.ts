export class ListData {

    id ?: number;
    first_name: string;
    last_name: string;
    email: number;
    ip_address: string;
    pageVar ?: boolean;
    

  
    constructor(obj?: any) {
        if (obj) {

            this.id = obj.id;
            this.first_name = obj.first_name;
            this.last_name = obj.last_name;
            this.email = obj.email;
            this.ip_address = obj.ip_address;
            this.pageVar = obj.pageVar;
     

        }
    }
}
