// 0 - free row, 1 - empty row, 30 - selected row

export interface IMovie {
    id:number;
    title:string;
    price:number;
    seats:number[][]
}