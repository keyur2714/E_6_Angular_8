export class Employee{
    constructor(public id ?: number,public name?: string,public city ?: string,public mobileNo ?: string,public gender ?: string,public salary ?: number,public dept ?: string){}

    display() : void{
        console.log(this.name+" "+this.city+" "+this.mobileNo+" "+this.gender+" "+this.salary+" "+this.dept);
    }
}