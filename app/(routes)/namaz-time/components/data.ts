export interface Date {
    arabic:
    {
        day:string,
        dateOfMonth:string,
        month:string,
        year:string,
    },
    english:
    {
        day:string,
        dateOfMonth:string,
        month:string,
        year:string,
    },
}
export interface Wakt {
    name: string,
    start: string,
    end: string,
}
export interface BodyProps{
    date:Date,
    wakt:Wakt[],
}

//sample data

export const Data: BodyProps[]=[
    {
        date:
        {
            english: {
                day:"Monday",
                dateOfMonth:"22",
                month:"July",
                year:"2024",
            },
            arabic: {
                day:"Monday",
                dateOfMonth:"15",
                month:"Muharram",
                year:"1446",
            },
        },
        wakt:[
            {
                name:'tahajjud',
                start:'12:54 am',
                end:'3:58 am'
            },
            {
                name:'fajr',
                start:'12:54 am',
                end:'3:58 am'
            },
            {
                name:'ishrak',
                start:'12:54 am',
                end:'3:58 am'
            },
            {
                name:'sunrise',
                start:'12:54 am',
                end:'3:58 am'
            },
            {
                name:'johr',
                start:'12:54 pm',
                end:'3:58 pm'
            },
            {
                name:'asr',
                start:'12:54 am',
                end:'3:58 am'
            },
            {
                name:'magrib',
                start:'12:54 am',
                end:'3:58 am'
            },
            {
                name:'isha',
                start:'12:54 am',
                end:'3:58 am'
            },
        ]
            
        
    },
    {
        date:
        {
            english: {
                day:"Tuesday",
                dateOfMonth:"23",
                month:"July",
                year:"2024",
            },
            arabic: {
                day:"Tuesday",
                dateOfMonth:"16",
                month:"Muharram",
                year:"1446",
            },
        },
        wakt:[
            {
                name:'tahajjud',
                start:'12:54 am',
                end:'3:58 am'
            },
            {
                name:'fajr',
                start:'12:54 am',
                end:'3:58 am'
            },
            {
                name:'ishrak',
                start:'12:54 am',
                end:'3:58 am'
            },
            {
                name:'tahajjud',
                start:'12:54 am',
                end:'3:58 am'
            },
        ]
            
        
    },
    {
        date:
        {
            english: {
                day:"Tuesday",
                dateOfMonth:"23",
                month:"July",
                year:"2024",
            },
            arabic: {
                day:"Tuesday",
                dateOfMonth:"16",
                month:"Muharram",
                year:"1446",
            },
        },
        wakt:[
            {
                name:'tahajjud',
                start:'12:54 am',
                end:'3:58 am'
            },
            {
                name:'fajr',
                start:'12:54 am',
                end:'3:58 am'
            },
            {
                name:'ishrak',
                start:'12:54 am',
                end:'3:58 am'
            },
            {
                name:'tahajjud',
                start:'12:54 am',
                end:'3:58 am'
            },
        ]
            
        
    },

]
